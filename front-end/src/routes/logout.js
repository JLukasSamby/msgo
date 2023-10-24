const router = require('express').Router();

router.post('/logout', (req, res) => {
    req.session.user = null;
    req.session.userId = null;
    req.session.token = null;
    res.redirect('/');
})

module.exports = router;