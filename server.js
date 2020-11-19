// require our modules and initialize setting variables
const express = require('express');
const port = process.env.PORT || 3000;;

const indexRouter = require('./routes/index');
const flightsRouter = require('./routes/flights');
const destinationsRouter = require('./routes/destinations');


const morgan = require('morgan');

// create the express app

const app = express();

// configure server 

require('./config/database');
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// mount middleware

app.use (morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));


// TO DO mount routes

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/',destinationsRouter);
app.use('/', ticketsRouter);
//tell the application to listen

app.listen(port, function() {
    console.log('Express is listening on port: ${port}'); 
})