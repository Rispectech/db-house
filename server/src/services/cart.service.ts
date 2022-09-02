// import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
// import { collections } from "../db.service";
// import { ICart } from "../interfaces";

// class CartServicesClass {

//     // async get(cartId: string | ObjectId): Promise<ICart> {
//     //     const query = { _id: new ObjectId(cartId) };
//     //     return (await collections.carts.findOne(query)) as ICart;
//     // }

//     // async getByName(items: string): Promise<ICart> {
//     //     return (await collections.carts.findOne({ items })) as ICart;
//     // }

//     // async getAll(): Promise<ICart[]> {
//     //     return (await collections.carts.find({}).sort({ priority: 1 }).toArray()) as ICart[];
//     // }

//     async create(newCart: ICart): Promise<ICart> {
//         newCart = { ...newCart }
//         const existingBrand: ICart = (await collections.carts.findOne({ quantity: newCart.quantity })) as ICart
//         if (existingBrand) {
//             throw new Error(`Brand with this name already exists`)
//         }
//         newCart.createdAt = Date.now()
//         const result: InsertOneResult<ICart> = await collections.carts.insertOne(newCart);
//         newCart._id = result.insertedId
//         return newCart
//     }

//     // async update(brand: ICart): Promise<boolean> {
//     //     brand = { ...brand }
//     //     let existingbrand: ICart = await this.getByName()
//     //     if (existingbrand && existingbrand._id.toString() !== brand._id.toString()) {
//     //         throw new Error(`Brand with name ${brand.items} already exists`)
//     //     }
//     //     const query = { _id: new ObjectId(brand._id) };
//     //     delete brand._id;
//     //     let result: UpdateResult = await collections.carts.updateOne(query, { $set: brand });
//     //     return (result.modifiedCount > 0)
//     // }

//     // async delete(cartId: string | ObjectId): Promise<boolean> {
//     //     const query = { _id: new ObjectId(cartId) };
//     //     const result = await collections.carts.deleteOne(query);
//     //     return (result && result.deletedCount > 0)
//     // }
// }

// export let CartService: CartServicesClass = new CartServicesClass()