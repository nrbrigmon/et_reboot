function setNewDevType(state, action){
    return action.payload;
}
let activeDevType = {
    devTypeName: '',
    devTypeColor: ''
}
export default function(state = activeDevType, action ) {
	switch (action.type) {
        case 'SET_ACTIVE_DEV_TYPE':
            return setNewDevType(state, action);
        case 'REMOVE_ACTIVE_DEV_TYPE':
            return activeDevType;
        default:
            return state;
    }
}