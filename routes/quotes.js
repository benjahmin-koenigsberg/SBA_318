const express = require('express')
const router = express.Router();

const exists = require('../middleware/exists.js')


let quotes = require('../data/quotes.js')

//get all quotes
router.get('/', (req, res) => {
    res.json(quotes)
})

//get single quote
router.get('/:author', (req, res) => {

    if ( exists( quotes.filter(quote => quote.author.includes(req.params.author) )) ) {
        res.status(400).json({ msg: `No quote containing keyword of ${req.params.author}` });
    }
 else {
        res.json(quotes.filter(quote => quote.author.includes(req.params.author)))
 }
})



module.exports = router;
