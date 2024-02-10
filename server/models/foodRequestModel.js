const mongoose = require('mongoose');

const foodRequestSchema = new mongoose.Schema({
    orgName: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: true,
    },
    phone_number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    food_type: {
        type: String,
        required: true
    },
    expiryDate: {
        type: String,
        required: true
    }, 
    foodQuantity: {
        type: String,
        required: true
    },   
});

const foodRequest = mongoose.model('FoodRequest', foodRequestSchema);

module.exports = foodRequest;
