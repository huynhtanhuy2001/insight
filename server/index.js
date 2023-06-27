const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");
const sequelize = require("./config/conectDB");
require("dotenv").config();
// Sử dụng middleware cors
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);
// Định nghĩa API
app.get("/api/ticket", async (req, res) => {
  try {
    // Lấy dữ liệu từ cơ sở dữ liệu
    const query = "SELECT * FROM ticket";

    // Thực hiện truy vấn
    const results = await sequelize.query(query);
    res.status(200).json(results[0]);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
//gói vé
app.get("/api/ticketpakage", async (req, res) => {
  try {
    // Lấy dữ liệu từ cơ sở dữ liệu
    const query = "SELECT * FROM ticketpakage";

    // Thực hiện truy vấn
    const results = await sequelize.query(query);
    res.status(200).json(results[0]);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//CRUD
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Khởi chạy server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
