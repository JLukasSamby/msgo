const router = require('express').Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');

module.exports = router;

router.post('/register', async (req, res) => {
    // Check uniqueness of email
    const emailExists = await User.findOne({ email: req.body.email });
    if (emailExists) {
        res.status(400).send('Email already in use');
        return;
    }

    // Check uniqueness of username
    const usernameExists = await User.findOne({ username: req.body.username });
    if (usernameExists) {
        res.status(400).send('Username already exists');
        return;
    }

    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, salt);

    // Create user
    const user = new User({
        username: req.body.username,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: password
    })

    try {
        // Add user
        await user.save();
        res.status(201).send("User created");

    } catch(error) {
        res.status(500).send(error);
    }
})

module.exports = router;