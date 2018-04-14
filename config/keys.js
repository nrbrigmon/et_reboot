if (process.env.NODE_ENV === 'production') {
	//we are in the prod env
	module.exports = require('./prod');
} else {
	//we are in the dev env
	module.exports = require('./dev');
}
