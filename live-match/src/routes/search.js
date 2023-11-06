const router = require('express').Router();
const match = require('../models/match');

router.get('/search', async (req, res) => {

    // Add query maker based on ?... string in URI
    const matches = await match.model.find({});

    if (!matches) {
        res.status(404).send('No matches found!');
    } else {
        // Add formatting of output
        res.status(200).send(matches)
    }
})

module.exports = router;