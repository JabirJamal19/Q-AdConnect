require("dotenv").config();
require("./config/db").connectToDatabase();
const express = require("express");
const http = require("http");
const cors = require("cors");
const multer = require("multer");

const app = express();
const server = http.createServer(app);

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? process.env.FRONTEND_URL?.split(",") || []
    : ["http://localhost:5173", "http://127.0.0.1:5173"];

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./models/User.model");
require("./models/Billboard.model");
app.use("/api", require("./routes/index"));


app.use((err, req, res, next) => {
  if (err instanceof multer.MulterError) {
    // Handle multer errors
    return res.status(400).json({
      status: 0,
      message: `Upload error: ${err.message}`,
    });
  }
  console.error("Unhandled Express Error:", err.stack || err);
  res.status(err.status || 500).json({
    status: 0,
    message: err.message || "Internal Server Error",
  });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
