const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    food_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food', // Reference to the Food model
        required: true
    },
    order_id:{
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    order_status: {
        type: String,
        enum: ['succeed', 'denied'],
        required: true
    },
    order_type: {
        type: String,
        enum: ['succeed', 'denied'],
        required: true
    }
    // Add more fields as needed
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
