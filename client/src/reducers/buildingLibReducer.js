export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_BUILDINGS':
			return payload;
		default:
			return state;
	}
} 

