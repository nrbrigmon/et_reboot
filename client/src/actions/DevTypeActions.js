import axios from 'axios';

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

export const removeDevTypeFromWorkbook = (devTypeId) => {
	let action = {
		type: 'REMOVE_DEV_TYPE_ROW',
		devTypeId
	}
	return action;
}

export const getExistingWorkbook = ( id) => async dispatch => {
	const res = await axios.get('/api/devtypes/'+id);
	// console.log(res);
	dispatch({ type: 'FETCH_EXISTING_WORKBOOK', payload: res["data"] });
};

export const saveWorkbook = (status, workbook) => async dispatch => {
	let { id } = workbook;
	if (status === true){
		const res = await axios.put('/api/devtypes/'+id+'', workbook)
		// console.log(res);
		dispatch({ type: 'SEND_TOAST', payload: { data: res, msg:"Workbook Updated!", open: true } });
	} else {
		const res = await axios.post('/api/devtypes', workbook)
		// console.log(res);
		dispatch({ type: 'SEND_TOAST', payload: { data: res, msg:"Workbook Saved!", open: true } });
	}
};