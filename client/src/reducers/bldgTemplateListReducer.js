export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_BLDG_TEMPLATES':
			return payload || false;
		default:
			return state;
	}
} 
