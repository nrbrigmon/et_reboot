var test = true;
if (process.env.NODE_ENV === 'production') {
	//we are in the prod env
	module.exports = require('./prod');
} else if (test) {
	//we are in the dev env
	module.exports = require('./test');
} else {
	//we are in the dev env
	module.exports = require('./dev');
}
