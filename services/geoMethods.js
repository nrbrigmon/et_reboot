const shp = require('shpjs')

var geoMethods = {
    zipToGeoJSON: function( zipFileData ){
        return new Promise(function(resolve,reject){
            shp(zipFileData).then(function(geojson){
                try {
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
                    // console.log("done");
                    resolve(updatedBaseLayer);
                } catch(e) {
                    reject(e);
                }
            });
        })
    }
}

module.exports = geoMethods;