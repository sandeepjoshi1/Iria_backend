require("dotenv").config();

module.exports = {
  dbUri:
    process.env.PROD_DB_URI || "mongodb://yourProductionDBHost:27017/iria_db",
  port: process.env.PROD_PORT || 8080,
};
