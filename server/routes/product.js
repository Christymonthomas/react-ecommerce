import express from "express";
import formidable from "express-formidable";
import { requireSignin, isAdmin } from "../middlewars/auth.js";
import { create } from "../controlllers/product.js";
const router = express.Router();
router.post("/product", requireSignin, isAdmin, formidable(), create);

export default router;
