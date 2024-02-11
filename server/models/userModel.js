const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['Volunteer', 'Organizations','Donar'],
        default: 'user'
    },
    phone_number: {
        type: String,
        required:true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
