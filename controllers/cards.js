const express = require("express");
const User = require("../models/user");
const router = express.Router();

// routes

router.get("/", async (req, res) => {
  try {
    res.json(await User.find({}));
  } catch (error) {
    res.status(401).json({ message: "Please login to see Users" });
  }
});

router.post("/", async (req, res) => {
  try {
    res.json(await User.create(req, body));
  } catch (error) {
    res.status(401).json({ message: "Please login to create User" });
  }
});
router.delete('/')

module.exports = router;
