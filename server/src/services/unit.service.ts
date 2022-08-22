import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { IUnit } from "../interfaces";

class UnitServiceClass {

    async get(unitId: string | ObjectId): Promise<IUnit> {
        const query = { _id: new ObjectId(unitId) };
        return (await collections.units.findOne(query)) as IUnit;
    }

    async getByName(name: string): Promise<IUnit> {
        return (await collections.units.findOne({ name })) as IUnit;
    }

    async getAll(): Promise<IUnit[]> {
        return (await collections.units.find({}).sort({ priority: 1 }).toArray()) as IUnit[];
    }

    async getTotalCount(): Promise<number> {
        return (await collections.units.countDocuments()) as number;
    }

    async create(newUnit: IUnit): Promise<IUnit> {
        newUnit = { ...newUnit }
        const existingUnit: IUnit = await this.getByName(newUnit.name)
        if (existingUnit) {
            throw new Error(`A unit with name ${newUnit.name} already exists`)
        }
        newUnit.priority = await this.getTotalCount() + 1
        newUnit.createdAt = Date.now()
        const result: InsertOneResult<IUnit> = await collections.units.insertOne(newUnit);
        newUnit._id = result.insertedId
        return newUnit
    }

    async update(unit: IUnit): Promise<boolean> {
        unit = { ...unit }
        let existingunit: IUnit = await this.get(unit._id)
        if (unit.priority !== existingunit.priority) {
            let allunits: IUnit[] = await this.getAll()
            if (unit.priority < 1) unit.priority = 1
            if (unit.priority > allunits.length) unit.priority = allunits.length
            let thisUnitIndex: number = allunits.findIndex(c => c._id.toString() === unit._id.toString())
            allunits.splice(thisUnitIndex, 1)
            let shouldBeIndex: number = unit.priority - 1
            allunits.splice(shouldBeIndex, 0, unit)
            let priority: number = 1
            for (let unit of allunits) {
                const query = { _id: new ObjectId(unit._id) };
                delete unit._id;
                unit.priority = priority++
                await collections.units.updateOne(query, { $set: unit });
            }
            return
        } else {
            const query = { _id: new ObjectId(unit._id) };
            delete unit._id;
            let result: UpdateResult = await collections.units.updateOne(query, { $set: unit });
            return (result.modifiedCount > 0)
        }
    }

    async delete(unitId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(unitId) };
        await collections.units.deleteOne(query);
        let allunits = await this.getAll()
        let priority: number = 1
        for (let unit of allunits) {
            const query = { _id: new ObjectId(unit._id) };
            delete unit._id;
            unit.priority = priority++
            await collections.units.updateOne(query, { $set: unit });
        }
        return
    }
}

export let UnitService: UnitServiceClass = new UnitServiceClass()