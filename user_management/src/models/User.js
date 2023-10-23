const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        min: 6,
        max: 255,
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 1024,
    },
    created: {
        type: Date,
        default: Date.now(),
    },
});

module.exports = mongoose.model("User", userSchema);