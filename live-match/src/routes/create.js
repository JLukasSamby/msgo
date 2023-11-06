const router = require('express').Router();
const match = require('../models/match');
const sgf = require('../models/sgf');

router.post('/', async (req, res) => {
    const playerID = req.body.playerID;
    const size = req.body.size;
    const ranked = req.body.ranked;

    let blackPlayer, whitePlayer;

    if (req.body.color === "black") {
        blackPlayer = playerID;
        whitePlayer = 'None';
    } else {
        blackPlayer = 'None';
        whitePlayer = playerID;
    }

    const handicap = (req.body.handicap) ? req.body.handicap : 0;
    const time = (req.body.time) ? req.body.time : -1;

    const options = {blackPlayer, whitePlayer, ranked, size, time, handicap}

    const Match = new match.model(options)
    Match.sgf = sgf.create(options);
    
    try {
        await Match.save();
    } catch (error) {
        console.error(error.message);
        res.status(400).send();
    }

    res.status(201).send();
})

module.exports = router;