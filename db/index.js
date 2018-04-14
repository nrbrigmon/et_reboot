const { Pool } = require('pg');
const { user, host, database, password, port } = require('../config/keys').pool;

const pool = new Pool({user, host, database, password, port});


module.exports = pool;