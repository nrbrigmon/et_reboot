// const http = require('http');
const passport = require('passport');
const shortid = require('shortid');
const moment = require('moment');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const userSchema = require("../client/src/schemas/user");

const pool = require('../db');
const { auth } = require('../config/keys');

let createUserProfile = function(){
	let newUser = userSchema;
	newUser[user_id] = shortid.generate();
	newUser[date_started] = moment().format("YYYY-MM-DD hh:mm:ss A");
	return newUser;
};


passport.serializeUser((user, done) => {
	console.log('serializing user...');
	// console.log(user);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log('de__serializing user...');
	// console.log(user);
	pool.query('SELECT * FROM chapa_users WHERE user_id = $1;', [user.user_id], (err, res) =>{
		if (err) return done(err);
		// console.log(res.rows);
		let user = res.rows[0];
		// response.json(res.rows);
		done(null, user);
	});
	
});

passport.use(
	new GoogleStrategy(
		{
			clientID: auth.googleClientID,
			clientSecret: auth.googleClientSecret,
			callbackURL: '/auth/google/callback',
			failureRedirect: '/',
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('google strategy in progress');
			// console.log(profile);
			let _id_search = profile.id;
			console.log('using google strategy with ', _id_search);

			const res = pool.query("SELECT * FROM chapa_users WHERE (attributes ->> 'google_id') = $1;", [_id_search], (err, res) =>{
				console.log('running query....')
				if (err) return done(err);
				// console.log('existing user search: ', res.rows[0]);
				let existingUser = res.rows[0];
				
				if (existingUser) {
					//record already exists
					console.log('user already exists');
					console.log(existingUser);
					return done(null, existingUser);
				} else {
					console.log('user doesnt exist, creating new user');
					// console.log(profile);
					let new_attributes = createUserProfile();
					let { user_id } = new_attributes;
					new_attributes["google_prof"] = JSON.stringify(profile);
					new_attributes["google_id"] = profile["id"]
					return pool.query('INSERT INTO chapa_users (user_id, attributes)'+
						'VALUES ($1, $2);',[ user_id, new_attributes ], (err, res) => {
					    if (err) return done(err);
						
						let newUser = res.rows[0];
						// response.json(res.rows);
						return done(null, newUser);
					});			
				}
			});
		}
	)
);
