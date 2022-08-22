import { AppConfig } from "./config"
import { IAdmin, IBrand, IColor, IUnit } from "./interfaces"
import * as mongoDB from "mongodb";
import { LOG } from "./logger"
import { BrandService } from "./services/brand.service"
import { UnitService } from "./services/unit.service";
import { ColorService } from "./services/color.service";
import { AdminService } from "./services/admin.service";
import { AuthUtils } from "./auth.utils";

export async function dbInit(db: mongoDB.Db) {
    await db.dropDatabase()
    await db.createCollection(AppConfig.mongoCollections.admins).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.clients).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.merchants).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.categories).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.subCategories).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.products).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.brands).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.documents).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.colors).catch(e => console.log(e))
    await db.createCollection(AppConfig.mongoCollections.units).catch(e => console.log(e))
}
export async function dataInit(db) {

    let newAdmin: IAdmin = {
        _id: null,
        name: "Admin",
        email: "admin@gmail.com",
        secret: await AuthUtils.generateHashPassword("123456"),
        createdAt: 0
    }
    await AdminService.create(newAdmin)

    const newBrands = ["Adidas", "Puma", "Nike", "Armani Exchange", "Peter England", "Other"]
    for (let brand of newBrands) {
        let newBrand: IBrand = {
            _id: undefined,
            name: brand,
            priority: 1,
            createdAt: Date.now()
        }
        try {
            await BrandService.create(newBrand)
            LOG.info(`Brand ${newBrand.name} created`)
        } catch (e) {
            console.error(e)
            LOG.error(e)
        }
    }

    const newUnits = ["mm", "cm", "Inch", "m", "Feet"]
    for (let unit of newUnits) {
        let newUnit: IUnit = {
            _id: undefined,
            name: unit,
            priority: 1,
            createdAt: Date.now()
        }
        try {
            await UnitService.create(newUnit)
            LOG.info(`Unit ${newUnit.name} created`)
        } catch (e) {
            console.error(e)
            LOG.error(e)
        }
    }

    const newColors = ["Red", "Green", "Blue", "Black", "White"]
    const newHexValues = ["#FF0000", "00FF00", "#0000FF", "#000000", "#FFFFFF"]
    let index = 0
    for (let color of newColors) {
        let newColor: IColor = {
            _id: undefined,
            name: color,
            hexValue: newHexValues[index],
            priority: index + 1,
            createdAt: Date.now()
        }
        try {
            await ColorService.create(newColor)
            index++
            LOG.info(`Color ${newColor.name} created`)
        } catch (e) {
            console.error(e)
            LOG.error(e)
        }
    }
}