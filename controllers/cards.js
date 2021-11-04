const express = require("express");
const Card = require("../models/card");
const router = express.Router();

// routes

// Card INDEX ROUTE
router.get("/card", async (req, res) => {
  try {
    // send all Card
    res.json(await Card.find());
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});


// Card DELETE ROUTE
router.delete("/card/:id", async (req, res) => {
  try {
    // send all Card
    res.json(await Card.findByIdAndDelete(req.params.id));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Card UPDATE ROUTE
router.put("/card/:id", async (req, res) => {
  try {
    // send all Card
    res.json(
      await Card.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

// Card CREATE ROUTE
router.post("/card", async (req, res) => {
  try {
    // send all Card
    res.json(await Card.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
});

module.exports = router;
