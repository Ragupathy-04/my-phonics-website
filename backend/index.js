// backend/index.js
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const { Pool } = require("pg");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// PostgreSQL connection
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "phonicsdb",
  password: "yourpassword",
  port: 5432,
});

// Existing endpoints
app.get("/api", (req, res) => {
  res.json({ message: "Welcome to Phonics Backend!" });
});

// --- Add test DB endpoint below ---
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ dbTime: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
