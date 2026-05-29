const express = require("express");
const router = express.Router();
const pool = require("../db/connection");

router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM bookings");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/", async (req, res) => {
  const { service_id, booking_time, notes } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO bookings (service_id, booking_time, notes) VALUES ($1, $2, $3) RETURNING *",
      [service_id, booking_time, notes],
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
