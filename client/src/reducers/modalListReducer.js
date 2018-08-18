export default function(state = [], action ) {
	switch (action.type) {
        case 'RADIO_TOGGLE_BUILDING':
            let newState = state;
            if (newState.length === 0){
                newState.push(action.id);
            } else {
                newState[0] = action.id
            }
            // console.log(newState);
            return newState;
        case 'TOGGLE_BUILDING':
            let currentIndex = [...state].indexOf(action.id);
            let newChecked = [...state];
        
            if (currentIndex === -1) {
                newChecked.push(action.id);
            } else {
                newChecked.splice(currentIndex, 1);
            }
            return newChecked;
        case 'RESET_LIST':
            return [];
		default:
			return state;
	}
} 

