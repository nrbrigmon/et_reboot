import { getBldgOutputs } from '../components/create/buildings/_updateForDevType';

// let buildingPrototypeSchema = {
// 	uniqueId: '',
// 	physicalInfo: {},
// 	basicFinInfo: {},
// 	advFinInfo: {},
// 	forDevType: {}
// }

function editPrototypeOutputs(updateCopy) {
	let buildingCopy = {
		...updateCopy
	};
	buildingCopy["forDevType"] = getBldgOutputs(updateCopy)
    return buildingCopy;
}

function editPrototypeAttribute(state, {page, updateCopy} ) {
	let buildingCopy = {
		...state
	};
	let key = Object.keys(updateCopy)[0];
	let val = Object.values(updateCopy)[0];
	buildingCopy[page][key] = val;
    return buildingCopy;
}

export default function(state = null, action) {
	// console.log(action)
	let buildingPrototypeEdit = null;
    if (localStorage.getItem('buildingPrototypeEdit')){
        state = JSON.parse(localStorage.getItem('buildingPrototypeEdit'));
    }
	switch (action.type) {
		case 'SET_BLDG_PROTOTYPE':	
			//make update
			buildingPrototypeEdit = action.payload;
			//update building prototype
			buildingPrototypeEdit = editPrototypeOutputs(buildingPrototypeEdit);
			localStorage.setItem('buildingPrototypeEdit',JSON.stringify(buildingPrototypeEdit));
			return buildingPrototypeEdit;
		case 'UPDATE_BLDG_PROTOTYPE_FIELD':		
			//make update
			buildingPrototypeEdit = editPrototypeAttribute(state, action);
			//update building prototype
			// console.log('buildingPrototypeEdit ', buildingPrototypeEdit);
			buildingPrototypeEdit = editPrototypeOutputs(buildingPrototypeEdit);
			localStorage.setItem('buildingPrototypeEdit',JSON.stringify(buildingPrototypeEdit));
			return buildingPrototypeEdit;
		case 'RESET_BLDG_PROTOTYPE':
			buildingPrototypeEdit = null;
			localStorage.removeItem('buildingPrototypeEdit');
			return buildingPrototypeEdit;
		default:
			return state;
	}
} 
