import dotenv from "dotenv";

dotenv.config();

export const env = {
  dev: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || "development",
    APOLLO_URL: process.env.APOLLO_URL,
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DB: process.env.MONGO_DB,
  },
  production: {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV || "production",
    MONGO_USERNAME: process.env.MONGO_USERNAME,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    MONGO_DB: process.env.MONGO_DB,
  },
};
