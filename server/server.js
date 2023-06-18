const express = require("express");
const cors = require("cors");
const app = express();
const mysql = require("mysql2");

// Kết nối MySQL
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "insight",
  authPlugins: {
    mysql_clear_password: () => () => {
      // Thực hiện xác thực mà không mã hóa mật khẩu
      return Buffer.from("123456" + "\0");
    },
  },
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database:", error);
  } else {
    console.log("Connected to database");
  }
});

// Sử dụng middleware cors
app.use(cors());

// Định nghĩa API
app.get("/api/ticket", (req, res) => {
  const query = "SELECT * FROM ticket";

  connection.query(query, (error, results) => {
    if (error) {
      console.error("Error executing query:", error);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.json(results);
    }
  });
});

// Khởi chạy server
const port = 8000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
