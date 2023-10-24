require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4050;

app.get("/", (req, res) => {
    res.send(`Hello world!2`);
});
app.listen(PORT, () => console.log(`Server running at ${PORT}.`));

const mongoose = require('mongoose');
const cors = require('cors');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const updateRoute = require('./routes/update');
const getRoute = require('./routes/get');

mongoose.connect(
    'mongodb://127.0.0.1:27017/GoTest',
    { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.json(), cors());

app.use('/users/', registerRoute);
app.use('/users/', loginRoute);
app.use('/users/', updateRoute);
app.use('/users/', getRoute);