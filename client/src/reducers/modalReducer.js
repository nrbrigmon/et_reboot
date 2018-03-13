export default function(state = false, {type, selection} ) {
	switch (type) {
		case 'OPEN_MODAL':
			return selection;
		case 'CLOSE_MODAL':
			return false;
		default:
			return state;
	}
} 
