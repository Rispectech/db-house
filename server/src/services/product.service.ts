import { Double, InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { EProductStatus, IProduct } from "../interfaces";

class ProductServiceClass {

    async get(productId: string | ObjectId): Promise<IProduct> {
        const query = { _id: new ObjectId(productId) };
        return (await collections.products.findOne(query)) as IProduct;
    }

    async getAll(activeOnly: boolean): Promise<IProduct[]> {
        let query: any = {}
        if (activeOnly) {
            query.status = EProductStatus.Active
        }
        return (await collections.products.find(query).sort({ createdAt: -1 }).toArray()) as IProduct[];
    }

    async getAllByMerchant(merchantId: string | ObjectId, activeOnly: boolean): Promise<IProduct[]> {
        let query: any = { merchantId: new ObjectId(merchantId) }
        if (activeOnly) {
            query.status = EProductStatus.Active
        }
        return (await collections.products.find(query).sort({ createdAt: -1 }).toArray()) as IProduct[];
    }

    async getAllByCategory(categoryId: string | ObjectId, activeOnly: boolean): Promise<IProduct[]> {
        let query: any = { categoryId: new ObjectId(categoryId) }
        if (activeOnly) {
            query.status = EProductStatus.Active
        }
        return (await collections.products
            .find(query)
            .sort({ createdAt: -1 })
            .toArray()) as IProduct[];
    }

    async getAllBySubCategory(subCategoryId: string | ObjectId, activeOnly: boolean): Promise<IProduct[]> {
        let query: any = { subCategoryId: new ObjectId(subCategoryId) }
        if (activeOnly) {
            query.status = EProductStatus.Active
        }
        return (await collections.products
            .find(query)
            .sort({ createdAt: -1 })
            .toArray()) as IProduct[];
    }

    async create(newProduct: IProduct): Promise<IProduct> {
        newProduct = { ...newProduct }
        newProduct.createdAt = Date.now()
        newProduct = this.sanitize(newProduct)
        if(!newProduct.seo) newProduct.seo = {
            metaTagDescription: "",
            metaTagKeywords: "",
            metaTagTitle: ""
        }
        delete newProduct._id
        const result: InsertOneResult<IProduct> = await collections.products.insertOne(newProduct);
        newProduct._id = result.insertedId
        return newProduct
    }

    async update(product: IProduct): Promise<boolean> {
        product = { ...product }
        product = this.sanitize(product)
        const query = { _id: new ObjectId(product._id) };
        delete product._id;
        let result: UpdateResult = await collections.products.updateOne(query, { $set: product });
        return (result.modifiedCount > 0)
    }

     //how to add merchant by admin?



    async delete(productId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(productId) };
        const result = await collections.products.deleteOne(query);
        return (result && result.deletedCount > 0)
    }

    sanitize(o: IProduct): IProduct {
        if (o.merchantId) o.merchantId = new ObjectId(o.merchantId)
        if (o.brandId) o.brandId = new ObjectId(o.brandId)
        if (o.categoryId) o.categoryId = new ObjectId(o.categoryId)
        if (o.subCategoryId) o.subCategoryId = new ObjectId(o.subCategoryId)
        if (!o.description) delete o.description
        if (o.images) o.images.forEach(i => {
            i.documentId = new ObjectId(i.documentId)
        })
        if (o.variantParameters) {
            if (o.variantParameters.dimensionUnitId) {
                o.variantParameters.dimensionUnitId = new ObjectId(o.variantParameters.dimensionUnitId)
            } else delete o.variantParameters.dimensionUnitId
        }
        if (o.variants) o.variants.forEach(v => {
            if (!v.priority || v.priority < 0 || Number.isNaN(v.priority)) {
                delete v.priority
            }
            if (!v.colorId) delete v.colorId
            else v.colorId = new ObjectId(v.colorId)
            if (Number.isNaN(v.dimensions.width)) delete v.dimensions.width
            if (Number.isNaN(v.dimensions.thickness)) delete v.dimensions.thickness
            if (Number.isNaN(v.minPurchaseQuantity)) delete v.minPurchaseQuantity
            if (Number.isNaN(v.availableQuantity)) delete v.availableQuantity
            if (Number.isNaN(v.discountPercentage)) delete v.discountPercentage
            if (Number.isNaN(v.price)) delete v.price
            if (!Number.isNaN(v.price)) v.price = new Double(Number.parseFloat(v.price.toString()))
            if (v.dimensions) {
                if (!Number.isNaN(v.dimensions.height)) v.dimensions.height = new Double(Number.parseFloat(v.dimensions.height.toString()))
                if (!Number.isNaN(v.dimensions.width)) v.dimensions.width = new Double(Number.parseFloat(v.dimensions.width.toString()))
                if (!Number.isNaN(v.dimensions.thickness)) v.dimensions.thickness = new Double(Number.parseFloat(v.dimensions.thickness.toString()))
            }
        })
        return o
    }
}

export let ProductService: ProductServiceClass = new ProductServiceClass()