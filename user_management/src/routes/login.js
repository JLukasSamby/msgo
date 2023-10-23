const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

router.post('/login', async (req, res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(401).send("Invalid username");

    const password = await bcrypt.compare(req.body.password, user.password);
    if (!password) return res.status(401).send("Incorrect password");

    try {
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).header('token', token).send(token);
    } catch (error) {
        res.status(500).send(error);
    }
})

module.exports = router;