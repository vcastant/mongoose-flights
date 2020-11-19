//require our modules
const mongoose = require ('mongoose');


// create shortcut variable
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    airport: {
        type: String,
        enum:['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
    },
    arrival: Date,
})
// define our flightSchema
const flightSchema = new Schema({
    flight: {
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    },
    
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date,
        default: function () {
            const date = new Date ();
            const year = date.getFullYear();
            date.setFullYear(year +1 );
            return date;
        },
    },
    destinations: [destinationSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Flight", flightSchema);