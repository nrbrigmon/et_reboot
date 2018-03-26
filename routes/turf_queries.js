const Turf = require('@turf/turf')
const turfClip = require('turf-clip');
const { Router } = require('express');
const router = Router();


router.post('/grid', (request, response, next) =>{
	//step one - get bounding box of feature that was just drawn
	var { bboxArray } = request.body;
	var { zoom } = request.body;
	//step two - convert bounding box into triangle grid
	var cellSide = 0.1;
	if ( zoom > 16 ){
		cellSide = 0.01;
	}
	// console.log(zoom);
	// **** TODO DEPENDING ON EXTENT OF DRAW, change cellSide number + or -
	var options = {units: 'miles'};
	var triangleGrid = Turf.triangleGrid(bboxArray, cellSide, options);
	// console.log(triangleGrid);
	response.json(triangleGrid);

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
		if (intersection){
			console.log("intersection!");
			elem.properties = { activeDevType };
			// console.log(elem);
		}
		return elem;
	})
	var updatedBaseLayer = baseMapLayer;
	updatedBaseLayer['features'] = updatedFeatures;
	// return updated baselayer
	response.json(updatedBaseLayer);

});
module.exports = router;
