const _ = require('lodash');
const { Router } = require('express');
const pool = require('../db');
const router = Router();
 
//get all buildings in table
router.get('/', (request, response, next) =>{
    pool.query("SELECT * FROM building_libraries ORDER BY id ASC", (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        //destructuring to make up for silly db design
        let payload = res.rows;

        response.json(payload);
    });

});

/* VERY IMPORTATNT TO UPDATE FOR FEAR OF SQL INJECTION */

//get specific id attributes
router.get('/:id', (request, response, next) =>{
    const { id } = request.params;
    // console.log(request.params);
    pool.query("SELECT * FROM building_libraries WHERE (attributes ->> 'library_id') = $1 ", [id],  (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific id attributes
router.delete('/:id', (request, response, next) =>{
    const { id } = request.params;
    console.log('deleting building from database..', id)
    // console.log(request.params);
	pool.query("DELETE building_libraries WHERE (attributes ->> 'library_id') = $1 ", [ id], 
		(err, res) =>{
		// pool.query("DELETE FROM building_libraries WHERE (library_id) = $1", [id], (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        console.log('successful delete');
        response.json(res.rows);
    });

});

//post new building into table
router.post('/', (request, response, next) =>{
    console.log('posting new library on backend...')
    // let { library_id, library_name, library_bldgs } = request.body;
    
    pool.query(
        "INSERT INTO building_libraries (attributes) VALUES ($1::jsonb)", [request.body],
        // "INSERT INTO building_libraries (library_id, library_name, library_bldgs) VALUES ($1, $2, $3)", [library_id, library_name, library_bldgs], 
		(err, res) => {
        if (err) return next(err);
        console.log('successfully added');
        // console.log(res.rows);
        response.json(res.rows);
    });

})

router.put('/:id', (request, response, next) =>{
    const { id } = request.params;
    // let { library_name, library_bldgs } = request.body;
    console.log('updating building in database..', id)
    // ('UPDATE user SET ? WHERE ?', [{ Name: name }, { UserId: userId }])
    pool.query("UPDATE building_libraries SET attributes = $1 WHERE (attributes ->> 'library_id') = $2 ", [request.body, id],
    // pool.query("UPDATE building_libraries SET library_name = $1, library_bldgs = $2 WHERE library_id = $3", 
        // [library_name, library_bldgs, id],
        (err, res) => {
        if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });
});


module.exports = router;