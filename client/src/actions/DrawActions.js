import axios from 'axios';

/**Leaflet actions */
export const setMapReference = (mapRef) => {
	const action = {
		type: 'SET_MAP_REF',
		payload: mapRef
	}
	return action;
};

export const setDrawTrigger = (drawType) => {
	const action = {
		type: 'SET_DRAW_TYPE',
		payload: drawType
	}
	return action;
};

export const setActiveDevType = (devType) => {
	const action = {
		type: 'SET_ACTIVE_DEV_TYPE',
		payload: devType
	}
	return action;
}; 

export const resetBaseLayer = () => {
	const action = {
		type: 'RESET_BASE_LAYER'
	}
	return action;
};

export const updateOverlayPanel = (status) => {
	const action = {
		type: 'UPDATE_OVERLAY_PANEL',
		payload: status
	}
	return action;
}


/** Turf JS Queries */
export const createTriangleGrid = (shapes) => async dispatch => {
	// console.log(shapes);
	const res = await axios.post('/api/turf_queries/grid', shapes);
	
	dispatch({ type: 'SET_BASE_LAYER', payload: res.data });
}

export const paintDevelopmentType = (shapes) => async dispatch => {
	// console.log(shapes);
	const res = await axios.post('/api/turf_queries/intersects', shapes);
	// console.log(res.data);

	dispatch({ type: 'GET_PAINTED_GRID', payload: res.data });
};

export const turnFeatureIntoGrid = (shapes) => async dispatch => {
	/**  
	 * the goal here is to take a single feature, and turn it into a grid
	 * if that feature is of a certain size. we only want to grid that 
	 * feature and not all the features
	 * 
	 * **/
	// console.log(shapes);
	// const res = await axios.post('/api/turf_queries/grid-feature', shapes);

	// dispatch({ type: 'GET_PAINTED_GRID', payload: res.data });
};

export const convertFileToLayer = (file) => async dispatch => {
	let formData = new FormData();
	formData.append('file', file);
	// console.log(formData)
	const res = await axios.post('/api/conv_queries/zipToLayer', formData, {
		headers: {
		  'Content-Type': 'multipart/form-data'
		}
	});
	// console.log(res);
	dispatch({ type: 'SET_BASE_LAYER', payload: res.data });

}