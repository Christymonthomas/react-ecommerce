import express from "express";
import { requireSignin, isAdmin } from "../middlewars/auth.js";
import { create } from "../controlllers/category.js";
const router = express.Router();
router.post("/category", requireSignin, isAdmin, create);

export default router;
