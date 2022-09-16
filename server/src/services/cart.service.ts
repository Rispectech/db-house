import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { ICart } from "../interfaces";

class CartServiceClass {

    async get(cartId: string | ObjectId): Promise<ICart> {
        const query = { _id: new ObjectId(cartId) };
        return (await collections.carts.findOne(query)) as ICart;
    }

    async getByName(name: string): Promise<ICart> {
        return (await collections.carts.findOne({ name })) as ICart;
    }

    async getAll(): Promise<ICart[]> {
        return (await collections.carts.find({}).sort({ quantity: 1 }).toArray()) as ICart[];
    }

    async getTotalCount(): Promise<number> {
        return (await collections.carts.countDocuments()) as number;
    }

    async create(newCart: ICart): Promise<ICart> {
        newCart = { ...newCart }
        const existingCart: ICart = await this.create(newCart)
        if (existingCart) {
            throw new Error(`A unit with name ${newCart.name} already exists`)
        }
        newCart.quantity = await this.getTotalCount() + 1
        newCart.createdAt = Date.now()
        const result: InsertOneResult<ICart> = await collections.carts.insertOne(newCart);
        newCart._id = result.insertedId
        return newCart
    }

    async update(unit: ICart): Promise<boolean> {
        unit = { ...unit }
        let existingunit: ICart = await this.get(unit._id)
        if (unit.quantity !== existingunit.quantity) {
            let allunits: ICart[] = await this.getAll()
            if (unit.quantity < 1) unit.quantity = 1
            if (unit.quantity > allunits.length) unit.quantity = allunits.length
            let thisUnitIndex: number = allunits.findIndex(c => c._id.toString() === unit._id.toString())
            allunits.splice(thisUnitIndex, 1)
            let shouldBeIndex: number = unit.quantity - 1
            allunits.splice(shouldBeIndex, 0, unit)
            let quantity: number = 1
            for (let unit of allunits) {
                const query = { _id: new ObjectId(unit._id) };
                delete unit._id;
                unit.quantity = quantity++
                await collections.carts.updateOne(query, { $set: unit });
            }
            return
        } else {
            const query = { _id: new ObjectId(unit._id) };
            delete unit._id;
            let result: UpdateResult = await collections.carts.updateOne(query, { $set: unit });
            return (result.modifiedCount > 0)
        }
    }

    async delete(cartId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(cartId) };
        await collections.carts.deleteOne(query);
        let allunits = await this.getAll()
        let quantity: number = 1
        for (let unit of allunits) {
            const query = { _id: new ObjectId(unit._id) };
            delete unit._id;
            unit.quantity = quantity++
            await collections.carts.updateOne(query, { $set: unit });
        }
        return
    }
}

export let CartService: CartServiceClass = new CartServiceClass()