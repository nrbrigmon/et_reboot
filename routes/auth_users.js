const passport = require('passport');

module.exports = app => {
    console.log('auth middleware in action...')
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['profile', 'email']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
            console.log('redirecting....')
			res.redirect('/');
		}
	);

	app.get('/api/user/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	})
	app.get('/api/user/info', (req, res) => {
		console.log('\n\n*auth_users.js*, request:\n\n',req.headers);
		
		console.log('\n\n*auth_users.js*, gettin user info: \n\n',req.user);
		res.send(req.user);
	});
};
