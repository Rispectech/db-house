import express, { Request, Response, Router } from "express";
import { rename } from "fs";
import path from "path";
import { IDocument, IMerchant } from "../interfaces";
import { LOG } from "../logger";
import { uploadImages } from "../multer";
import { DocumentService } from "../services/document.service";
import { ProductService } from "../services/product.service";
import { IProduct } from "../interfaces";
import { AppConfig } from "../config";
import { MerchantService } from "../services/merchant.service";

const productRouter: Router = express.Router();
productRouter.use(express.json());

productRouter.post("/getProductsByCategory", async (req: Request, res: Response) => {
  try {
    let categoryId: string = req.body.categoryId;
    let activeProducts: IProduct[] = await ProductService.getAllByCategory(categoryId, true);
    let activeMerchants: IMerchant[] = await MerchantService.getAll(true);
    let resultProducts: IProduct[] = activeProducts.filter((p) => {
      return (
        activeMerchants.findIndex((m) => m._id.toString() === p.merchantId.toString()) !== -1
      );
    });
    res.status(200).json({ products: resultProducts });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.post("/getProductsBySubCategory", async (req: Request, res: Response) => {
  try {
    let subCategoryId: string = req.body.subCategoryId;
    let activeProducts: IProduct[] = await ProductService.getAllBySubCategory(
      subCategoryId,
      true
    );
    let activeMerchants = await MerchantService.getAll(true);
    let resultProducts: IProduct[] = activeProducts.filter((p) => {
      return (
        activeMerchants.findIndex((m) => m._id.toString() === p.merchantId.toString()) !== -1
      );
    });
    res.status(200).json({ products: resultProducts });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.post(
  "/newProductImages",
  uploadImages.array("image"),
  async (req: Request, res: Response) => {
    try {
      let filesToUpload: Express.Multer.File[] = req.files as Express.Multer.File[];
      if (!filesToUpload || filesToUpload.length < 0)
        throw new Error(`Files not available for upload`);
      const productId: string = req.body.productId;
      const product: IProduct = await ProductService.get(productId);
      if (!product) throw new Error(`Product ${productId} does not exist`);
      if (!product.images) product.images = [];
      for (let image of product.images) {
        if (image.documentId) {
          await DocumentService.delete(image.documentId);
        }
      }
      product.images = [];
      let priority: number = 1;
      for (const currentFile of filesToUpload) {
        let newDocument: IDocument = {
          _id: null,
          fileName: currentFile.originalname,
          createdAt: Date.now(),
          sizeInBytes: currentFile.size,
        };
        newDocument = await DocumentService.create(newDocument);
        product.images.push({ documentId: newDocument._id, priority: priority++ });
        const newPath: string = path.resolve(
          AppConfig.directories.documents,
          newDocument._id.toString()
        );
        await new Promise<void>((resolve, reject) => {
          rename(currentFile.path, newPath, (err) => {
            if (err) reject(err);
            else resolve();
          });
        });
      }
      await ProductService.update(product);
      res.status(200).json({ product });
    } catch (error: any) {
      LOG.error(error);
      res.status(500).json({ error: error.message });
    }
  }
);

productRouter.get("/admin/getAll", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ products: await ProductService.getAll(false) });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.get("/getAll", async (req: Request, res: Response) => {
  try {
    res.status(200).json({ products: await ProductService.getAll(true) });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.post("/createProduct", async (req: Request, res: Response) => {
  try {
    let product: IProduct = req.body.product;
    product = await ProductService.create(product);
    res.status(200).json({ product });
  } catch (error: any) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.get("/getOne/:productId", async (req: Request, res: Response) => {
  const productId: string = req?.params?.productId;
  try {
    res.status(200).json({ product: await ProductService.get(productId) });
  } catch (error) {
    LOG.error(error);
    res
      .status(500)
      .json({ error: `Unable to find matching document with productId: ${productId}` });
  }
});

productRouter.post("/updateOne", async (req: Request, res: Response) => {
  try {
    const product: IProduct = req.body.product;
    await ProductService.update(product);
    res.status(200).json({});
  } catch (error) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

productRouter.delete("/deleteOne/:productId", async (req: Request, res: Response) => {
  const productId: string = req?.params?.productId;
  try {
    await ProductService.delete(productId);
    res.status(200).json({});
  } catch (error) {
    LOG.error(error);
    res.status(500).json({ error: error.message });
  }
});

export { productRouter };
