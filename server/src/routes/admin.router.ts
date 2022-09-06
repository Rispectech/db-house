// import express, { Request, Response, Router } from 'express'
// import { EMerchantStatus, IDocument, IAdmin, IPro, IAdminduct } from '../interfaces'
// import { ObjectId } from "mongodb";
// import { LOG } from '../logger';
// import { AdminService } from '../services/admin.service';
// import { uploadImages } from '../multer';
// import { DocumentService } from '../services/document.service';
// import path from 'path';
// import { AppConfig } from '../config';
// import { rename } from 'fs';
// import { ProductService } from '../services/product.service';

// const merchantRouter: Router = express.Router()
// merchantRouter.use(express.json())

// merchantRouter.post('/newMerchantImages', uploadImages.array('images'), async (req: Request, res: Response) => {
//     try {
//         if (req.files) {
//             const adminId: string = req.body.adminId;
//             const admin: IAdmin = await AdminService.get(adminId);
//             if (!admin) throw new Error(`Admin ${adminId} does not exist`)
//             let newDocumentIds: ObjectId[] = []
//             for (let file of Object.values(req.files)) {
//                 let newDoc: IDocument = await DocumentService.create({
//                     _id: null,
//                     fileName: file.originalname,
//                     createdAt: Date.now(),
//                     sizeInBytes: file.size,
//                 });
//                 newDocumentIds.push(newDoc._id)
//                 const newPath: string = path.resolve(AppConfig.directories.documents, newDoc._id.toString());
//                 await new Promise<void>((resolve, reject) => {
//                     rename(file.path, newPath, (err) => {
//                         if (err) reject(err);
//                         resolve()
//                     });
//                 })
//             }
//             let priority: number = 1
//             admin.identification = newDocumentIds.map(i => ({
//                 documentId: i,
//                 approvedByAdmin: false,
//                 priority: priority++
//             }))
//             await AdminService.update(admin)
//             res.status(200).json({ admin });
//         } else throw new Error(`No files received to upload`)
//     } catch (error: any) {
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// });

// merchantRouter.get('/admin/getAll', async (req: Request, res: Response) => {
//     try {
//         res.status(200).json({ merchants: await AdminService.getAll(EMerchantStatus) });
//     } catch (error: any) {
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// })

// // merchantRouter.post('/admin/EnableMerchant', async (req: Request, res: Response) => {
// //     try {
// //         res.status(200).json({ merchants: await AdminService.update(false) });
// //     } catch (error: any) {
// //         LOG.error(error)
// //         res.status(500).json({ error: error.message });
// //     }
// // })

// merchantRouter.get('/getOne/:adminId', async (req: Request, res: Response) => {
//     const adminId: string = req?.params?.adminId;
//     try {
//         res.status(200).json({ admin: await AdminService.get(adminId) });
//     } catch (error) {
//         LOG.error(error)
//         res.status(500).json({ error: `Unable to find matching document with adminId: ${adminId}` });
//     }
// })

// merchantRouter.post("/updateOne", async (req: Request, res: Response) => {
//     try {
//         const admin: IAdmin = req.body.admin;
//         await AdminService.update(admin)
//         res.status(200).json({})
//     } catch (error) {
//         console.error(error)
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// });

// merchantRouter.post("/checkData", async (req: Request, res: Response) => {
//     try {
//         const adminId: string = req.body.adminId;
//         let admin: IAdmin = await AdminService.get(adminId)
//         if (!admin) throw new Error(`Admin ${adminId} does not exist`)
//         let products: IProduct[] = await ProductService.getAllByMerchant(adminId, false)
//         res.status(200).json({ totalProducts: products.length })
//     } catch (error) {
//         console.error(error)
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// });

// merchantRouter.delete("/deleteOne/:adminId", async (req: Request, res: Response) => {
//     try {
//         const adminId: string = req?.params?.adminId;
//         let admin: IAdmin = await AdminService.get(adminId)
//         if (!admin) throw new Error(`Admin ${adminId} does not exist`)
//         let products: IProduct[] = await ProductService.getAllByMerchant(adminId, false)
//         if (products.length === 0) {
//             await AdminService.delete(adminId)
//             res.status(200).json({ success: `Successfully removed admin with adminId ${adminId}` });
//         } else throw new Error(`Admin can not be deleted due to existing products`)
//     } catch (error) {
//         LOG.error(error)
//         res.status(500).json({ error: error.message });
//     }
// });

// export { merchantRouter }