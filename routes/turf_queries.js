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
	
	var options = {units: 'miles'};
	//step three - take bounding box and run triangle grid function through it
	var triangleGrid = Turf.triangleGrid(bboxArray, cellSide, options);
	//step four - clip the triangle grid with the original draw shape!
	var postTurfClip = turfClip(src, triangleGrid)
	
	response.json(postTurfClip);

});

router.post('/intersects', (request, response, next) =>{
	//step one - get bounding box of feature that was just drawn
	var { baseMapLayer } = request.body;
	var { paintLayer } = request.body;
	var { activeDevType } = request.body;
	console.log(baseMapLayer)
	var __count1 = 0;
	var __count2 = 0;
	var updatedFeatures = baseMapLayer['features'].map( elem => {
		//use turf query to test for intersection
		var intersection = Turf.intersect(elem, paintLayer);
		// if intersection add dev type name and color
		if (intersection === null){
			//then we test for centroid as fallback mechanism
			var centroid = Turf.centroid(elem)
			//reaffirm intersection with new boolean
			intersection = Turf.booleanPointInPolygon(centroid, paintLayer);	
		}

		__count1 = __count1 + 1;
		var __coords = [];
		if (intersection){
			__count2 = __count2 + 1;
			// console.log("intersection!");
			if ( activeDevType.devTypeName === null){
				elem.properties = { }
			} else {
				elem.properties = { activeDevType };
				// get coordinate array of shape
				var coords = elem.geometry.coordinates[0];
				// loop through coordinates and convert to LatLng object
				for (i = 0; i < coords.length; ++i) { 
					__coords[i] = new LatLon(coords[i][0].toString(), coords[i][1].toString());
				}
				//calculate area w geodesic transformation * acre conversion
				var acres = LatLon.areaOf(__coords) * 0.000247105;  
				// console.log(acres);
				elem.properties.acres = acres ;
			}

			acres = 0; __coords = [], coords = []; //empty variables
		}
		return elem;
	})
	
	
	var updatedBaseLayer = baseMapLayer; //make copy of layer
	updatedBaseLayer['features'] = updatedFeatures; //update copy
	// return updated baselayer copy
	response.json(updatedBaseLayer);

});
module.exports = router;


// router.post('/test', (request, response, next) =>{
// 	console.log('ttttt')
// 	var poly1 = Turf.polygon([[
// 		[-122.801742, 45.48565],
// 		[-122.801742, 45.60491],
// 		[-122.584762, 45.60491],
// 		[-122.584762, 45.48565],
// 		[-122.801742, 45.48565]
// 	  ]]);
	  
// 	  var poly2 = Turf.polygon([[
// 		[-122.520217, 45.535693],
// 		[-122.64038, 45.553967],
// 		[-122.720031, 45.526554],
// 		[-122.669906, 45.507309],
// 		[-122.723464, 45.446643],
// 		[-122.532577, 45.408574],
// 		[-122.487258, 45.477466],
// 		[-122.520217, 45.535693]
// 	  ]]);
	  
// 	  var intersection = Turf.intersect(poly1, poly2);
// 	  console.log('starting interssection ',intersection);
// 	let paint = [[-97.752512,30.276975],[-97.752807,30.277036],[-97.752933,30.27673],[-97.752418,30.276723],[-97.752512,30.276975]];
// 	let a = [[-97.75273229174094,30.27685104142831],[-97.75269556979384,30.27688269298103],[-97.75268514697034,30.27688269298103],[-97.75268514697034,30.27681032718946],[-97.75273229174094,30.27685104142831]];
// 	let b = [[-97.75269556979384,30.27688269298103],[-97.75268514697034,30.276891676669916],[-97.75268514697034,30.27688269298103],[-97.75269556979384,30.27688269298103]];
// 	console.log('ok')
// 	let intersection1 = Turf.intersect( Turf.polygon([a]),  Turf.polygon([paint]) );
// 	let intersection2 = Turf.intersect( Turf.polygon([b]),  Turf.polygon([paint]) );
// 	// console.log(intersection1);
// 	// console.log(intersection2);
// 	var c1 = Turf.centroid(Turf.polygon([a]))
// 	var c2 = Turf.centroid(Turf.polygon([b]))
// 	var intersection3 = Turf.booleanPointInPolygon(c1, Turf.polygon([paint]));
// 	var intersection4 = Turf.booleanPointInPolygon(c2, Turf.polygon([paint]));
// 	// console.log(intersection3);
// 	// console.log(intersection4);
// 	response.json("testing complete");
// })
