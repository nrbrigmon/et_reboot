const _ = require('lodash');
const {
	Router
} = require('express');
const pool = require('../db');
const router = Router();

//get all buildings in table
router.get('/', (request, response, next) => {
	pool.query("SELECT attributes FROM building_prototypes ORDER BY id ASC", (err, res) => {
		if (err) return next(err);

		//destructuring to make up for silly db design
		let payload = res.rows.map(row => row.attributes);
		// console.log(payload);
		// console.log(res.rows);
		response.json(payload);
	});

});

/* VERY IMPORTATNT TO UPDATE FOR FEAR OF SQL INJECTION */

//get specific id attributes
router.get('/:uniqueId', (request, response, next) => {
	// console.log(request.params);    
	const {
		uniqueId
	} = request.params;
	console.log('incoming specific request..', uniqueId)
	pool.query("SELECT * FROM building_prototypes where (attributes ->> 'uniqueId') = $1 ", [uniqueId], (err, res) => {
		if (err) return next(err);
		// console.log(res.rows);
		response.json(res.rows);
	});

});

//get specific id attributes
router.delete('/:id', (request, response, next) => {
	const {
		uniqueId
	} = request.params;
	console.log('deleting building from database..', uniqueId)
	pool.query("DELETE FROM building_prototypes WHERE (attributes ->> 'uniqueId') = 1 ", [uniqueId], (err, res) => {
		if (err) return next(err);
		console.log(res.rows);
		console.log('successful delete');
		response.json(res.rows);
	});

});

//post new building into table
router.post('/', (request, response, next) => {
	console.log('posting new building on backend...')
	// let { physicalInfo, basicFinInfo, advFinInfo} = request.body;
	let values = JSON.stringify(request.body)

	// console.log('adding new building to database..', uniqueId)
	pool.query(
		"INSERT INTO building_prototypes (attributes) VALUES ($1::jsonb)", [values], (err, res) => {
			if (err) return next(err);
			console.log('successfully added');
			response.json(res.rows);
			// response.redirect('/api/buildings');
		});

})

router.put('/:uniqueId', (request, response, next) => {
	let values = JSON.stringify(request.body)
	const {
		uniqueId
	} = request.params;
	console.log('updating building in database..', uniqueId)
	pool.query("UPDATE building_prototypes SET attributes = $1 WHERE (attributes ->> 'uniqueId') = $2 ", [values, uniqueId], (err, res) => {
		if (err) {
			console.log(err)
			return next(err);
		}
		response.json(res.rows);
		// response.redirect('/api/buildings');
	});
});


module.exports = router;