const express = require('express')
const router = express.Router();

const exists = require('../middleware/exists.js')


let fruits = require('../data/fruits.js')

//fruits from fruityvill api
router.get('/', (req, res) => {
    res.json(fruits)
})


// const exists = ( req, array ) => {
//     return array.find(item => item.id === parseInt(req.params.id) || item.author.includes(req.params) )
// }

//get single fruit
router.get('/:id', (req, res) => {

    // if( !exists(req, fruits) ) {
    if ( exists( fruits.filter(fruit => fruit.id === parseInt(req.params.id)) )) {
        res.status(400).json({ msg: `No fruit with the id of ${req.params.id}` });
    }

    res.json(fruits.filter( fruit => fruit.id === parseInt(req.params.id)))
})



module.exports = router;
