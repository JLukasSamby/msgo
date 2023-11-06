const router = require('express').Router();
const match = require('../models/match');

router.patch('/match/join/:matchid', async (req, res) => {
    const player = req.body.playerID;

    if (!player) {
        res.status(400).send('Not a player');
    }
    
    const M = await match.model.findOne({_id: req.params.matchid});

    if (!M) {
        res.status(404).send('Match does not exist');
    }

    if (M.whitePlayer === player) {
        res.status(400).send('Player already in match');
    }
    if (M.blackPlayer === player) {
        res.status(400).send('Player already in match');
    }

    if (M.whitePlayer === 'None' || M.blackPlayer === 'None') {
        let joiningPlayer;
        if (M.whitePlayer === 'None') {
            M.whitePlayer = player;
            joiningPlayer = 'White';
        } else {
            M.blackPlayer = player;
            joiningPlayer = 'Black';
        }
        try {
            await M.save();
            res.status(200).send(`${joiningPlayer} joined match`);
        } catch (error) {
            console.error(error.message);
            res.status(500).send('Internal server error');
        }

    } else {
        res.status(400).send('Match already full');
    }
})

module.exports = router;