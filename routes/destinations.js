const express = require('express');

// TODO: require index controller

const destinationsCtrl = require('../controllers/destinations');

// create our router object

const router = express.Router();

// TODO: define our routes
router.post('/flights/:id/destinations',destinationsCtrl.create);
// export the router object

module.exports = router; 