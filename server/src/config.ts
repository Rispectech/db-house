import path from "path";
import * as dotenv from "dotenv";

dotenv.config();

class AppConfigClass {
  isProduction: boolean;
  serverPort: number;
  serverHost: string;
  dbInit: boolean;
  jwtSalt: string;
  jwtExpirationHours: number;
  directories: {
    documents: string;
    temp: string;
  };
  mongo: {
    connString: string;
    dbName: string;
  };
  mongoCollections: {
    admins: string;
    clients: string;
    merchants: string;
    categories: string;
    subCategories: string;
    products: string;
    brands: string;
    documents: string;
    colors: string;
    units: string;
    user: string;
  };
}

let AppConfigObject: AppConfigClass = {
  isProduction: process.env.NODE_ENV !== "production",
  serverHost: process.env.SERVER_HOST,
  serverPort: parseInt(process.env.SERVER_PORT),
  dbInit: Boolean(process.env.DBINIT === "true"),
  jwtSalt: process.env.JWT_SALT,
  jwtExpirationHours: parseInt(process.env.JWT_EXPIRE_HOURS),
  directories: {
    documents: path.join(process.cwd(), process.env.DIR_DOCUMENTS),
    temp: path.join(process.cwd(), process.env.DIR_TEMP),
  },
  mongo: {
    connString: process.env.MONGO_CONN,
    dbName: process.env.MONGO_DB_NAME,
  },
  mongoCollections: {
    admins: process.env.COLLECTION_ADMINS,
    clients: process.env.COLLECTION_CLIENTS,
    merchants: process.env.COLLECTION_MERCHANTS,
    categories: process.env.COLLECTION_CATEGORIES,
    subCategories: process.env.COLLECTION_SUBCATEGORIES,
    products: process.env.COLLECTION_PRODUCTS,
    brands: process.env.COLLECTION_BRANDS,
    documents: process.env.COLLECTION_DOCUMENTS,
    colors: process.env.COLLECTION_COLORS,
    units: process.env.COLLECTION_UNITS,
    user: process.env.COLLECTION_USER,
  },
};

let validateConfig = (config: AppConfigClass): AppConfigClass => {
  return config;
};

export let AppConfig: AppConfigClass = validateConfig(AppConfigObject);
