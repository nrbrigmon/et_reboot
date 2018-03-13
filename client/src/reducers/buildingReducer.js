export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_BUILDINGS':
			return payload || false;
		case 'NEW_AVAIL_BUILDING':
			console.log('time to add a new available blding');
			return [...state].concat(payload)
		default:
			return state;
	}
} 
