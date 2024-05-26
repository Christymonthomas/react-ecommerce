import express from "express";
import { requireSignin, isAdmin } from "../middlewars/auth.js";
import {
  create,
  update,
  remove,
  list,
  read,
} from "../controlllers/category.js";
const router = express.Router();
router.post("/category", requireSignin, isAdmin, create);
router.put("/category/:categoryId", requireSignin, isAdmin, update);
router.delete("/category/:categoryId", requireSignin, isAdmin, remove);
router.get("/category", list);
router.get("/category/:slug", read);

export default router;
