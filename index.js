const express = require('express')
const path = require('path')
const users = require('./data/users.js')
const fruits = require('./data/fruits.js')
const quotes = require('./data/quotes.js')
const logger = require("./middleware/logger.js")
var exphbs = require('express-handlebars');
const exists = require('./middleware/exists.js')
//const moment = require('moment');

//port
const port = process.env.PORT || 5000


//init app
const app = express();

//handlebars middlewar
var hbs = exphbs.create({});

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home', {
        title: 'Home',
    })
})



//user bapge handlebars route
app.get('/users', (req, res) => {
    res.render('users', {
        title: 'Users List',
        users
    })
})

//fruit bapge handlebars route
app.get('/fruits', (req, res) => {
    res.render('fruits', {
        title: 'Fruits List',
        fruits
    })
})


//quotes bapge handlebars route
app.get('/quotes', (req, res) => {
    res.render('quotes', {
        title: 'Quotes List',
        quotes
    })
})


//init middlewear

//middleware 1
app.use(logger)

//middleware 2


// app.use((req, res, next) => {
//     if () {
//         res.json({ error: "Resource not found" });
//     }
//     else {
//         next()
//     }
// });


//2  app.use((req, res)=>{
//     console.log(req)
// })

//body parser middle ware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


//users api routes
app.use('/api/users', require('./routes/users'));

//fruit route
app.use('/api/fruits', require('./routes/fruits.js'))

//qoute route
app.use('/api/quotes', require("./routes/quotes.js"))




//start server
app.listen(port, () => {
    console.log(`Example app listening on port ${port}  🚀`)
})
