import * as localStorageMethods from './_localStorageMethods';

function isEmptyObject(obj) {
    for(var prop in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
      }
    }
    return true;
  }
function modifyBaseLayer(state, payload){
	let newState;
	if (isEmptyObject(payload)){
		newState = state;
	} else {
		newState = payload;
	};
	console.log(newState);
	return newState;
}
const LAYER_NAME = 'baseMapLayer';

export default function(state = [], {type, payload} ) {
	let baseMapLayer = [];
	if (localStorageMethods.itemExists(LAYER_NAME)) {
		state = localStorageMethods.get(LAYER_NAME);
	}
	console.log(type, payload)
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



