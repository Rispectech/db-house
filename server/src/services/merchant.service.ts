import { Admin, Double, InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { ECommisionType, EMerchantStatus, IMerchant } from "../interfaces";

class MerchantServiceClass {

    async get(merchantId: string | ObjectId): Promise<IMerchant> {
        const query = { _id: new ObjectId(merchantId) };
        return (await collections.merchants.findOne(query)) as IMerchant;
    }

    async getByEmail(email: string): Promise<IMerchant> {
        return (await collections.merchants.findOne({ email })) as IMerchant;
    }

    // async update (merchantId: string | ObjectId): Promise<boolean>{
    //         const query = { _id: new ObjectId(merchantId), EMerchantStatus:"Active"};
    //         return await collections.merchants.updateMany(query, EMerchantStatus ) 
    //     }
    
    
    async getAll( EMerchantStatus): Promise<IMerchant[]> {
        console.log(EMerchantStatus)
        let query: any = {status: "ACTIVE"}
        return (await collections.merchants.find(query).sort({ createdAt: -1 }).toArray()) as IMerchant[];
        
    }

    async create(newMerchant: IMerchant): Promise<IMerchant> {
        newMerchant = { ...newMerchant }
        const existingMerchant: IMerchant = await this.getByEmail(newMerchant.email)
        if (existingMerchant) {
            throw new Error(`Merchant with this email already exists`)
        }
        newMerchant.createdAt = Date.now()
        delete newMerchant._id
        newMerchant = this.sanitize(newMerchant)
        const result: InsertOneResult<IMerchant> = await collections.merchants.insertOne(newMerchant);
        newMerchant._id = result.insertedId
        return newMerchant
    }

    async update(merchant: IMerchant): Promise<boolean> {
        merchant = { ...merchant }
        const existingMerchant: IMerchant = await this.getByEmail(merchant.email)
        if (existingMerchant && existingMerchant._id.toString() !== merchant._id.toString()) {
            throw new Error(`Merchant with this email already exists`)
        }
        const query = { _id: new ObjectId(merchant._id) };
        delete merchant._id;
        merchant = this.sanitize(merchant)
        let result: UpdateResult = await collections.merchants.updateOne(query, { $set: merchant });
        return (result.modifiedCount > 0)
    }

    async delete(merchantId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(merchantId) };
        const result = await collections.merchants.deleteOne(query);
        return (result && result.deletedCount > 0)
    }

    sanitize(o: IMerchant): IMerchant {
        if (!o.firstName) delete o.firstName
        if (!o.lastName) delete o.lastName
        if (!o.isEmailVerified) o.isEmailVerified = false
        if (o.commisionType !== ECommisionType.Fixed && o.commisionType !== ECommisionType.Percentage) {
            delete o.commisionType
        }
        if(o.commisionPercentage) o.commisionPercentage = new Double(Number.parseFloat(o.commisionPercentage.toString()))
        if(o.commisionAmount) o.commisionAmount = new Double(Number.parseFloat(o.commisionAmount.toString()))
        if(o.onboardingAmount) o.onboardingAmount = new Double(Number.parseFloat(o.onboardingAmount.toString()))
        if (o.identification) {
            o.identification.forEach(i => {
                i.documentId = new ObjectId(i.documentId)
            })
        }
        return o
    }
}

export let MerchantService: MerchantServiceClass = new MerchantServiceClass()