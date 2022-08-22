import { InsertOneResult, ObjectId, UpdateResult } from "mongodb";
import { collections } from "../db.service";
import { IDocument } from "../interfaces";
import fs from 'fs-extra'
import path from "path";
import { AppConfig } from "../config";
import { LOG } from "../logger";

class DocumentServiceClass {

    async get(documentId: string | ObjectId): Promise<IDocument> {
        const query = { _id: new ObjectId(documentId) };
        return (await collections.documents.findOne(query)) as IDocument;
    }

    async getAll(): Promise<IDocument[]> {
        return (await collections.documents.find({}).toArray()) as IDocument[];
    }

    async create(newDocument: IDocument): Promise<IDocument> {
        newDocument = { ...newDocument }
        newDocument.createdAt = Date.now()
        const result: InsertOneResult<IDocument> = await collections.documents.insertOne(newDocument);
        newDocument._id = result.insertedId
        return newDocument
    }

    async update(document: IDocument): Promise<boolean> {
        document = { ...document }
        const query = { _id: new ObjectId(document._id) };
        delete document._id;
        let result: UpdateResult = await collections.documents.updateOne(query, { $set: document });
        return (result.modifiedCount > 0)
    }

    async delete(documentId: string | ObjectId): Promise<boolean> {
        if (documentId) {
            try {
                await fs.unlink(path.join(AppConfig.directories.documents, documentId.toString()))
            } catch (e) {
                LOG.error(e)
            }
            const query = { _id: new ObjectId(documentId) };
            const result = await collections.documents.deleteOne(query);
            return (result && result.deletedCount > 0)
        } else throw new Error(`Cannot delete document without documentId`)
    }
}

export let DocumentService: DocumentServiceClass = new DocumentServiceClass()