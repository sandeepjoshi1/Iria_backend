import express from "express";
import { getStockData, createStockData } from "../controllers/dataController";

const router = express.Router();

router.get("/stocks", getStockData);

router.post("/stocks", createStockData);

export default router;
