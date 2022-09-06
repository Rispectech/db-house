import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";
import { LOG } from "./logger";
import { AppConfig } from "./config";
import { dataInit, dbInit } from "./dbinit.service";

/**
 * Global Variables
 */
export const collections: {
    admins?: mongoDB.Collection
    clients?: mongoDB.Collection
    merchants?: mongoDB.Collection
    categories?: mongoDB.Collection
    subCategories?: mongoDB.Collection
    products?: mongoDB.Collection
    brands?: mongoDB.Collection
    documents?: mongoDB.Collection
    colors?: mongoDB.Collection
    units?: mongoDB.Collection
    carts?: mongoDB.Collection
} = {}

/**
 * Initialize Connection To MongoDB
 */
export async function connectToDatabase() {

    LOG.info(`Loading configuration...`)
    dotenv.config()
    let client: mongoDB.MongoClient
    let db: mongoDB.Db

    try {
        LOG.info(`Connecting to DB server (${AppConfig.mongo.connString})...`)
        client = new mongoDB.MongoClient(AppConfig.mongo.connString);
        await client.connect();
        LOG.info(`Loading database (${AppConfig.mongo.dbName})..`)
        db = client.db(AppConfig.mongo.dbName)


    } catch (error) {
        LOG.error(`Failed to create database connection`)
        console.error(error)
        throw new Error(error)
    }

    if (AppConfig.dbInit) {
        LOG.info(`Initializing collections in database...`)
        try {
            await dbInit(db)
        } catch (e) {
            console.log(e)
            LOG.error(`Failed to initialize database`)
            LOG.error(e)
        }
    }
    collections.admins = db.collection(AppConfig.mongoCollections.admins);
    collections.clients = db.collection(AppConfig.mongoCollections.clients);
    collections.merchants = db.collection(AppConfig.mongoCollections.merchants);
    collections.categories = db.collection(AppConfig.mongoCollections.categories);
    collections.subCategories = db.collection(AppConfig.mongoCollections.subCategories);
    collections.products = db.collection(AppConfig.mongoCollections.products);
    collections.brands = db.collection(AppConfig.mongoCollections.brands);
    collections.documents = db.collection(AppConfig.mongoCollections.documents);
    collections.colors = db.collection(AppConfig.mongoCollections.colors);
    collections.units = db.collection(AppConfig.mongoCollections.units);
    collections.carts = db.collection(AppConfig.mongoCollections.carts);
    LOG.info(`Successfully connected to database`);
    try {
        await applyMongoValidations(db)
    } catch (e) {
        console.log(e)
        LOG.error(`Failed to validate database`)
        LOG.error(e)
    }
    if (AppConfig.dbInit) {
        LOG.info(`Initializing data in database...`)
        try {
            await dataInit(db)
        } catch (e) {
            console.log(e)
            LOG.error(`Failed to initialize database`)
            LOG.error(e)
        }
    }
}

