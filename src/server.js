const express = require("express");
const connectDB = require("./config/db");

// Initialize Express
const app = express();

// Connect to MongoDB
connectDB();

// Define routes
app.get("/", (req, res) => {
  res.send("API is running");
});

// Define port
const PORT = process.env.PORT || 5000;

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
