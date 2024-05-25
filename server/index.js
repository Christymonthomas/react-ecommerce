// const express = require("express");
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
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

app.get("/users", (req, res) => {
  res.json({
    data: "Christy Thomas Hiii",
  });
});
const port = process.env.PORT || 9000;

app.listen(port, () => {
  console.log(`Node server is running on port ${port}`);
});
