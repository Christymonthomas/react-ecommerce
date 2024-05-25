// const express = require("express");
import express from "express";
import dotenv from "dotenv";
dotenv.config();

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
