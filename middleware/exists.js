const exists = ( array ) => {
    // return array.find( item => item.id === parseInt(req.params.id) )
   //return  array.forEach( item =>  item => item.id === parseInt(req.params.id)) || array.length === 0
    return array.length < 1
}

// const exists = ( array, req, res, next ) => {
//     if ( req.params ) {
//         res.status(404);
//         res.json({ error: "Resource not found" });
//     }
// next()
// }


module.exports = exists
