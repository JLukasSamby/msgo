const router = require('express').Router();
const match = require('../models/match');

router.get('/match/:matchid', async (req, res) => {
    const M = await match.model.findOne({_id: req.params.matchid});

    if (!M) {
        res.status(404).send('Match does not exist');
    } else {
        res.status(200).send(M.sgf);
    }
})

module.exports = router;