export default function(state = null, action) {
	// console.log(action)
	let buildingPrototypeEdit = null;
    if (localStorage.getItem('buildingPrototypeEdit')){
        state = JSON.parse(localStorage.getItem('buildingPrototypeEdit'));
    }
	switch (action.type) {
		case 'FETCH_BLDG_PROTOTYPE':
			return action.payload || false;
		case 'UPDATE_BLDG_PROTOTYPE':
			buildingPrototypeEdit = action.payload;
			localStorage.setItem('buildingPrototypeEdit',JSON.stringify(buildingPrototypeEdit));
			return buildingPrototypeEdit;
		case 'UPDATE_BLDG_PROTOTYPE_FIELD':
			//tbd
			// buildingPrototypeEdit = action.payload;
			// localStorage.setItem('buildingPrototypeEdit',JSON.stringify(buildingPrototypeEdit));
			return buildingPrototypeEdit;
		case 'RESET_BLDG_PROTOTYPE':
			buildingPrototypeEdit = null;
			localStorage.removeItem('buildingPrototypeEdit');
			return buildingPrototypeEdit;
		default:
			return state;
	}
} 
