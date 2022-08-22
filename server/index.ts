import express, { Router } from 'express'
import { json } from 'body-parser'
import { authRouter } from './src/routes/auth.router'
import { connectToDatabase } from "./src/db.service"
import * as dotenv from "dotenv"
import cors from 'cors'
import { LOG } from './src/logger'
import passport from 'passport'
import { AuthUtils } from './src/auth.utils'
import { AppConfig } from './src/config'
import { merchantRouter } from './src/routes/merchant.router'
import { brandRouter } from './src/routes/brand.router'
import { categoryRouter } from './src/routes/category.router'
import { documentRouter } from './src/routes/document.router'
import { productRouter } from './src/routes/product.router'
import { ACCESSLOG } from './src/access.logger'
import fs from 'fs-extra'
import { miscRouter } from './src/routes/misc.router'

dotenv.config()

const app: express.Application = express()

AuthUtils.passportMiddlewares()

let initDirectories = async () => {
    return fs.ensureDir(AppConfig.directories.documents)
        .then(() => fs.ensureDir(AppConfig.directories.temp))
}

LOG.info(`Connecting to database...`)
initDirectories()
    .then(connectToDatabase)
    .then(() => {

        LOG.info(`Initializing server...`)
        app.use(json())
        app.use(cors())
        app.use(passport.initialize())
        app.use((req, res, next) => {
            var ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
            ACCESSLOG.info(`Request [From:${ip}] ${req.path}`)
            next()
        })

        let appRouter: Router = express.Router()

        appRouter.use("/auth", authRouter)
        appRouter.use("/merchants", passport.authenticate('jwt', { session: false }), merchantRouter)
        appRouter.use("/brands", passport.authenticate('jwt', { session: false }), brandRouter)
        appRouter.use("/categories", /*passport.authenticate('jwt', { session: false }),*/ categoryRouter)
        appRouter.use("/documents", documentRouter)
        appRouter.use("/product", passport.authenticate('jwt', { session: false }), productRouter)
        appRouter.use("/misc", passport.authenticate('jwt', { session: false }), miscRouter)

        app.use(`/rest`, appRouter)

        app.listen(AppConfig.serverPort, AppConfig.serverHost, () => {
            LOG.info(`Server started at http://${AppConfig.serverHost}:${AppConfig.serverPort}`);
        });

    })
    .catch((err) => {
        LOG.error("Application Initialization Failed.");
        LOG.error(err.message)
        process.exit();
    });

process
    .on('unhandledRejection', (reason, p) => {
        LOG.error(reason)
        console.error(reason, 'Unhandled Rejection at Promise', p);
    })
    .on('uncaughtException', err => {
        LOG.error(err)
        console.error(err, 'Uncaught Exception thrown');
        process.exit(1);
    });