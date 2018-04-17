const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const routes = require('./routes');
const { auth } = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');

require('./services/myPassport');
// Set up the express app
const app = express();

// Log requests to the console.
app.use(logger('dev'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true})); ///added to fix request entity too large issue

// console.log('logging here **NRB**')
// console.log(process.env);

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

// if (process.env.NODE_ENV === 'production') {
	// Express will serve up production assets
	app.use(express.static('client/build'));
	
	// Express will serve up index.html if
	//it doesnt understand the route
	const path = require('path');
	app.get('*', (req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
// }

module.exports = app;