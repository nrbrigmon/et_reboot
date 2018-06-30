import * as localStorageMethods from '../utils/_localStorageMethods';
import * as helper from '../utils/_helperMethods';

function modifyBaseLayer(state, payload){
	let newState;
	if (helper.isEmptyObject(payload)){
		newState = state;
	} else {
		newState = payload;
	};
	return newState;
}
const LAYER_NAME = 'baseMapLayer';

export default function(state = [], {type, payload} ) {
	let baseMapLayer = [];
	if (localStorageMethods.itemExists(LAYER_NAME)) {
		state = localStorageMethods.get(LAYER_NAME);
	}
	switch (type) {
		case 'SET_BASE_LAYER':
			baseMapLayer = modifyBaseLayer(state, payload);
			localStorageMethods.set(LAYER_NAME, baseMapLayer);
			return baseMapLayer;
		case 'GET_PAINTED_GRID':
			baseMapLayer = modifyBaseLayer(state, payload);
			localStorageMethods.set(LAYER_NAME, baseMapLayer);
			return baseMapLayer;
		case 'RESET_BASE_LAYER':
			baseMapLayer = []
			localStorageMethods.set(LAYER_NAME, baseMapLayer);
			return baseMapLayer;
		default:
			return state;
	}
} 



