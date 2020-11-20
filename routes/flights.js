// require our modules express, 
const express = require('express');

// TODO: require flight controller
const flightsCtrl = require('../controllers/flights');

// create our router object

const router = express.Router();

// TODO: define our routes
router.get('/new', flightsCtrl.new);
router.post('/', flightsCtrl.create);
router.get('/:id', flightsCtrl.show);
router.get('/', flightsCtrl.index);

// export the router object

module.exports = router; 