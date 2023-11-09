const express = require('express')
const router = express.Router();


let fruits = require('../data/fruits.js')

//users from json placeholser

router.get('/', (req, res) => {
    res.json(fruits)
})

//get single user
router.get('/:id', (req, res) => {
    res.json(fruits.filter(fruit => fruit.id === parseInt(req.params.id)))
})




module.exports = router;
