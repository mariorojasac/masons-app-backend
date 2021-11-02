const express = require("express");
const Card = require("../models/card");
const router = express.Router();

// routes

// card INDEX ROUTE
router.get("/card", async (req, res) => {
  try {
    // send all card
    res.json(await Card.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


// card DELETE ROUTE
router.delete("/card/:id", async (req, res) => {
  try {
    // send all card
    res.json(await Card.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// card UPDATE ROUTE
router.put("/card/:id", async (req, res) => {
  try {
    // send all card
    res.json(
      await Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// card CREATE ROUTE
router.post("/card", async (req, res) => {
  try {
    // send all card
    res.json(await Card.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;
