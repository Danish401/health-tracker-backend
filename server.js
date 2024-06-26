const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const healthRoutes = require("./routes/healthRoutes.js");
const app = express();

app.use(express.json());
connectDB();
app.use("/auth", authRoutes);
app.use("/health", healthRoutes);
const port = 3000;
app.listen(port, () => {
  console.log(`connected to ${port} number`);
});
