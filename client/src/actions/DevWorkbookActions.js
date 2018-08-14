import axios from 'axios';

/* DEVELOPMENT TYPE ACTIONS */
export const addNewDevTypeRow = (library_bldgs) => {
	const action = {
		type: 'ADD_DEV_TYPE_ROW',
		library_bldgs
	}
	return action;
};
export const removeDevTypeRow = (library_bldgs) => {
	const action = {
		type: 'REMOVE_DEV_TYPE_ROW',
		library_bldgs
	}
	return action;
};
// export const initalizeWorkbook = () => {
// 	const action = {
// 		type: 'INITIALIZE_WORKBOOK'
// 	}
// 	return action;
// }
export const updateDevTypeRow = (value, rowId, cellId) => {
	const action = {
		type: 'UPDATE_DEV_TYPE_ROW',
		value,
		rowId,
		cellId
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

export const updateDevTypeAttr = (value, rowId, attrId) => {
	const action = {
		type: 'UPDATE_DEV_TYPE_ATTR',
		value,
		rowId,
		attrId
	}
	return action;
}

export const updateWorkbookProperty = (key, value) => {
	let action = {
		type: "UPDATE_WORKBOOK_ATTRIBUTE",
		key,
		value
	}
	return action;
}
export const getExistingWorkbook = ( id) => async dispatch => {
	const res = await axios.get('/api/dev_workbooks/'+id);
	// console.log(res);
	dispatch({ type: 'FETCH_EXISTING_WORKBOOK', payload: res["data"] });
};

export const loadSavedWorkbook = (workbook) => {
	let action = {
		type: "LOAD_WORKBOOK",
		workbook
	}
	// console.log(action);
	return action;
}
export const saveWorkbook = (workbook) => async dispatch => {
	let { workbook_id, workbook_isNew } = workbook;
	if (workbook_isNew === false){
		const res = await axios.put('/api/dev_workbooks/'+workbook_id+'', workbook)
		// console.log(res);+
		dispatch({ type: 'SAVED_WORKBOOK', payload: res.data });

	} else {
		const res = await axios.post('/api/dev_workbooks', workbook)
		// console.log(res);
		dispatch({ type: 'SAVED_WORKBOOK', payload: res.data });
	}
};

export const fetchAllDevWorkbooks = () => async dispatch => {
	const res = await axios.get('/api/dev_workbooks');
	// console.log(res);
	dispatch({ type: 'FETCH_DEV_WORKBOOKS', payload: res.data });
};

export const initializeNewWorkbook = () => {
	let action = {
		type: "INITIALIZE_NEW_WORKBOOK"
	}
	// console.log(action);
	return action;
}

