const mongoose = require('mongoose');

const volunteerSchema = new mongoose.Schema({
    v_id: {
        type: String,
        required: true
    },
    v_name: {
        type: String,
        required: true
    },
    v_phone: {
        type: String,
        required: true
    },
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food', // Reference to the Food model
        required: true
    },
    // Add more fields as needed
});

const Volunteer = mongoose.model('Volunteer', volunteerSchema);

module.exports = Volunteer;
