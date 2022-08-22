import { Request } from 'express'
import multer, { FileFilterCallback } from 'multer'
import path from 'path'
import { AppConfig } from './config'

const fileStorage = multer.diskStorage({
    destination: (
        request: Request,
        file: Express.Multer.File,
        callback: any
    ): void => {
        callback(null, AppConfig.directories.temp)
    },
    filename: (
        req: Request,
        file: Express.Multer.File,
        callback: any
    ): void => {
        callback(null, file.originalname)
    }
})

const fileFilter = (
    request: Request,
    file: Express.Multer.File,
    callback: FileFilterCallback
): void => {
    if (
        file.mimetype === 'image/png' ||
        file.mimetype === 'image/jpg' ||
        file.mimetype === 'image/jpeg'
    ) {
        callback(null, true)
    } else {
        callback(null, false)
    }
}

export const uploadImages = multer({ storage: fileStorage, fileFilter: fileFilter });