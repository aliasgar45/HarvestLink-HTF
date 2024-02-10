// organizationModel.js
const mongoose = require('mongoose');

const organizationSchema = new mongoose.Schema({
    org_id: {
        type: String,
        required: true
    },
    
    org_name: {
        type: String,
        required: true
    },
    org_addr: {
        type: String,
        required: true
    },
    org_email: {
        type: String,
        required: true,
        unique: true
    },
    org_phone: {
        type: String,
        required: true
    },
    order_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Order', // Reference to the Order model
        required: true
    },
    // Add more fields as needed
});

const Organization = mongoose.model('Organization', organizationSchema);

module.exports = Organization;
