const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    user: false
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.render('index', { user: req.session.user });
});

const loginRoute = require('./routes/login');
app.use('/', loginRoute);
const registerRoute = require('./routes/register');
app.use('/', registerRoute);
const logoutRoute = require('./routes/logout');
app.use('/', logoutRoute);
const updateAccountRoute = require('./routes/updateAccount');
app.use('/', updateAccountRoute);

app.listen(PORT, () => console.log(`Server running at ${PORT}`));