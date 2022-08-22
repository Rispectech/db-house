import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { IClient } from "../interfaces";

class ClientServiceClass {

    async get(clientId: string | ObjectId): Promise<IClient> {
        const query = { _id: new ObjectId(clientId) };
        return (await collections.clients.findOne(query)) as IClient;
    }
    async getByEmail(email: string): Promise<IClient> {
        return (await collections.clients.findOne({ email })) as IClient;
    }

    async getAll(): Promise<IClient[]> {
        return (await collections.clients.find({}).sort({ createdAt: -1 }).toArray()) as IClient[];
    }

    async create(newClient: IClient): Promise<IClient> {
        newClient = { ...newClient }
        const existingClient: IClient = await this.getByEmail(newClient.email)
        if (existingClient) {
            throw new Error(`Client with email ${newClient.email} already exists`)
        }
        newClient.createdAt = Date.now()
        const result: InsertOneResult<IClient> = await collections.clients.insertOne(newClient);
        newClient._id = result.insertedId
        return newClient
    }

    async update(client: IClient): Promise<boolean> {
        client = { ...client }
        let existingclient: IClient = await this.getByEmail(client.email)
        if (existingclient && existingclient._id.toString() !== client._id.toString()) {
            throw new Error(`Client with email ${client.email} already exists`)
        }
        const query = { _id: new ObjectId(client._id) };
        delete client._id;
        let result: UpdateResult = await collections.clients.updateOne(query, { $set: client });
        return (result.modifiedCount > 0)
    }

    async delete(clientId: string | ObjectId): Promise<boolean> {
        const query = { _id: new ObjectId(clientId) };
        const result = await collections.clients.deleteOne(query);
        return (result && result.deletedCount > 0)
    }
}

export let ClientService: ClientServiceClass = new ClientServiceClass()