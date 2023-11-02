const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello world!');
})

// add routes
const createRoute = require('./routes/create');
app.use('/create', createRoute);

module.exports = app;