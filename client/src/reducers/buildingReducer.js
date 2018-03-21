import * as _ from 'lodash';

function updateBuildingArray(state, bldg){
    //get index to check if building already exists in library
	let currentIds = _.map(state, 'uniqueId'); //create array of existing IDs
	// console.log(currentIds);
    let updateLocation = currentIds.indexOf(bldg['uniqueId']);
	//if already exists in array..
	let modifiedArray = state;
	// console.log(modifiedArray)
	modifiedArray[updateLocation] = bldg
	// console.log(modifiedArray);
	return modifiedArray;

}

export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_BUILDINGS':
			return payload || false;
		case 'UPDATE_AVAILABLE_BLDGS':
			return updateBuildingArray(state, payload)
		case 'NEW_AVAIL_BUILDING':
			// console.log('time to add a new available blding');
			return [...state].concat(payload)
		default:
			return state;
	}
} 
