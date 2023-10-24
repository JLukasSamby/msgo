const express = require('express');
const app = express();
const PORT = process.env.PORT || 4050;

const mongoose = require('mongoose');
const cors = require('cors');

const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const updateRoute = require('./routes/update');
const getRoute = require('./routes/get');

mongoose.connect(
    process.env.DB_CONNECT,
    { useNewUrlParser: true, useUnifiedTopology: true }
).catch(error => console.log(error));

app.use(express.json(), cors());

app.use('/users/', registerRoute);
app.use('/users/', loginRoute);
app.use('/users/', updateRoute);
app.use('/users/', getRoute);

app.listen(PORT, () => console.log(`Server running at ${PORT}.`));