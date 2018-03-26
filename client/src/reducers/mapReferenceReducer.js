export default function(state = false, action ) {
	switch (action.type) {
        case 'SET_MAP_REF':
            return action.payload;
        case 'RELEASE_MAP_REF':
            return null;
        default:
            return state;
    }
}