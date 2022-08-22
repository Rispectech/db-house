import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { IBrand } from "../interfaces";

class BrandServiceClass {

    async get(brandId: string | ObjectId): Promise<IBrand> {
        const query = { _id: new ObjectId(brandId) };
        return (await collections.brands.findOne(query)) as IBrand;
    }

    async getByName(name: string): Promise<IBrand> {
        return (await collections.brands.findOne({ name })) as IBrand;
    }

    async getAll(): Promise<IBrand[]> {
        return (await collections.brands.find({}).sort({ priority: 1 }).toArray()) as IBrand[];
    }

    async create(newBrand: IBrand): Promise<IBrand> {
        newBrand = { ...newBrand }
        const existingBrand: IBrand = (await collections.brands.findOne({ name: newBrand.name })) as IBrand
        if (existingBrand) {
            throw new Error(`Brand with this name already exists`)
        }
        newBrand.createdAt = Date.now()
        const result: InsertOneResult<IBrand> = await collections.brands.insertOne(newBrand);
        newBrand._id = result.insertedId
        return newBrand
    }

    async update(brand: IBrand): Promise<boolean> {
        brand = { ...brand }
        let existingbrand: IBrand = await this.getByName(brand.name)
        if (existingbrand && existingbrand._id.toString() !== brand._id.toString()) {
            throw new Error(`Brand with name ${brand.name} already exists`)
        }
        const query = { _id: new ObjectId(brand._id) };
        delete brand._id;
        let result: UpdateResult = await collections.brands.updateOne(query, { $set: brand });
        return (result.modifiedCount > 0)
    }

    async delete(brandId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(brandId) };
        const result = await collections.brands.deleteOne(query);
        return (result && result.deletedCount > 0)
    }
}

export let BrandService: BrandServiceClass = new BrandServiceClass()