const router = require('express').Router();
const axios = require('axios');

router.get('/login', (req, res) => {
    res.render('login');
});

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    
    axios.post(`${process.env.USER_MANAGEMENT_API}/users/login`, {
            username, password
        })
        .then((response) => {
            const token = response.data.token;
            const userId = response.data.userId;

            req.session.token = token;
            req.session.userId = userId;
            req.session.user = true;

            res.redirect('/');
            return next();
        })
        .catch((error) => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
            res.status(error.response.status).send(error.response.data);
        })
})

module.exports = router;