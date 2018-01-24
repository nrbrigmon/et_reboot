export default function(state = [], action ) {
	switch (action.type) {
		case 'ADD_BUILDING':
			return [...state].concat(action.bldgArray);
		case 'REMOVE_BUILDING':
			let currentIndex = [...state].indexOf(action.item);
			let newLib = [...state];
			newLib.splice(currentIndex, 1);
			return newLib;
		case 'RESET_LIBRARY':
			return [];
		default:
			return state;
	}
} 

