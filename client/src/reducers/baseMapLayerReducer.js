function modifyBaseLayer(state, payload){
	let newState = state;
	if (newState.length === 0){
		newState.push(payload);
	} else {
		newState.pop();
		newState.push(payload);
	}
	// console.log(newState);
	return newState;
}
export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'GET_T_GRID':
			return modifyBaseLayer(state, payload);
		default:
			return state;
	}
} 



