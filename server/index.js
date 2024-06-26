// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import categoryRoutes from "./routes/category.js";
import productRoutes from "./routes/product.js";
dotenv.config();
// Database connection

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log("DB ERROR =>", err);
  });

const app = express();

//middlewares
app.use(cors());

app.use(morgan("dev"));
app.use(express.json());
//router middleware

app.use("/api", authRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
