const Turf = require('@turf/turf')
const turfClip = require('turf-clip');
const { Router } = require('express');
const router = Router();

//get specific user by googleid 
router.get('/', (request, response, next) =>{

	var poly1 = Turf.polygon([[[0,0],[0,5],[5,5],[5,0],[0,0]]]);
	var poly2 = Turf.polygon([[[1,1],[1,6],[6,6],[6,1],[1,1]]]);

	
	console.log(result);
	// var bbox = [-97.746992, 30.280268,-97.734590, 30.290978];
	// // var bbox = [-95, 30 ,-85, 40];
	// var cellSide = 0.1;
	// var options = {units: 'miles'};

	// var triangleGrid = Turf.triangleGrid(bbox, cellSide, options);
	// // console.log(triangleGrid);
	// // response.json({"msg":'reponse'});
	// response.json(triangleGrid);
	var bbox = [0, 0, 10, 10];
	var poly = turf.polygon([[[2, 2], [8, 4], [12, 8], [3, 7], [2, 2]]]);

	var clipped = turf.bboxClip(poly, bbox);
	response.json(clipped);

});

//get specific id attributes
router.post('/grid', (request, response, next) =>{
	//step one - get bounding box of feature that was just drawn
	var bboxPolygon = request.body.bboxArray;
	// console.log('outgoing?', bboxPolygon)
	console.log(bboxPolygon);
	//step two - convert bounding box into triangle grid
	var cellSide = 0.1;
	var options = {units: 'miles'};
	var triangleGrid = Turf.triangleGrid(bboxPolygon, cellSide, options);

	//step three - clip original feature with triangleGrid features
	var srcFeature = request.body.src;
	console.log(srcFeature);
	
	response.json(triangleGrid);

});

module.exports = router;
