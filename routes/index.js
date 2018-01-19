const { Router } = require('express');

const buildings = require('./building_prototypes');
const users = require('./active_users');

const router = Router();

router.use('/api/buildings', buildings);
router.use('/api/users', users);

module.exports = router;