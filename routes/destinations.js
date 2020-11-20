const express = require('express');
const router = express.Router();
// TODO: require index controller

const destinationsCtrl = require('../controllers/destinations');


// TODO: define our routes
router.post('/flights/:id/destinations', destinationsCtrl.create);
// export the router object

module.exports = router; 