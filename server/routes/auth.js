import express from "express";
import { register, login, secret } from "../controlllers/auth.js";
import { requireSignin, isAdmin } from "../middlewars/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
//testing
router.get("/secret", requireSignin, isAdmin, secret);

export default router;
