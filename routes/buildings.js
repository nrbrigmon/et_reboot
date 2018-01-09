const { Router } = require('express');
const pool = require('../db');
const router = Router();

router.get('/', (request, response, next) =>{
    pool.query('SELECT * FROM physical_inputs ORDER BY id ASC', (err, res) =>{
        if (err) return next(err);
        
        response.json(res.rows);
    });

});

router.post('/', (request, response, next) =>{
	console.log(request);
    const { buildingName, buildingHeight, siteArea, siteLocation} = request.body;
	pool.query(
		'INSERT INTO physical_inputs(buildingName, buildingHeight, siteArea, siteLocation) VALUES($1, $2, $3, $4)', 
	[buildingName, buildingHeight, siteArea, siteLocation], (err, res) => {
        if (err) return next(err);

        response.redirect('/api/buildings');
    });
})


module.exports = router;