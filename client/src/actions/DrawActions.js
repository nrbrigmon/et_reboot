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

/** Turf JS Queries */
export const createTriangleGrid = (shapes) => async dispatch => {
	// console.log(shapes);
	const res = await axios.post('/api/turf_queries/grid', shapes);
	
	dispatch({ type: 'GET_TRI_GRID', payload: res.data });
}

export const paintDevelopmentType = (shapes) => async dispatch => {
	// console.log(shapes);
	const res = await axios.post('/api/turf_queries/intersects', shapes);
	// console.log(res.data);

	dispatch({ type: 'GET_PAINTED_GRID', payload: res.data });
};
export const resetBaseLayer = () => {
	const action = {
		type: 'RESET_BASE_LAYER'
	}
	return action;
};
