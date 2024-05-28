import express from "express";
import formidable from "express-formidable";
import { requireSignin, isAdmin } from "../middlewars/auth.js";
import {
  create,
  list,
  read,
  photo,
  remove,
  update,
} from "../controlllers/product.js";
const router = express.Router();
router.post("/product", requireSignin, isAdmin, formidable(), create);
router.get("/products", list);

router.get("/product/:slug", read);
router.get("/product/photo/:productId", photo);
router.delete("/product/:productId", requireSignin, isAdmin, remove);
router.put("/product/:productId", requireSignin, isAdmin, formidable(), update);

export default router;
