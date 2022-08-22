import express, { Request, Response, Router } from 'express'
import { LOG } from '../logger';
import { IColor, IUnit } from '../interfaces';
import { ColorService } from '../services/color.service';
import { UnitService } from '../services/unit.service';

const miscRouter: Router = express.Router()
miscRouter.use(express.json())

miscRouter.get('/getAllColors', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ colors: (await ColorService.getAll()) });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
})
miscRouter.get('/getColor/:colorId', async (req: Request, res: Response) => {
    const colorId = req?.params?.colorId;
    try {
        res.status(200).json({
            color: await ColorService.get(colorId),
        });
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: `Unable to find matching color with colorId: ${req.params.colorId}` });
    }
})
miscRouter.post('/createColor', async (req: Request, res: Response) => {
    try {
        let color: IColor = req.body;
        color = await ColorService.create(color);
        res.status(200).json({ color });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});
miscRouter.post("/updateColor", async (req: Request, res: Response) => {
    try {
        let { color } = req.body;
        if (await ColorService.update(color)) {
            res.status(200).json({})
        } else res.status(304).send(`IColor with colorId: ${color._id} not updated`);
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});
miscRouter.delete("/deleteColor/:colorId", async (req: Request, res: Response) => {
    const colorId = req?.params?.colorId;
    try {
        await ColorService.delete(colorId)
        res.status(200).json({})
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

miscRouter.get('/getAllUnits', async (req: Request, res: Response) => {
    try {
        res.status(200).json({ units: (await UnitService.getAll()) });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
})
miscRouter.post('/createUnit', async (req: Request, res: Response) => {
    try {
        let unit: IUnit = req.body;
        unit = await UnitService.create(unit);
        res.status(200).json({ unit });
    } catch (error: any) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});
miscRouter.get('/getUnit/:unitId', async (req: Request, res: Response) => {
    const unitId = req?.params?.unitId;
    try {
        res.status(200).json({
            unitId: await UnitService.get(unitId),
        });
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: `Unable to find matching unit with UnitId: ${req.params.unitId}` });
    }
})
miscRouter.post("/updateUnit", async (req: Request, res: Response) => {
    try {
        let { unit } = req.body;
        if (await UnitService.update(unit)) {
            res.status(200).json({})
        } else res.status(304).send(`IUnit with unitId: ${unit._id} not updated`);
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});
miscRouter.delete("/deleteUnit/:unitId", async (req: Request, res: Response) => {
    const unitId = req?.params?.unitId;
    try {
        await UnitService.delete(unitId)
        res.status(200).json({})
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: error.message });
    }
});

export { miscRouter }