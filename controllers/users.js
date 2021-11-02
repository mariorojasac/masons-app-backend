const express = require("express");
const User = require("../models/user");
const router = express.Router();

// routes

// User INDEX ROUTE
router.get("/user", async (req, res) => {
  try {
    // send all User
    res.json(await User.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


// User DELETE ROUTE
router.delete("/user/:id", async (req, res) => {
  try {
    // send all User
    res.json(await User.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// User UPDATE ROUTE
router.put("/user/:id", async (req, res) => {
  try {
    // send all User
    res.json(
      await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// User CREATE ROUTE
router.post("/user", async (req, res) => {
  try {
    // send all User
    res.json(await User.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;
