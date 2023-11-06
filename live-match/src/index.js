const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./db');
db.connect(app);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello worlds!');
})

// add routes
const createRoute = require('./routes/create');
app.use('/create', createRoute);
const searchRoute = require('./routes/search');
app.use('/', searchRoute);
const getRoute = require('./routes/get');
app.use('/', getRoute);
const joinRoute = require('./routes/join');
app.use('/', joinRoute);

app.listen(port, () => console.log(`App is listening on ${port}`));

module.exports = app;