const mongoose = require('mongoose');

const donatedFoodSchema = new mongoose.Schema({
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

const donatedFood = mongoose.model('DonatedFood', donatedFoodSchema);

module.exports = donatedFood;
