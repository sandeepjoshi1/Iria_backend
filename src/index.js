import express from "express";
import mongoose from "mongoose";
import routes from "./routes/devRoutes.js";
import config from "./config/dev.js"; // Make sure to adjust the path and export style in your config files

const app = express();

mongoose
  .connect(config.dbUri)
  .then(() => console.log(`Connected to MongoDB at ${config.dbUri}`))
  .catch((err) => console.error("MongoDB connection error:", err));

app.use(express.json());

// Import routes - adjust the path and make sure routes are exported correctly
// import routes from "./routes/devRoutes.js";
app.use("/api", routes);

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
