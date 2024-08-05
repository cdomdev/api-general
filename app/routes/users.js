import express from "express";
const router = express.Router();
import { createItems, getItems } from "../controllers/users.js";

router.post("/", createItems);
router.get("/", getItems);
router.delete("/", getItems);

export default router;
