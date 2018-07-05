export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_BUILDING_LIBRARIES':
			// console.log(payload);
			return payload;
		case 'UPDATE_BUILDING_LIBRARY':
			return payload;
		case 'POST_BUILDING_LIBRARY':
			return payload;
		default:
			return state;
	}
} 



