const Flight = require ('../models/flight');
const Ticket = require ('../models/ticket'); 

module.exports = {
    new: newTicket,
    create,
    //addToFlight
};
function create(req, res) {
  Ticket.create(req.body, function (err, ticket) {
    res.redirect('/tickets/new');
  });
}

function newTicket(req, res) {
  Ticket.find({}, function (err, tickets) {
    res.render('tickets/new', {
      title: 'Add Ticket',
      tickets
    });
  })
}