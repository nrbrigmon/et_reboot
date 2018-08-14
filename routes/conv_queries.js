const { Router } = require('express');
const router = Router();
const multer = require('multer');
const geoMethods = require('../services/geoMethods');

var upload = multer();
// var storage = multer.memoryStorage()
// var upload = multer({ storage: storage })

router.post('/zipToLayer',  upload.single('file'), (request, response, next) =>{
    
    // console.log(request.file);
    geoMethods
    .zipToGeoJSON(request.file.buffer)
    .then( function(newJSON){
      // console.log('newJSON received...');
      response.json(newJSON);
    })

});

module.exports = router;