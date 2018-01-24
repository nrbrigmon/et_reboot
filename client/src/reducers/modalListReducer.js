export default function(state = [], action ) {
	switch (action.type) {
		case 'TOGGLE_BUILDING':
            let currentIndex = [...state].indexOf(action.item);
            let newChecked = [...state];
        
            if (currentIndex === -1) {
                newChecked.push(action.item);
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

