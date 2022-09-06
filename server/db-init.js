var mongoDB = require('mongodb');
var dotenv = require("dotenv");
var bcrypt = require('bcrypt');

const HASHPREFIX = `$2b$10$`
// const USERS_LIST = []

const USERS_LIST = [{
    email: "shringiishaan@gmail.com",
    password: "test123"
}, {
    email: "testuser1@gmail.com",
    password: "test123"
}, {
    email: "testuser2@gmail.com",
    password: "test123"
}, {
    email: "testuser3@gmail.com",
    password: "test123"
}]

async function connect() {

    dotenv.config()

    let client
    let db
    console.log(process.env.DB_CONN_STRING)
    console.log(process.env.DB_NAME)

    try {
        client = new mongoDB.MongoClient(process.env.DB_CONN_STRING);
        await client.connect();
        console.log(`client connected`)
        db = client.db(process.env.DB_NAME)
        console.log(`db connected`)
    } catch (error) {
        throw new Error(`Failed to Connect to Database`)
    }

    let dbCollList = await db.listCollections().toArray()
    if (!dbCollList || !dbCollList.length) {

        let USERS = db.collection(process.env.USERS_COLLECTION_NAME)
        for (let user of USERS_LIST) {
            const saltRounds = 10;
            let salt = await bcrypt.genSalt(saltRounds)
            let hash = await bcrypt.hash(user.password, salt)
            hash = hash.slice(HASHPREFIX.length, hash.length)
            USERS.insertOne({
                email: user.email, secret: hash
            })
            console.log(`User "${user.email}" created`)
        }

    } else {
        console.log(`Database has existing collections`)
    }
}

try {
    connect().then(() => {
        process.exit()
    }).catch(e => { throw e })
} catch (error) {
    console.error(error)
}