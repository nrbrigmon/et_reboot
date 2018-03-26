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
	// console.log(newState);
	return newState;
}
export default function(state = null, {type, payload} ) {
	let baseMapLayer = null;
    if (localStorage.getItem('baseMapLayer')){
        state = JSON.parse(localStorage.getItem('baseMapLayer'));
    }
	switch (type) {
		case 'GET_TRI_GRID':
			baseMapLayer = modifyBaseLayer(state, payload);
			localStorage.setItem('baseMapLayer',JSON.stringify(baseMapLayer));
			return baseMapLayer;
		case 'GET_PAINTED_GRID':
			baseMapLayer = modifyBaseLayer(state, payload);
			localStorage.setItem('baseMapLayer',JSON.stringify(baseMapLayer));
			return baseMapLayer;
		case 'RESET_BASE_LAYER':
			baseMapLayer = null;
			return baseMapLayer;
		default:
			return state;
	}
} 


