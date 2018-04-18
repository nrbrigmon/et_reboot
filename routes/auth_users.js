const passport = require('passport');

module.exports = app => {
    // console.log('auth middleware in action...')
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
	});

	app.get('/api/user/info', (req, res) => {
		console.log('*auth_users.js*, gettin user info: ',req.user);
		res.send(req.user);
	});
};
