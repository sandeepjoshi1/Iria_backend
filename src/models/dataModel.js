import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
  ticker: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const StockData = mongoose.model("StockData", stockSchema);
export default StockData;
