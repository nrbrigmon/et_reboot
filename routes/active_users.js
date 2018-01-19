const _ = require('lodash');
const { Router } = require('express');
const pool = require('../db');
const router = Router();
 
//get all users in table
router.get('/', (request, response, next) =>{
    pool.query("SELECT * FROM envision_users ORDER BY id ASC", (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get all users in table
// router.get('/ids', (request, response, next) =>{
//     // console.log('getting all ids..')
//     pool.query("SELECT googleID AS id FROM building_prototype_inputs", (err, res) =>{
//         if (err) return next(err);
//         response.json(res.rows);
//     });

// });

//get specific user by googleid 
router.get('/:id', (request, response, next) =>{
    // console.log(request.params);    
    const { id } = request.params;
    console.log('incoming specific request..', id)
    pool.query("SELECT * FROM envision_users WHERE google_id = '"+ id +"' ", (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific id attributes
router.delete('/:id', (request, response, next) =>{
    const { id } = request.params;
    console.log('incoming specific request..', id)
    pool.query("DELETE FROM envision_users WHERE (attributes ->> 'uniqueId') = '"+ id +"' ", (err, res) =>{
        if (err) return next(err);
        console.log(res.rows);
        response.json(res.rows);
    });

});
//post new building into table
router.post('/:id', (request, response, next) =>{
    const { id } = request.params;
    // let values = JSON.stringify(request.body)
    console.log('update ', id);
    // console.log(values);
    pool.query(
        " INSERT INTO envision_users (google_id, building_library_ids, date_started) VALUES ('"+id+"', ARRAY[]::integer[], CURRENT_TIMESTAMP);", (err, res) => {
     if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });

})

router.put('/:id', (request, response, next) =>{
    const { id } = request.params;
    // let values = JSON.stringify(request.body)
    console.log('update ', id);
    // console.log(values);
    pool.query(
        " INSERT INTO envision_users (google_id, building_library_ids, date_started) VALUES ('"+id+"', ARRAY[]::integer[], CURRENT_TIMESTAMP);", (err, res) => {
     if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });
});


module.exports = router;