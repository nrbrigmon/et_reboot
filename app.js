const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');

// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//backend routing
app.use('/', routes);

//middleware
app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;