const shp = require('shpjs')
const { Router } = require('express');
const router = Router();
const multer = require('multer');

var upload = multer();
// var storage = multer.memoryStorage()
// var upload = multer({ storage: storage })

router.post('/zipToLayer',  upload.single('file'), (request, res, next) =>{
    //for the shapefiles in the files folder called pandr.shp
    console.log('inside ziptolayer');
    // console.log(request.body);

    shp(request.file.buffer).then(function(geojson){
        //see bellow for whats here this internally call shp.parseZip()
        // return updated baselayer copy
        var updatedFeatures = geojson['features'].map( elem => {
            //run through features and empty it out... for science
            //later we can efficiently add stuff
			elem.properties = { }
            return elem;
        });
        
        var updatedBaseLayer = geojson; //make copy of layer
        updatedBaseLayer['features'] = updatedFeatures; //update copy
        console.log("done");
        res.json(updatedBaseLayer);
    });

});

module.exports = router;