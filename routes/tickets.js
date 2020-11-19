const express = require('express');
const router = express.Router();

const ticketsCtrl = require('../controllers/tickets')

router.get('/new', ticketsCtrl.new)
router.post('/:id', ticketsCtrl.create);
router.post('/flights/:id/tickets/new', ticketsCtrl.addToFlight);

module.exports = routers;