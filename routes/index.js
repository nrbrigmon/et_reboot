const { Router } = require('express');

const buildings = require('./building_prototypes');
const users = require('./active_users');
const libraries = require('./libraries');
const dev_workbooks = require('./dev_workbooks');
const turf_queries = require('./turf_queries');
const aws_s3_queries = require('./aws_s3_queries');
const conv_queries = require('./conv_queries');

const router = Router();

router.use('/api/buildings', buildings);
router.use('/api/users', users);
router.use('/api/dev_workbooks', dev_workbooks);
router.use('/api/libraries', libraries);
router.use('/api/turf_queries', turf_queries)
router.use('/api/aws_queries', aws_s3_queries)
router.use('/api/conv_queries', conv_queries)

module.exports = router;