import express from "express";
import mongoose from "mongoose";
import config from ".";

const app = express();
const port = config.port;
const dbUri = config.dbUri;

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Your MongoDB is running and active"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
