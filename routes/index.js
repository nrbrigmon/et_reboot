const { Router } = require('express');

// const monsters = require('./monsters');
// const habitats = require('./habitats');
const buildings = require('./buildings');

const router = Router();

router.use('/api/buildings', buildings);
// router.use('/habitats', habitats);
// router.use('/lives', lives);

module.exports = router;