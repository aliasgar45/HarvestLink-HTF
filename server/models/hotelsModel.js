const mongoose = require('mongoose');

const hotelSchema = new mongoose.Schema({
    h_id: {
        type: String,
        required: true
    },
    h_add: {
        type: String,
        required: true
    },
    h_phone:{
        type: Number,
        required:true
    },
    h_email: {
        type: Number,
        default: 0
    },
    h_name: {
        type: String,
        required: true
    },
   
});

const Hotel = mongoose.model('Hotel', hotelSchema);

module.exports = Hotel;
