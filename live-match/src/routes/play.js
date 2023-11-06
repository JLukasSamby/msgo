const router = require('express').Router();
const Match = require('../models/match');
const validate = require('../gamelogic/validate');
const sgf = require('../models/sgf');

router.post('/match/:matchid', async (req, res) => {

    const match = await Match.findOne({ _id: req.params.matchid });
    if (!match) {
        res.status(404).send('Match does not exist');
    }

    const pass = req.body.pass;
    if (pass) {
        match.turn++;
        try {
            await match.save();
            res.status(200).send('Move OK, passed.');
        } catch (error) {
            res.status(500).send('Internal Server Error');
        }
    }

    const value = req.body.value;
    if (!value) {
        res.status(400).send('Missing move in value');
    }

    if (!validate(match, value)) {
        res.status(400).send('Invalid move in value');
    }

    match.sgf.concat(sgf.convert(match.turn % 2, value));
    match.turn++;
    try {
        await match.save();
        res.status(200).send('Move OK');
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Internal Server Error');
    }
})

module.exports = router;