import express, { Request, Response, Router } from "express";
import { IDocument, IUser, IProduct } from "../interfaces";
import { ObjectId } from "mongodb";
import { LOG } from "../logger";
import { userService } from "../services/user.service";
import { uploadImages } from "../multer";
import { DocumentService } from "../services/document.service";
import path from "path";
import { AppConfig } from "../config";
import { rename } from "fs";
import { ProductService } from "../services/product.service";

const userRouter: Router = express.Router();
userRouter.use(express.json());

userRouter.post(
  "/newuserImages",
  uploadImages.array("images"),
  async (req: Request, res: Response) => {
    try {
      if (req.files) {
        const userId: string = req.body.userId;
        const user: IUser = await userService.get(userId);
        if (!user) throw new Error(`user ${userId} does not exist`);
        let newDocumentIds: ObjectId[] = [];
        for (let file of Object.values(req.files)) {
          let newDoc: IDocument = await DocumentService.create({
            _id: null,
            fileName: file.originalname,
            createdAt: Date.now(),
            sizeInBytes: file.size,
          });
          newDocumentIds.push(newDoc._id);
          const newPath: string = path.resolve(
            AppConfig.directories.documents,
            newDoc._id.toString()
          );
          await new Promise<void>((resolve, reject) => {
            rename(file.path, newPath, (err) => {
              if (err) reject(err);
              resolve();
            });
          });
        }
        let priority: number = 1;
        user.identification = newDocumentIds.map((i) => ({
          documentId: i,
          approvedByAdmin: false,
          priority: priority++,
        }));
        await userService.update(user);
        res.status(200).json({ user });
      } else throw new Error(`No files received to upload`);
    } catch (error: any) {
      LOG.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

userRouter.get("/admin/getAll", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ users: await userService.getAll() });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

userRouter.get("/getOne/:userId", async (req: Request, res: Response) => {
  const userId: string = req?.params?.userId;
  try {
    res.status(200).json({ user: await userService.get(userId) });
  } catch (error) {
    LOG.error(error);
    res.status(500).json({ error: `Unable to find matching document with userId: ${userId}` });
  }
});

userRouter.post("/updateOne", async (req: Request, res: Response) => {
  try {
    const user: IUser = req.body.user;
    await userService.update(user);
    res.status(200).json({});
  } catch (error) {
    console.error(error);
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

userRouter.post("/checkData", async (req: Request, res: Response) => {
  try {
    const userId: string = req.body.userId;
    let user: IUser = await userService.get(userId);
    if (!user) throw new Error(`user ${userId} does not exist`);
    let products: IProduct[] = await ProductService.getAllByMerchant(userId, false);
    res.status(200).json({ totalProducts: products.length });
  } catch (error) {
    console.error(error);
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

userRouter.delete("/deleteOne/:userId", async (req: Request, res: Response) => {
  try {
    const userId: string = req?.params?.userId;
    let user: IUser = await userService.get(userId);
    if (!user) throw new Error(`user ${userId} does not exist`);
    let products: IProduct[] = await ProductService.getAllByMerchant(userId, false);
    if (products.length === 0) {
      await userService.delete(userId);
      res.status(200).json({ success: `Successfully removed user with userId ${userId}` });
    } else throw new Error(`user can not be deleted due to existing products`);
  } catch (error) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

export { userRouter };
