
function setNewDevType(state, action){
    return action.payload;
}

export default function(state = {}, action ) {
	console.log(state);
	switch (action.type) {
        case 'SET_ACTIVE_DEV_TYPE':
            return setNewDevType(state, action);
        case 'REMOVE_ACTIVE_DEV_TYPE':
            return state;
        default:
            return state;
    }
}