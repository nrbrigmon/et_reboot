const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const auth = require('./keys/auth');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/myPassport');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//set up cookie session
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [auth.cookieKey]
	})
);
//start the passport library and connect it to your cookie session
app.use(passport.initialize());
app.use(passport.session());

//require auth middleware for all routes in the app
require('./routes/auth_users')(app);
//backend routing
app.use('/', routes);

//middleware
app.use((err, req, res, next) => {
    res.json(err);
})

module.exports = app;