import dotenv from "dotenv";
dotenv.config();

const config = {
  dbUri: process.env.DEV_DB_URI || "mongodb://localhost:27017/iria_db",
  port: process.env.DEV_PORT,
};

export default config;
