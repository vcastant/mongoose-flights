// require our modules and initialize setting variables
const express = require('express');
const port = 3000;

const indexRouter = require('./routes/index');

const morgan = require('morgan');

// create the express app

const app = express();

// configure server 

require('./config/database');
app.set('view engine', 'ejs');

// mount middleware

app.use (morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// TO DO mount routes

app.use('/', indexRouter);

//tell the application to listen

app.listen(port, function() {
    console.log('Express is listening on port:${port}'); 
});