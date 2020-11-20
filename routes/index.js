// require our modules express, 
const express = require('express');

// TODO: require index controller

const indexCtrl = require('../controllers/index');

// create our router object

const router = express.Router();

// TODO: define our route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mongoose Flights' });
});
// export the router object

module.exports = router; 