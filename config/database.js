// require our modules ( mongoose)

const mongoose = require ('mongoose');
// set up our shortcut variable
const db = mongoose.connections;

// connenct to the database server

mongoose.connect('mongodb://localhost/flights', {
    useNewUrlParser: true,
    userCreateIndex: true,
    useUnifiedTopology: true
});

// set up connection listener

db.on('connected', function() {
    console.log('Connected to MongoDB on ${db.host}:${db.port}');