const _ = require('lodash');
const { Router } = require('express');
const pool = require('../db');
const router = Router();
 
//get all workbooks in table
router.get('/', (request, response, next) =>{
    pool.query("SELECT attributes FROM development_workbooks ORDER BY id ASC", (err, res) =>{
        if (err) return next(err);
        
        //destructuring to make up for silly db design
        let payload = res.rows.map( row => row.attributes);
        // console.log(payload);
        // console.log(res.rows);
        response.json(payload);
    });

});

/* VERY IMPORTATNT TO UPDATE FOR FEAR OF SQL INJECTION */

//get specific id attributes
router.get('/:workbook_id', (request, response, next) =>{
    // console.log(request.params);    
    const { workbook_id } = request.params;
    // console.log('incoming specific request..', workbook_id)
    pool.query("SELECT * FROM development_workbooks where (attributes ->> 'workbook_id') = $1", [workbook_id], (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        response.json(res.rows);
    });

});

//get specific id attributes
router.delete('/:workbook_id', (request, response, next) =>{
    const { workbook_id } = request.params;
    console.log('deleting workbook from database..', workbook_id)
    pool.query("DELETE FROM development_workbooks WHERE (attributes ->> 'workbook_id') = $1", [workbook_id], (err, res) =>{
        if (err) return next(err);
        // console.log(res.rows);
        // console.log('successful delete');
        response.json(res.rows);
    });

});

//post new workbook into table
router.post('/', (request, response, next) =>{
    // console.log('posting new workbook on backend...')
    // let { physicalInfo, basicFinInfo, advFinInfo} = request.body;
    let values = JSON.stringify(request.body)
    console.log("new workbook being posted...")
    pool.query(
        "INSERT INTO development_workbooks (attributes) VALUES ($1::jsonb)", [values], (err, res) => {
        if (err) return next(err);
        // console.log('successfully added');
        response.json(res.rows);
        // response.redirect('/api/workbooks');
    });

})

router.put('/:workbook_id', (request, response, next) =>{
    let values = JSON.stringify(request.body)
    const { workbook_id } = request.params;
    console.log('updating workbook in database..', workbook_id)
    pool.query("UPDATE development_workbooks SET attributes = $1 WHERE (attributes ->> 'workbook_id') = $2 ", [values, workbook_id], (err, res) => {
        if (err) {
            console.log(err)
            return next(err);
        }
        response.json(res.rows);
        // response.redirect('/api/workbooks');
    });
});


module.exports = router;