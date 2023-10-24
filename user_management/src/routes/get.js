const router = require('express').Router();
const User = require('../models/User');

router.get('/:userId', async (req, res) => {
    const userId = req.params.userId;
    const user = await User.findOne({ _id: userId});
    if (!user) {
        res.status(404).send('User does not exist');
        return;
    }

    res.status(200).send({
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
    })
})

module.exports = router;