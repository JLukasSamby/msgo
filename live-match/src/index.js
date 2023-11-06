const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

const db = require('./db');
db.connect(app);

app.use(express.json());

app.get('/live-match/', (req, res) => {
    res.send('Hello worlds!');
})

// add routes
const createRoute = require('./routes/create');
app.use('/live-match/create', createRoute);
const searchRoute = require('./routes/search');
app.use('/live-match/', searchRoute);
const getRoute = require('./routes/get');
app.use('/live-match/', getRoute);
const joinRoute = require('./routes/join');
app.use('/live-match/', joinRoute);

app.listen(port, () => console.log(`App is listening on ${port}`));

module.exports = app;