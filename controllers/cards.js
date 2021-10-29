const express = require('express')
const Card = require('../models/card')
const router = express.Router()

// routes

router.get('/', async (req, res) => {
    try {
        res.json(await Card.find({}))
    } catch (error) {
        res.status(401).json({message: 'Please login to see cards'})
    }
})

router.post('/', async (req, res) => {
    try {
        res.json(await Card.create(req, body))
    } catch (error) {
        res.status(401).json({message: 'Please login to create card'})
    }
})

module.exports = router