const _ = require('lodash');
const { Router } = require('express');
const pool = require('../db');
const router = Router();
 
//get all buildings in table
router.get('/', (request, response, next) =>{
    pool.query("SELECT * FROM building_prototype_inputs ORDER BY id ASC", (err, res) =>{
        if (err) return next(err);
        
        response.json(res.rows);
    });

});

//get all buildings in table
router.get('/ids', (request, response, next) =>{
    // console.log('getting all ids..')
    pool.query("SELECT attributes -> 'uniqueId' AS id, attributes -> 'physicalInfo' as info FROM building_prototype_inputs", (err, res) =>{
        if (err) return next(err);
        response.json(res.rows);
    });

});

//get specific id attributes
router.get('/:id', (request, response, next) =>{
    // console.log(request.params);    
    const { id } = request.params;
    console.log('incoming specific request..', id)
    pool.query("SELECT * FROM building_prototype_inputs where (attributes ->> 'uniqueId') = '"+ id +"' ", (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific id attributes
router.delete('/:id', (request, response, next) =>{
    const { id } = request.params;
    console.log('incoming specific request..', id)
    pool.query("DELETE FROM building_prototype_inputs WHERE (attributes ->> 'uniqueId') = '"+ id +"' ", (err, res) =>{
        if (err) return next(err);
        console.log(res.rows);
        response.json(res.rows);
    });

});
//post new building into table
router.post('/', (request, response, next) =>{
    // console.log('posting...')
    // let { physicalInfo, basicFinInfo, advFinInfo} = request.body;
    let values = JSON.stringify(request.body)
    // console.log(values)
    pool.query(
        "INSERT INTO building_prototype_inputs (attributes) VALUES ('" + values + "'::jsonb)", (err, res) => {
        if (err) return next(err);
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });

})

router.put('/:id', (request, response, next) =>{
    const { id } = request.params;
    let values = JSON.stringify(request.body)
    console.log('update ', id);
    // console.log(values);
    pool.query("UPDATE building_prototype_inputs SET attributes = '" + values + "' WHERE (attributes ->> 'uniqueId') = '"+ id +"' ", (err, res) => {
        if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });
});


module.exports = router;