import axios from 'axios';

export const uploadFileToS3 = (file) => async dispatch => {
	
	let formData = new FormData();
	formData.append('file', file);
	// console.log(formData)	
	const res = await axios.post('/api/aws_queries/s3', formData, {
		headers: {
		  'Content-Type': 'multipart/form-data'
		}
	});
	// console.log(res);
	dispatch({ type: 'SEND_TOAST', payload: { msg: "File Saved!", open: true } });
	
}

export const getFileFromS3 = (bucketKey) => async dispatch => {
	
	const res = await axios.get('/api/aws_queries/s3/'+bucketKey);
	// console.log(res);
	dispatch({ type: 'SET_BASE_LAYER', payload: res.data });
}

export const getAllLayersFromS3 = () => async dispatch => {
	
	const res = await axios.get('/api/aws_queries/s3');
	// console.log(res);
	dispatch({ type: 'FETCH_S3_LAYERS', payload: res.data["Contents"] });
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
