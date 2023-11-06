const mongoose = require('mongoose');
const Sgf = require('./sgf');

const schema = mongoose.Schema({
    whitePlayer: {
        type: String,
        required: true,
    },
    blackPlayer: {
        type: String,
        required: true,
    },
    size: {
        type: String,
        required: true,
        enum: ['9', '13', '19']
    },
    ranked: {
        type: Boolean,
        required: true,
    },
    time: {
        type: Number,
        required: true,
        min: -1,
        max: 10000
    },
    handicap: {
        type: Number,
        required: true,
        min: 0,
        max: 4
    },
    turn: {
        type: Number,
        default: 0
    },
    sgf: {
        type: String,
        required: false
    }
})

const model = mongoose.model('Match', schema);

module.exports = { schema, model }