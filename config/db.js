const mongoose = require("mongoose");
const express = require("express");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/BlogApp", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected successfully");
  } catch (error) {
    console.error({ message: error.message });
  }
};

module.exports = connectDB;
