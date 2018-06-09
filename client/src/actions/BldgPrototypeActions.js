import axios from 'axios';
import sampleFields from '../components/create/buildings/examples/sampleBuildingInput';

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
