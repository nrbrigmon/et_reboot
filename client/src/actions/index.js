import axios from 'axios';
import sampleFields from '../components/create/buildings/inputs/sampleBuildingInput';

/* USER ACTIONS */
export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/user/info');
	// console.log(res);
	dispatch({ type: 'FETCH_USER', payload: res.data });
};

/* DEVELOPMENT TYPE ACTIONS */
export const addNewDevTypeRow = (myLib) => {
	const action = {
		type: 'ADD_DEV_TYPE_ROW',
		myLib
	}
	return action;
};
export const removeDevTypeRow = (myLib) => {
	const action = {
		type: 'REMOVE_DEV_TYPE_ROW',
		myLib
	}
	return action;
};
export const fetchDevTypeInit = (rows, myLib) => {
	const action = {
		type: 'FETCH_DEV_TYPE_INIT',
		rows,
		myLib
	}
	return action;
}
export const fetchDevTypeTotals = (devTypes) => {
	console.log('action for ', devTypes)
	const action = {
		type: 'FETCH_DEV_TYPE_TOTAL',
		devTypes
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

/* BUILDING ACTIONS */
export const addBuildingToLibrary = (bldgArray) => {
	// console.log(action);
	const action = {
		type: 'ADD_BUILDING',
		bldgArray
	}
	return action;
};

export const removeBuildingFromLibrary = (selection) => {
	// console.log(action);
	
	const action = {
		type: 'REMOVE_BUILDING',
		item: selection
	}
	// console.log(action);
	return action;
};

export const toggleBuildingModalList = (selection) => {
	// console.log(selection)
	const action = {
		type: 'TOGGLE_BUILDING',
		id: selection.id,
		item: selection
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

export const saveBuilding = (status, bldg) => async dispatch => {
	if (status === true){
		const res = await axios.put('/api/buildings/'+bldg.uniqueId+'', bldg)
		// console.log(res);
		dispatch({ type: 'UPDATE_BUILDING', payload: res.data });
	} else {
		const res = await axios.post('/api/buildings', bldg)
		// console.log(res);
		dispatch({ type: 'NEW_BUILDING', payload: res.data });
	}
};
export const editBuildingPrototype = (status, selection) => {
	let action;
	if (status === true){
		action = {
			type: 'EDIT_BUILDING_PROTOTYPE',
			payload: selection
		}
	} else {
		action = {
			type: 'EDIT_BUILDING_PROTOTYPE',
			payload: sampleFields
		}
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

export const fetchBuildingPrototypeAttributes = (status, id) => async dispatch => {
	if (status === true){
		const res = await axios.get('/api/buildings/'+id);
		// console.log(res);
		dispatch({ type: 'FETCH_BLDG_PROTOTYPE', payload: res["data"][0] });
	} else {
		// console.log('loading template');

		dispatch({ type: 'FETCH_BLDG_PROTOTYPE', payload: sampleFields});
	}
};

export const updateFormFieldInput = (page, update) => {
	const action = {
		type: 'UPDATE_BLDG_PROTOTYPE_FIELD',
		page,
		update
	}
	return action;
}