export default function(state = false, { type, payload } ) {
	switch (type) {
        case 'SET_DRAW_TYPE':
            return payload;
        case 'END_DRAWING':
            return false;
        default:
            return state;
    }
}