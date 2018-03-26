export default function(state = false, action ) {
	switch (action.type) {
        case 'SET_DRAW_TYPE':
            return action.payload;
        case 'END_DRAWING':
            return false;
        default:
            return state;
    }
}