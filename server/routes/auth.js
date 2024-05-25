import express from "express";
import { register } from "../controlllers/auth.js";

const router = express.Router();

router.post("/register", register);

export default router;
