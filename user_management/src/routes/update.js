const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const verify = require('./verify');

router.post('/:userId', verify, async (req, res) => {
    const userId = req.params.userId;
    console.log('updating', userId);
    const user = await User.findOne({ _id: userId });
    if (!user) {
        res.status(400).send('Invalid user id');
        return;
    }
    if (req.body.password) {
        const salt = await bcrypt.genSalt(10);
        const password = await bcrypt.hash(req.body.password, salt);
        user.password = password;
    }
    if (req.body.email) {
        user.email = req.body.email;
    }
    if (req.body.username) {
        user.username = req.body.username;
    }
    if (req.body.first_name) {
        user.first_name = req.body.first_name;
    }
    if (req.body.last_name) {
        user.last_name = req.body.last_name;
    }
    try {
        await user.save();
        res.status(200).send('User updated');
    } catch (error) {
        res.status(500).send('Internal error on user update');
    }
})

module.exports = router;