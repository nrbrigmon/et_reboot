export default function(state = [], action) {
	// console.log(action)
	switch (action.type) {
		case 'FETCH_BLDG_PROTOTYPE':
		// console.log('payload: ',action.payload);
			return action.payload || false;
		case 'EDIT_BUILDING_PROTOTYPE':
			return action.payload;
		default:
			return state;
	}
} 
