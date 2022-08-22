import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { ECategoryStatus, ESubCategoryStatus, ICategory, IProduct, ISubCategory } from "../interfaces";

class CategoryServiceClass {

    async getAll(): Promise<{ category: ICategory, subCategories: ISubCategory[] }[]> {
        let categories: ICategory[] = await this.getAllCategories()
        let allSubCategories: ISubCategory[] = (await collections.subCategories.find({}).toArray()) as ISubCategory[];
        let returnObj: { category: ICategory, subCategories: ISubCategory[] }[] = []
        for (let cat of categories) {
            returnObj.push({
                category: cat,
                subCategories: allSubCategories.filter(s => (s.categoryId.toString() === cat._id.toString()))
            })
        }
        return returnObj;
    }

    async getCategory(categoryId: string | ObjectId): Promise<ICategory> {
        const query = { _id: new ObjectId(categoryId) };
        return (await collections.categories.findOne(query)) as ICategory;
    }

    async getCategoryByName(name: string): Promise<ICategory> {
        return (await collections.categories.findOne({ name })) as ICategory;
    }

    async getAllCategories(): Promise<ICategory[]> {
        return (await collections.categories.find({}).sort({ createdAt: -1 }).toArray()) as ICategory[];
    }

    async createCategory(newCategory: ICategory): Promise<ICategory> {
        newCategory = { ...newCategory }
        const existingCategory: ICategory = await this.getCategoryByName(newCategory.name)
        if (existingCategory) {
            throw new Error(`Category with name ${newCategory.name} already exists`)
        }
        newCategory.createdAt = Date.now()
        newCategory = this.sanitizeCat(newCategory)
        const result: InsertOneResult<ICategory> = await collections.categories.insertOne(newCategory);
        newCategory._id = result.insertedId
        return newCategory
    }

    async updateCategory(category: ICategory): Promise<boolean> {
        category = { ...category }
        const existingCategory: ICategory = await this.getCategoryByName(category.name)
        if (existingCategory && existingCategory._id.toString() !== category._id.toString()) {
            throw new Error(`Category with name ${category.name} already exists`)
        }
        const query = { _id: new ObjectId(category._id) };
        delete category._id;
        category = this.sanitizeCat(category)
        let result: UpdateResult = await collections.categories.updateOne(query, { $set: category });
        return (result.modifiedCount > 0)
    }

    async deleteCategory(categoryId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(categoryId) };
        const result = await collections.categories.deleteOne(query);
        return (result && result.deletedCount > 0)
    }

    async getSubCategory(subCategoryId: string | ObjectId): Promise<ISubCategory> {
        const query = { _id: new ObjectId(subCategoryId) };
        return (await collections.subCategories.findOne(query)) as ISubCategory;
    }

    async getAllSubCategories(categoryId: string | ObjectId): Promise<ISubCategory[]> {
        return (await collections.subCategories.find({ categoryId: new ObjectId(categoryId) }).sort({ createdAt: -1 }).toArray()) as ISubCategory[];
    }

    async getAllProductsByCategory(categoryId: string | ObjectId): Promise<IProduct[]> {
        return (await collections.products.find({ categoryId: new ObjectId(categoryId) }).toArray()) as IProduct[];
    }

    async getAllProductsBySubCategory(subCategoryId: string | ObjectId): Promise<IProduct[]> {
        return (await collections.products.find({ subCategoryId: new ObjectId(subCategoryId) }).toArray()) as IProduct[];
    }

    async createSubCategory(newSubCategory: ISubCategory): Promise<ISubCategory> {
        newSubCategory = { ...newSubCategory }
        const category: ICategory = (await collections.categories.findOne({ _id: new ObjectId(newSubCategory.categoryId) })) as ICategory
        if (!category) {
            throw new Error(`Category ${newSubCategory.categoryId} does not exist`)
        }
        let query = { categoryId: new ObjectId(newSubCategory.categoryId), name: newSubCategory.name };
        const existingSubCategory: ISubCategory = (await collections.subCategories.findOne(query)) as ISubCategory
        if (existingSubCategory) {
            throw new Error(`SubCategory with this name already exists in the category`)
        }
        newSubCategory = this.sanitizeSubCat(newSubCategory)
        newSubCategory.createdAt = Date.now()
        const result: InsertOneResult<ISubCategory> = await collections.subCategories.insertOne(newSubCategory);
        newSubCategory._id = result.insertedId
        return newSubCategory
    }

    async updateSubCategory(subCategory: ISubCategory): Promise<boolean> {
        subCategory = { ...subCategory }
        const query = { _id: new ObjectId(subCategory._id) };
        delete subCategory._id;
        subCategory = this.sanitizeSubCat(subCategory)
        let result: UpdateResult = await collections.subCategories.updateOne(query, { $set: subCategory });
        return (result.modifiedCount > 0)
    }
    async deleteAllSubCategories(categoryId: string | ObjectId): Promise<boolean> {
        const query = { categoryId: new ObjectId(categoryId) };
        const result = await collections.subCategories.deleteMany(query);
        return (result && result.deletedCount > 0)
    }
    async deleteSubCategory(subCategoryId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(subCategoryId) };
        const result = await collections.subCategories.deleteOne(query);
        return (result && result.deletedCount > 0)
    }

    sanitizeCat(o: ICategory): ICategory {
        if (!o.description) delete o.description
        if (!o.imageDocumentId) delete o.imageDocumentId
        else o.imageDocumentId = new ObjectId(o.imageDocumentId)
        return o
    }

    sanitizeSubCat(o: ISubCategory): ISubCategory {
        if(o.categoryId) o.categoryId = new ObjectId(o.categoryId)
        if (!o.description) delete o.description
        if (!o.imageDocumentId) delete o.imageDocumentId
        else o.imageDocumentId = new ObjectId(o.imageDocumentId)
        return o
    }
}

export let CategoryService: CategoryServiceClass = new CategoryServiceClass()