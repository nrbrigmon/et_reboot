const Turf = require('@turf/turf')
const turfClip = require('turf-clip');
const { Router } = require('express');
const router = Router();
const LatLon = require('geodesy').LatLonSpherical;

router.post('/grid', (request, response, next) =>{
	//step one - get bounding box of feature that was just drawn
	var { bboxArray } = request.body;
	var { zoom } = request.body;
	var { src } = request.body;
	//step two - convert bounding box into triangle grid
	var cellSide = 0.1;
	if ( zoom < 14 ){
		cellSide = 0.5;
	} else if (zoom === 15){
		cellSide = 0.02;
	} else if (zoom === 16){
		cellSide = 0.01;
	} else {
		// zoom is >= 17
		cellSide = 0.005;
	}
	
	// **** TODO DEPENDING ON EXTENT OF DRAW, change cellSide number + or -
	var options = {units: 'miles'};
	var triangleGrid = Turf.triangleGrid(bboxArray, cellSide, options);
	var postTurfClip = turfClip(src, triangleGrid)
	
	response.json(postTurfClip);

});

router.post('/intersects', (request, response, next) =>{
	//step one - get bounding box of feature that was just drawn
	var { baseMapLayer } = request.body;
	var { paintLayer } = request.body;
	var { activeDevType } = request.body;
	// console.log('running intersects query');
	var updatedFeatures = baseMapLayer['features'].map( elem => {
		//use turf query to test for intersection
		var intersection = Turf.intersect(elem, paintLayer);
		// if intersection add dev type name and color
		var __coords = [];
		if (intersection){
			// console.log("intersection!");
			if ( activeDevType.devTypeName === null){
				elem.properties = { }
			} else {
				elem.properties = { activeDevType };
				// get coordinate array of shape
				var coords = elem.geometry.coordinates[0];
				// console.log(coords);
				// loop through coordinates and convert to LatLng object
				for (i = 0; i < coords.length; ++i) { 
					__coords[i] = new LatLon(coords[i][0].toString(), coords[i][1].toString());
				}
				// console.log(__coords);
				// console.log(LatLon.areaOf(__coords));
				//calculate area w geodesic transformation * acre conversion
				var acres = LatLon.areaOf(__coords) * 0.000247105;  
				// console.log(acres);
				elem.properties.acres = acres ;
			}

			acres = 0; __coords = [], coords = []; //empty variables
		}
		return elem;
	})
	var updatedBaseLayer = baseMapLayer;
	updatedBaseLayer['features'] = updatedFeatures;
	// return updated baselayer
	response.json(updatedBaseLayer);

});
module.exports = router;
