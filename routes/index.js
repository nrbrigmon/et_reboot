const { Router } = require('express');

const buildings = require('./building_prototypes');
const users = require('./active_users');
const libraries = require('./libraries');
const devtypes = require('./dev_types');
const turf_queries = require('./turf_queries');

const router = Router();

router.use('/api/buildings', buildings);
router.use('/api/users', users);
router.use('/api/devtypes', devtypes);
router.use('/api/libraries', libraries);
router.use('/api/turf_queries', turf_queries)

module.exports = router;