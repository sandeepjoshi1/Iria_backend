import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

// Determine which .env file to load
const envFile =
  process.env.NODE_ENV === "production"
    ? ".env.production"
    : process.env.NODE_ENV === "test"
    ? ".env.test"
    : ".env";
console.log("envFile" + envFile);

dotenv.config({ path: envFile });

// Configuration is now loaded from the appropriate .env file
const app = express();
const port = process.env.PORT; // Default port is now pulled from environment-specific .env files
const dbUri = process.env.DB_URI;

mongoose
  .connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log(`Connected to MongoDB at ${dbUri}`))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

// Setup routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// const app = express();

// mongoose
//   .connect(config.dbUri)
//   .then(() => console.log(`Connected to MongoDB at ${config.dbUri}`))
//   .catch((err) => console.error("MongoDB connection error:", err));

// app.use(express.json());

// // Import routes - adjust the path and make sure routes are exported correctly
// // import routes from "./routes/devRoutes.js";
// app.use("/api", routes);

// app.listen(config.port, () => {
//   console.log(`Server running on port ${config.port}`);
// });
