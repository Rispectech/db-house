import { Double, InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { ECommisionType, IUser } from "../interfaces";

class UserServiceClass {
  async get(userId: string | ObjectId): Promise<IUser> {
    const query = { _id: new ObjectId(userId) };
    return (await collections.users.findOne({})) as IUser;
  }

  async getByEmail(email: string): Promise<IUser> {
    // console.log(collections);
    return (await collections.users.findOne({ email })) as IUser;
  }

  async getAll(): Promise<IUser[]> {
    let query: any = {};
    return (await collections.users.find(query).sort({ createdAt: -1 }).toArray()) as IUser[];
  }

  async create(newUser: IUser): Promise<IUser> {
    newUser = { ...newUser };
    const existingMerchant: IUser = await this.getByEmail(newUser.email);
    if (existingMerchant) {
      throw new Error(`User with this email already exists`);
    }
    newUser.createdAt = Date.now();
    delete newUser._id;
    newUser = this.sanitize(newUser);
    const result: InsertOneResult<IUser> = await collections.users.insertOne(newUser);
    newUser._id = result.insertedId;
    return newUser;
  }

  async update(merchant: IUser): Promise<boolean> {
    merchant = { ...merchant };
    const existingMerchant: IUser = await this.getByEmail(merchant.email);
    if (existingMerchant && existingMerchant._id.toString() !== merchant._id.toString()) {
      throw new Error(`User with this email already exists`);
    }
    const query = { _id: new ObjectId(merchant._id) };
    delete merchant._id;
    merchant = this.sanitize(merchant);
    let result: UpdateResult = await collections.users.updateOne(query, {
      $set: merchant,
    });
    return result.modifiedCount > 0;
  }

  async delete(merchantId: string | ObjectId): Promise<boolean> {
    const query = { _id: new ObjectId(merchantId) };
    const result = await collections.users.deleteOne(query);
    return result && result.deletedCount > 0;
  }

  sanitize(o: IUser): IUser {
    if (!o.firstName) delete o.firstName;
    if (!o.lastName) delete o.lastName;
    if (!o.isEmailVerified) o.isEmailVerified = false;

    if (o.identification) {
      o.identification.forEach((i) => {
        i.documentId = new ObjectId(i.documentId);
      });
    }
    return o;
  }
}

export let userService: UserServiceClass = new UserServiceClass();
