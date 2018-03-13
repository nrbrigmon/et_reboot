export default function(state = false, action ) {
	switch (action.type) {
        case 'POST_BUILDING_TOAST':
            return true;
        case 'UPDATE_BUILDING_TOAST':
            return true;
        case 'CLOSE_TOAST':
            return false;
        default:
            return state;
    }
}