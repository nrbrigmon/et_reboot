const http = require('http');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const { auth } = require('../config/keys');


const pool = require('../db');

passport.serializeUser((user, done) => {
	console.log('serializing user...');
	// console.log(user);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	console.log('de__serializing user...');
	// console.log(user);
	pool.query('SELECT * FROM envision_users WHERE google_id = $1;', [user.google_id], (err, res) =>{
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
			proxy: true
		},
		(accessToken, refreshToken, profile, done) => {
			console.log('google strategy in progress');
			// console.log(profile);
			let _id_search = profile.id;
			console.log('using google strategy with ', _id_search);

			const res = pool.query('SELECT * FROM envision_users WHERE google_id = $1;', [_id_search], (err, res) =>{
				console.log('running query....')
				if (err) return done(err);
				// console.log('existing user search: ', res.rows[0]);
				let existingUser = res.rows[0];
				
				if (existingUser) {
					//record already exists
					console.log('user already exists');
					return done(null, existingUser);
				} else {
					console.log('user doesnt exist, creating new user');
					let profileObj = JSON.stringify(profile);
					let { google_id } = profileObj
					return pool.query('INSERT INTO envision_users (google_id, building_library_ids, google_prof, date_started)'+
						'VALUES ($1, $2, $3, CURRENT_TIMESTAMP);',[ google_id, [], profileObj ], (err, res) => {
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
