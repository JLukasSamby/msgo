const mongoose = require('mongoose')
const Joi = require('joi');

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

// userSchema.methods.JoiValidate = (obj) => {
//     const schema = {
//         username: Joi.types.String().min(6).max(255).required(),
//         password: Joi.types.String().min(6).required(),
//         first_name: Joi.types.String().required(),
//         last_name: Joi.types.String().required(),
//         email: Joi.types.String().email().required(),
//         created: Joi.types.Date(),
//     }
//     return Joi.validate(obj, schema);
// };

module.exports = mongoose.model("User", userSchema);