let applyMongoValidations = async (db: mongoDB.Db) => {
    LOG.info(`Validating collection ${AppConfig.mongoCollections.admins}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.admins,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["email", "secret", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    email: { bsonType: "string" },
                    name: { bsonType: "string" },
                    secret: { bsonType: "string" },
                    createdAt: { bsonType: "number" }
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.clients}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.clients,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["email", "secret", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    email: { bsonType: "string" },
                    name: { bsonType: "string" },
                    secret: { bsonType: "string" },
                    isEmailVerified: { bsonType: "bool" },
                    phoneNumber: { bsonType: "string" },
                    isPhoneNumberVerified: { bsonType: "bool" },
                    createdAt: { bsonType: "number" }
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.merchants}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.merchants,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["email", "secret", "status", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    firstName: { bsonType: "string" },
                    lastName: { bsonType: "string" },
                    email: { bsonType: "string" },
                    isEmailVerified: { bsonType: "bool" },
                    secret: { bsonType: "string" },
                    status: { enum: ["ACTIVE", "INACTIVE"] },
                    onboardingAmount: { bsonType: "double" },
                    commisionType: { enum: ["PERCENTAGE", "FIXED"] },
                    commisionPercentage: { bsonType: "double" },
                    commisionAmount: { bsonType: "double" },
                    identification: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            required: ["documentId", "approvedByAdmin", "priority"],
                            properties: {
                                documentId: { bsonType: "objectId" },
                                approvedByAdmin: { bsonType: "bool" },
                                priority: { bsonType: "number" }
                            }
                        }
                    },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.categories}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.categories,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    description: { bsonType: "string" },
                    status: { enum: ["ACTIVE", "INACTIVE"] },
                    imageDocumentId: { bsonType: "objectId" },
                    seo: {
                        bsonType: "object",
                        properties: {
                            metaTagTitle: { bsonType: "string" },
                            metaTagDescription: { bsonType: "string" },
                            metaTagKeywords: { bsonType: "string" }
                        }
                    },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.subCategories}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.subCategories,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "categoryId", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    categoryId: { bsonType: "objectId" },
                    description: { bsonType: "string" },
                    status: { enum: ["ACTIVE", "INACTIVE"] },
                    imageDocumentId: { bsonType: "objectId" },
                    seo: {
                        bsonType: "object",
                        properties: {
                            metaTagTitle: { bsonType: "string" },
                            metaTagDescription: { bsonType: "string" },
                            metaTagKeywords: { bsonType: "string" }
                        }
                    },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.products}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.products,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "merchantId", "categoryId", "subCategoryId", "status", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    merchantId: { bsonType: "objectId" },
                    status: { enum: ["ACTIVE", "INACTIVE"] },
                    brandId: { bsonType: "objectId" },
                    categoryId: { bsonType: "objectId" },
                    subCategoryId: { bsonType: "objectId" },
                    description: { bsonType: "string" },
                    variantParameters: {
                        bsonType: "object",
                        additionalProperties: false,
                        required: ["styleEnabled", "styleList", "sizeEnabled"
                            , "sizeList", "colorEnabled", "dimensionHeightEnabled"
                            , "dimensionWidthEnabled", "dimensionThicknessEnabled"],
                        properties: {
                            styleEnabled: { bsonType: "bool" },
                            styleList: {
                                bsonType: "array",
                                items: { bsonType: "string" }
                            },
                            sizeEnabled: { bsonType: "bool" },
                            sizeList: {
                                bsonType: "array",
                                items: { bsonType: "string" }
                            },
                            colorEnabled: { bsonType: "bool" },
                            dimensionHeightEnabled: { bsonType: "bool" },
                            dimensionWidthEnabled: { bsonType: "bool" },
                            dimensionThicknessEnabled: { bsonType: "bool" },
                            dimensionUnitId: { bsonType: "objectId" },
                        }
                    },
                    variants: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            required: ["name", "priority", "minPurchaseQuantity", "availableQuantity", "price"],
                            additionalProperties: false,
                            properties: {
                                _id: {},
                                name: { bsonType: "string" },
                                priority: { bsonType: "number" },
                                style: { bsonType: "string" },
                                size: { bsonType: "string" },
                                colorId: { bsonType: "objectId" },
                                dimensions: {
                                    bsonType: "object",
                                    required: ["height"],
                                    properties: {
                                        height: { bsonType: "double" },
                                        width: { bsonType: "double" },
                                        thickness: { bsonType: "double" },
                                    }
                                },
                                minPurchaseQuantity: { bsonType: "number" },
                                availableQuantity: { bsonType: "number" },
                                discountPercentage: { bsonType: "number" },
                                price: { bsonType: "double" },
                                images: {
                                    bsonType: "array",
                                    items: {
                                        bsonType: "object",
                                        required: ["documentId", "priority"],
                                        properties: {
                                            documentId: { bsonType: "objectId" },
                                            priority: { bsonType: "number" },
                                        }
                                    }
                                },
                            }
                        }
                    },
                    images: {
                        bsonType: "array",
                        items: {
                            bsonType: "object",
                            required: ["documentId", "priority"],
                            additionalProperties: false,
                            properties: {
                                documentId: { bsonType: "objectId" },
                                priority: { bsonType: "number" },
                            }
                        }
                    },
                    seo: {
                        bsonType: "object",
                        additionalProperties: false,
                        properties: {
                            metaTagTitle: { bsonType: "string" },
                            metaTagDescription: { bsonType: "string" },
                            metaTagKeywords: { bsonType: "string" },
                        }
                    },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.brands}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.brands,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "priority", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    priority: { bsonType: "number" },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.documents}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.documents,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["fileName", "sizeInBytes", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    fileName: { bsonType: "string" },
                    sizeInBytes: { bsonType: "number" },
                    createdAt: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.colors}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.colors,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "hexValue", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    hexValue: { bsonType: "string" },
                    createdAt: { bsonType: "number" },
                    priority: { bsonType: "number" },
                }
            }
        }
    });
    LOG.info(`Validating collection ${AppConfig.mongoCollections.units}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.units,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["name", "createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    name: { bsonType: "string" },
                    createdAt: { bsonType: "number" },
                    priority: { bsonType: "number" },
                }
            }
        }
    });

    LOG.info(`Validating collection ${AppConfig.mongoCollections.carts}`)
    await db.command({
        "collMod": AppConfig.mongoCollections.carts,
        "validator": {
            $jsonSchema: {
                bsonType: "object",
                required: ["quantity","totalPrice","totalItem","createdAt"],
                additionalProperties: false,
                properties: {
                    _id: {},
                    productId: { bsonType: "string" },
                    quantity: { bsonType: "number" },
                    totalPrice: { bsonType: "number" },
                    totalItem: { bsonType: "number" },
                    createdAt: { bsonType: "number" }
                }
            }
        }
    });
}
