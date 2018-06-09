
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
