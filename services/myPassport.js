const http = require('http');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const auth = require('../keys/auth');


const pool = require('../db');

passport.serializeUser((user, done) => {
	// console.log('serializing user...');
	// console.log(user);
	done(null, user);
});

passport.deserializeUser((user, done) => {
	// console.log('de__serializing user...');
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
		async (accessToken, refreshToken, profile, done) => {
			// console.log(profile[id]);
			let google_id = profile[id];
			// console.log(profile);
			// console.log(profile[0]);			
			console.log('using google strategy with ', google_id);
			pool.query('SELECT * FROM envision_users WHERE google_id = $1;', [google_id], (err, res) =>{
				if (err) return done(err);
				// console.log('existing user search: ', res.rows[0]);
				let existingUser = res.rows[0];
				
				if (existingUser) {
					//record already exists
					console.log('user already exists');
					done(null, existingUser);
				} else {
					console.log('user doesnt exist, creating new user');
					let profileObj = JSON.stringify(profile);
					let { google_id } = profileObj
					pool.query('INSERT INTO envision_users (google_id, building_library_ids, google_prof, date_started)'+
						'VALUES ($1, $2, $3, CURRENT_TIMESTAMP);',[profileObj.google_id, [], profileObj ], (err, res) => {
					    if (err) return done(err);
						
						let newUser = res.rows[0];
						// response.json(res.rows);
						done(null, newUser);
					});			
				}
			});
		}
	)
);
