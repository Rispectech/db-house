import express, { Request, Response, Router } from 'express'
import { IDocument, IMerchant, IProduct } from '../interfaces'
import { ObjectId } from "mongodb";
import { LOG } from '../logger';
import { MerchantService } from '../services/merchant.service';
import { uploadImages } from '../multer';
import { DocumentService } from '../services/document.service';
import path from 'path';
import { AppConfig } from '../config';
import { rename } from 'fs';
import { ProductService } from '../services/product.service';

const merchantRouter: Router = express.Router()
merchantRouter.use(express.json())

merchantRouter.post('/newMerchantImages', uploadImages.array('images'), async (req: Request, res: Response) => {
    try {
        if (req.files) {
            const merchantId: string = req.body.merchantId;
            const merchant: IMerchant = await MerchantService.get(merchantId);
            if (!merchant) throw new Error(`Merchant ${merchantId} does not exist`)
            let newDocumentIds: ObjectId[] = []
            for (let file of Object.values(req.files)) {
                let newDoc: IDocument = await DocumentService.create({
                    _id: null,
                    fileName: file.originalname,
                    createdAt: Date.now(),
                    sizeInBytes: file.size,
                });
                newDocumentIds.push(newDoc._id)
                const newPath: string = path.resolve(AppConfig.directories.documents, newDoc._id.toString());
                await new Promise<void>((resolve, reject) => {
                    rename(file.path, newPath, (err) => {
                        if (err) reject(err);
                        resolve()
                    });
                })
            }
            let priority: number = 1
            merchant.identification = newDocumentIds.map(i => ({
                documentId: i,
                approvedByAdmin: false,
                priority: priority++
            }))
            await MerchantService.update(merchant)
            res.status(200).json({ merchant });
        } else throw new Error(`No files received to upload`)
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

merchantRouter.get('/admin/getAll', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ merchants: await MerchantService.getAll(false) });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
})

merchantRouter.get('/getOne/:merchantId', async (req: Request, res: Response) => {
    const merchantId: string = req?.params?.merchantId;
    try {
        res.status(200).json({ merchant: await MerchantService.get(merchantId) });
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: `Unable to find matching document with merchantId: ${merchantId}` });
    }
})

merchantRouter.post("/updateOne", async (req: Request, res: Response) => {
    try {
        const merchant: IMerchant = req.body.merchant;
        await MerchantService.update(merchant)
        res.status(200).json({})
    } catch (error) {
        console.error(error)
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

merchantRouter.post("/checkData", async (req: Request, res: Response) => {
    try {
        const merchantId: string = req.body.merchantId;
        let merchant: IMerchant = await MerchantService.get(merchantId)
        if (!merchant) throw new Error(`Merchant ${merchantId} does not exist`)
        let products: IProduct[] = await ProductService.getAllByMerchant(merchantId, false)
        res.status(200).json({ totalProducts: products.length })
    } catch (error) {
        console.error(error)
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

merchantRouter.delete("/deleteOne/:merchantId", async (req: Request, res: Response) => {
    try {
        const merchantId: string = req?.params?.merchantId;
        let merchant: IMerchant = await MerchantService.get(merchantId)
        if (!merchant) throw new Error(`Merchant ${merchantId} does not exist`)
        let products: IProduct[] = await ProductService.getAllByMerchant(merchantId, false)
        if (products.length === 0) {
            await MerchantService.delete(merchantId)
            res.status(200).json({ success: `Successfully removed merchant with merchantId ${merchantId}` });
        } else throw new Error(`Merchant can not be deleted due to existing products`)
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

export { merchantRouter }