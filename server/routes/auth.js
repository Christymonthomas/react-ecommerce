import express from "express";
import { register, login, secret } from "../controlllers/auth.js";
import { requireSignin } from "../middlewars/auth.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
//testing
router.get("/secret", requireSignin, secret);

export default router;
