import express, { Request, Response, Router } from 'express'
import { LOG } from '../logger';
import fs from 'fs'
import path from 'path';
import { AppConfig } from '../config';

const documentRouter: Router = express.Router()
documentRouter.use(express.json())

documentRouter.get('/get/:documentId', async (req: Request, res: Response) => {
    const documentId = req?.params?.documentId;
    try {
        var file = fs.readFileSync(path.join(AppConfig.directories.documents, documentId));
        res.setHeader('Content-Length', file.length);
        res.write(file, 'binary');
        res.end();
    } catch (error) {
        LOG.error(error)
        res.status(500).json({ error: `Unable to find matching document with documentId: ${req.params.documentId}` });
    }
})

export { documentRouter }