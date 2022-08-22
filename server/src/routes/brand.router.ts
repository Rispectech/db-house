import express, { Request, Response, Router } from 'express'
import { LOG } from '../logger';
import { BrandService } from '../services/brand.service';
import { IBrand } from '../interfaces';

const brandRouter: Router = express.Router()
brandRouter.use(express.json())

brandRouter.post('/create', async (req: Request, res: Response) => {
    try {
        let brand: IBrand = req.body.brand;
        brand = await BrandService.create(brand);
        res.status(200).json({ brand });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

brandRouter.get('/getAll', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ brands: await BrandService.getAll() });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
})

brandRouter.get('/getOne/:brandId', async (req: Request, res: Response) => {
    const brandId = req?.params?.brandId;
    try {
        res.status(200).json({ brand: await BrandService.get(brandId) });
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: `Unable to find matching document with brandId: ${req.params.brandId}` });
    }
})

brandRouter.post("/updateOne", async (req: Request, res: Response) => {
    try {
        let brand: IBrand = req.body.brand;
        await BrandService.update(brand)
        res.status(200).json({})
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

brandRouter.delete("/deleteOne/:brandId", async (req: Request, res: Response) => {
    try {
        const brandId = req?.params?.brandId;
        await BrandService.delete(brandId)
        res.status(200).json({});
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

export { brandRouter }