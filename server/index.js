// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import morgan from "morgan";
import authRoutes from "./routes/auth.js";
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

//router middleware
app.use(morgan("dev"));

app.use("/api", authRoutes);
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
