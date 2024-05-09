import StockData from "../models/dataModel.js";

export const getStockData = async (req, res) => {
  try {
    const stocks = await StockData.find();
    res.json(stocks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createStockData = async (req, res) => {
  const newStock = new StockData({
    ticker: req.body.ticker,
    price: req.body.price,
  });
  try {
    const savedStock = await newStock.save();
    res.status(201).json(savedStock);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
