const express = require('express')
const router = express.Router();


let quotes = require('../data/quotes.js')

//get all quotes
router.get('/', (req, res) => {
    res.json(quotes)
})

//get single quote
router.get('/:author', (req, res) => {
    res.json(quotes.filter(quote => quote.author.includes(req.params.author)))
})



module.exports = router;
