import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { IColor } from "../interfaces";

class ColorServiceClass {

    async get(colorId: string | ObjectId): Promise<IColor> {
        const query = { _id: new ObjectId(colorId) };
        return (await collections.colors.findOne(query)) as IColor;
    }

    async getByName(name: string): Promise<IColor> {
        return (await collections.colors.findOne({ name })) as IColor;
    }

    async getAll(): Promise<IColor[]> {
        return (await collections.colors.find({}).sort({ priority: 1 }).toArray()) as IColor[];
    }

    async getTotalCount(): Promise<number> {
        return (await collections.colors.countDocuments()) as number;
    }

    async create(newColor: IColor): Promise<IColor> {
        newColor = { ...newColor }
        const existingColor: IColor = await this.getByName(newColor.name)
        if (existingColor) {
            throw new Error(`Color with name ${newColor.name} already exists`)
        }
        newColor.priority = await this.getTotalCount() + 1
        newColor.createdAt = Date.now()
        const result: InsertOneResult<IColor> = await collections.colors.insertOne(newColor);
        newColor._id = result.insertedId
        return newColor
    }

    async update(color: IColor): Promise<boolean> {
        color = { ...color }
        let existingcolor: IColor = await this.get(color._id)
        if (color.priority !== existingcolor.priority) {
            let allcolors: IColor[] = await this.getAll()
            if (color.priority < 1) color.priority = 1
            if (color.priority > allcolors.length) color.priority = allcolors.length
            let thisColorIndex: number = allcolors.findIndex(c => c._id.toString() === color._id.toString())
            allcolors.splice(thisColorIndex, 1)
            let shouldBeIndex: number = color.priority - 1
            allcolors.splice(shouldBeIndex, 0, color)
            let priority: number = 1
            for (let color of allcolors) {
                const query = { _id: new ObjectId(color._id) };
                delete color._id;
                color.priority = priority++
                await collections.colors.updateOne(query, { $set: color });
            }
            return
        } else {
            const query = { _id: new ObjectId(color._id) };
            delete color._id;
            let result: UpdateResult = await collections.colors.updateOne(query, { $set: color });
            return (result.modifiedCount > 0)
        }
    }

    async delete(colorId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(colorId) };
        await collections.colors.deleteOne(query);
        let allcolors = await this.getAll()
        let priority: number = 1
        for (let color of allcolors) {
            const query = { _id: new ObjectId(color._id) };
            delete color._id;
            color.priority = priority++
            await collections.colors.updateOne(query, { $set: color });
        }
        return
    }
}

export let ColorService: ColorServiceClass = new ColorServiceClass()