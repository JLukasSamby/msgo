const router = require('express').Router();
const axios = require('axios');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register', async (req, res, next) => {
    const { email, username, first_name, last_name, password } = req.body;
    
    axios.post(`${process.env.USER_MANAGEMENT_API}/users/register`, {
            username, password, email, first_name, last_name
        })
        .then( (response) =>{
            res.status(response.status).redirect('/');
            return next();
        })
        .catch((error) => {
            if (error.response) {
                res.status(error.response.status).send(error.response.data);
            } else {
                console.error(error.message);
                res.status(500).send('Internal Server Error');
            }
        })
})

module.exports = router;