const _ = require('lodash');
const { Router } = require('express');
const pool = require('../db');
const router = Router();
 
//get all users in table
router.get('/', (request, response, next) =>{
    pool.query("SELECT * FROM chapa_users ORDER BY id ASC", (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific user by googleid 
router.get('/:user_id', (request, response, next) =>{
    console.log(request.params);    
    const { user_id } = request.params;
    console.log('incoming specific request..active_users.get', id)
    pool.query("SELECT * FROM chapa_users WHERE user_id =  $1", [user_id], (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific id attributes
router.delete('/:user_id', (request, response, next) =>{
    const { user_id } = request.params;
    console.log('incoming specific request..', user_id)
    pool.query("DELETE FROM chapa_users WHERE user_id =  $1", [user_id], (err, res) =>{
        if (err) return next(err);
        console.log(res.rows);
        response.json(res.rows);
    });

});
//post new user into table
router.post('/:user_id', (request, response, next) =>{
    const { user_id } = request.params;
    let attributes = JSON.stringify(request.body)
    // console.log('update ', id);
    // console.log(values);
    pool.query(
        " INSERT INTO chapa_users (user_id, attributes) VALUES ($1, $2);", [user_id, attributes], (err, res) => {
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
    // console.log('update ', id);
    // console.log(values);
    pool.query(
        " INSERT INTO chapa_users (google_id, building_library_ids, date_started) VALUES ($1, ARRAY[]::integer[], CURRENT_TIMESTAMP);", [id], (err, res) => {
     if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/buildings');
    });
});


module.exports = router;
