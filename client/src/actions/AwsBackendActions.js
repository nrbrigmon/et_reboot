import axios from 'axios';

export const uploadFileToS3 = (file) => async dispatch => {
	
	let formData = new FormData();
	formData.append('file', file);
	console.log(formData)	
	const res = await axios.post('/api/aws_queries/s3', formData, {
		headers: {
		  'Content-Type': 'multipart/form-data'
		}
	});
	console.log(res);
	dispatch({ type: 'SEND_TOAST', payload: "File Saved!" });
	
}

export const getFileFromS3 = (id) => async dispatch => {
	
	const res = await axios.get('/api/aws_queries/s3'+id);
	// console.log(res);
	dispatch({ type: 'TEST_FROM_S3', payload: res.data });
}
/*
	see calvinmetcalf shpzip to geojson
	https://github.com/calvinmetcalf/shapefile-js

	steps i want to accomplish:
	1. load zipped shapefile OR geojson
		- distinguish between the two and respond accordingly
	2. save with file name and method for retrieving again
		- better metadata and key naming
	3. convert type to shape and display as baseMapLayer
*//////////
