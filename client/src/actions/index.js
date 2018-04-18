import axios from 'axios';
import sampleFields from '../components/create/buildings/inputs/sampleBuildingInput';

/* USER ACTIONS */
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/user/info');
	dispatch({ type: 'FETCH_USER', payload: res.data });
};

/* DEVELOPMENT TYPE ACTIONS */
export const addNewDevTypeRow = (selected_buildings) => {
	const action = {
		type: 'ADD_DEV_TYPE_ROW',
		selected_buildings
	}
	return action;
};
export const removeDevTypeRow = (selected_buildings) => {
	const action = {
		type: 'REMOVE_DEV_TYPE_ROW',
		selected_buildings
	}
	return action;
};
export const startInitalizeWorkbook = (selected_buildings) => {
	const action = {
		type: 'INITIALIZE_WORKBOOK',
		selected_buildings
	}
	return action;
}
export const updateDevTypeRow = (value, rowId, cellId) => {
	const action = {
		type: 'UPDATE_DEV_TYPE_ROW',
		value,
		rowId,
		cellId
	}
	return action;
}
export const updateDevTypeAttr = (value, rowId, attrId) => {
	const action = {
		type: 'UPDATE_DEV_TYPE_ATTR',
		value,
		rowId,
		attrId
	}
	return action;
}

/* BUILDING ACTIONS */
export const fetchRandomId = () => {
	const action = {
		type: 'FETCH_RANDOM_ID'
	}
	return action;
}
export const addBuildingToLibrary = (bldg) => {
	//myLibraryReducer
	const action = {
		type: 'ADD_BUILDING',
		bldg
	}
	return action;
};
export const addBuildingArrayToLibrary = (bldgArray, availableBldgs) => {
	//myLibraryReducer
	const action = {
		type: 'ADD_BUILDING_ARRAY',
		bldgArray,
		availableBldgs
	}
	return action;
}
export const removeBuildingFromLibrary = (bldgId) => {
	//myLibraryReducer
	// console.log(action);
	const action = {
		type: 'REMOVE_BUILDING',
		bldgId
	}
	// console.log(action);
	return action;
};

export const saveBuildingLibrary = (myLibrary, status) => async dispatch => {
	//does it already exist? if so put, else post	
	if (status === true){
		const res = await axios.put('/api/libraries/'+myLibrary.library_id+'', myLibrary)
		// console.log(res);
		dispatch({ type: 'UPDATE_BUILDING_LIBRARY', payload: res.data });
	} else {
		const res = await axios.post('/api/libraries', myLibrary)
		// console.log(res);
		dispatch({ type: 'POST_BUILDING_LIBRARY', payload: res.data });
	}
};

export const updateBuildingInLibrary = (editing, building) => {
	// console.log(action);
	const action = {
		type: 'UPDATE_BUILDING',
		editing,
		building
	}
	return action;
};
/* BUIILDING LIBRARY ACTIONS */
export const fetchAllBuildingLibraries = () => async dispatch => {
	const res = await axios.get('/api/libraries');
	dispatch({ type: 'FETCH_BUILDINGS_LIBRARIES', payload: res.data });
};

export const toggleBuildingModalList = (id) => {
	// console.log(selection)
	const action = {
		type: 'TOGGLE_BUILDING',
		id
	}
	return action;
};

export const updateLibraryName = (library_name) => {
	const action = {
		type: 'UPDATE_LIBRARY_NAME',
		library_name
	}
	return action;
}

export const updateLibraryId = (library_id) => {
	const action = {
		type: 'UPDATE_LIBRARY_ID',
		library_id
	}
	return action;
}
export const toggleDevModalList = (id) => {
	// console.log(selection)
	const action = {
		type: 'RADIO_TOGGLE_BUILDING',
		id
	}
	return action;
};
export const resetMyBuildingLibrary = () => {
	const action = {
		type: 'RESET_LIBRARY'
	}
	return action;
};

export const resetBuildingModalList = () => {
	const action = {
		type: 'RESET_LIST'
	}
	return action;
};

export const newAvailableBuilding = (bldg) => {
	const action = {
		type: 'NEW_AVAIL_BUILDING',
		payload: bldg
	}
	return action;
};

export const saveBuildingToDb = (status, bldg) => async dispatch => {
	//does it already exist? if so put, else post	
	// console.log(bldg);
	if (status === true){
		const res = await axios.put('/api/buildings/'+bldg.uniqueId+'', bldg)
		// console.log(res);
		dispatch({ type: 'UPDATE_BUILDING_TOAST', payload: res.data });
	} else {
		// axios.post('/api/buildings', bldg)
		const res = await axios.post('/api/buildings', bldg)
		// console.log(res);
		dispatch({ type: 'POST_BUILDING_TOAST', payload: res.data });
	}
};

export const saveDevelopmentType = (status, devType) => async dispatch => {
	//does it already exist? if so put, else post
	if (status === true){
		const res = await axios.put('/api/devtypes/'+devType.uniqueId+'', devType)
		// console.log(res);
		dispatch({ type: 'UPDATE_DEV_TYPES', payload: res.data });
	} else {
		const res = await axios.post('/api/devtypes', devType)
		// console.log(res);
		dispatch({ type: 'NEW_DEV_TYPES', payload: res.data });
	}
};

export const closeToast = () => {
	let action = {
		type: 'CLOSE_TOAST'
	}
	return action;
}

export const editBuildingPrototype = (status, selection) => {
	let action;
	if (status === true){
		action = {
			type: 'SET_BLDG_PROTOTYPE',
			payload: selection
		}
	} else {
		action = {
			type: 'SET_BLDG_PROTOTYPE',
			payload: sampleFields
		}
	}
	return action;
}
export const releaseBuildingPrototype = () => {
	let action = {
		type: 'RESET_BLDG_PROTOTYPE'
	}
	return action;
}
export const fetchAllBuildings = () => async dispatch => {
	const res = await axios.get('/api/buildings');
	dispatch({ type: 'FETCH_BUILDINGS', payload: res.data });
};

export const fetchSampleDevStuff = () => async dispatch => {
	const res = await axios.get('/api/buildings');
	dispatch({ type: 'SAMPLE_BUILDINGS', payload: res.data });
};

export const updateAvailableBuildings = (bldg) => {
	//buildingReducer
	// console.log(bldg)
	const action = {
		type: 'UPDATE_AVAILABLE_BLDGS',
		payload: bldg
	}
	return action;
}

export const fetchBuildingPrototypeAttributes = (status, id) => async dispatch => {
	if (status === true){
		const res = await axios.get('/api/buildings/'+id);
		// console.log(res);
		dispatch({ type: 'FETCH_BLDG_PROTOTYPE', payload: res["data"][0] });
	} else {
		console.log('loading sample building template');
		
		dispatch({ type: 'FETCH_BLDG_PROTOTYPE', payload: sampleFields});
	}
};

export const updateBuildingPrototypeField = (page, updateCopy) => {
	const action = {
		type: 'UPDATE_BLDG_PROTOTYPE_FIELD',
		page,
		updateCopy
	}
	return action;
}

/* MODAL SELECTIONS */
export const openModal = (selection) => {
	const action = {
		type: 'OPEN_MODAL',
		selection
	}
	return action;
};
export const closeModal = () => {
	// console.log('closemodal fired...');
	const action = {
		type: 'CLOSE_MODAL'
	}
	return action;
};
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
