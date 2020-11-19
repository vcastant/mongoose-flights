const Flight = require('../models/flights.js');

module.exports = {
  create,
};


function create(req, res) {
  Flight.findById(req.params.id, function (err, flight) {
    console.log(req.body);
    flight.destinations.push(req.body);
    flight.save(function (err) {
      res.redirect(`/flights/${flight._id}`);
    });
  });
}