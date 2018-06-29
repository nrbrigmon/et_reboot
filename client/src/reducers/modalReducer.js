export default function(state = false, {type, payload} ) {
	switch (type) {
		case 'OPEN_MODAL':
			return payload;
		case 'CLOSE_MODAL':
			return false;
		default:
			return state;
	}
} 
