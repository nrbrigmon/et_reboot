const passport = require('passport');

module.exports = app => {
	app.get(
		'/auth/google',
		passport.authenticate('google', {
			scope: ['https://www.googleapis.com/auth/plus.login']
		})
	);

	app.get(
		'/auth/google/callback',
		passport.authenticate('google'),
		(req, res) => {
            // console.log('redirecting....')
			res.redirect('/');
		}
	);

	app.get('/api/user/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	})
	app.get('/api/user/info', (req, res) => {
		res.send(req.user);
	});
};
