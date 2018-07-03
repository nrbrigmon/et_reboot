import axios from 'axios';

export const updateLibraryId = (library_id) => {
	const action = {
		type: 'UPDATE_LIBRARY_ID',
		library_id
	}
	return action;
}

export const updateLibraryName = (library_name) => {
	const action = {
		type: 'UPDATE_LIBRARY_NAME',
		library_name
	}
	return action;
}

export const resetMyBuildingLibrary = () => {
	const action = {
		type: 'RESET_LIBRARY'
	}
	return action;
};

/* BUILDING ACTIONS */
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

export const toggleDevModalList = (id) => {
	// console.log(selection)
	const action = {
		type: 'RADIO_TOGGLE_BUILDING',
		id
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
