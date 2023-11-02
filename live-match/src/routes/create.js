const router = require('express').Router();

router.post('/', (req, res) => {
    const playerID = req.body.playerID;
    const size = req.body.size;
    const ranked = req.body.ranked;

    res.status(201).send();
})

module.exports = router;