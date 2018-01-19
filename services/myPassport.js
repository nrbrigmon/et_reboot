const http = require('http');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const auth = require('../keys/auth');


const pool = require('../db');

passport.serializeUser((user, done) => {
	console.log('serializaing user...');
	done(null, user.google_id);
});

passport.deserializeUser((google_id, done) => {
	console.log('de__serializaing user...');
	// let id = 
	pool.query("SELECT * FROM envision_users WHERE google_id = '"+ google_id +"' ", (err, res) =>{
		if (err) return done(err);
		console.log(res.rows);
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
			let { id } = profile;
			console.log(profile);
			console.log('using google strategy with ', id);
			pool.query("SELECT * FROM envision_users WHERE google_id = '"+ id +"' ", (err, res) =>{
				if (err) return done(err);
				console.log('existing user search: ', res.rows[0]);
				let existingUser = res.rows[0];
				
				if (existingUser) {
					//record already exists
					console.log('user already exists');
					done(null, existingUser);
				} else {
					console.log('user doesnt exist');
					pool.query(
						" INSERT INTO envision_users (google_id, building_library_ids, date_started) VALUES ('"+id+"', ARRAY[]::integer[], CURRENT_TIMESTAMP);", (err, res) => {
					    if (err) return done(err);
						
						let user = res.rows[0];
						console.log(user);
						// response.json(res.rows);
						done(null, user);
					});			
				}
			});
		}
	)
);
