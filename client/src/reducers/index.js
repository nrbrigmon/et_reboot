import { combineReducers } from 'redux';
import * as shortid from 'shortid';
import authReducer from './authReducer';
import bldgPrototypeReducer from './bldgPrototypeReducer';
import buildingLibReducer from './buildingLibReducer';
import buildingReducer from './buildingReducer';
import devTypeReducer from './devTypeReducer';
import modalListReducer from './modalListReducer';
import modalReducer from './modalReducer';
import myLibraryReducer from './myLibraryReducer';
// import selectedBldgReducer from './selectedBldgReducer';
import toastReducer from './toastReducer';


const getRandomId = (state = [], action) => {
	// console.log('action called');
	switch (action.type) {
		case 'FETCH_RANDOM_ID':
			return shortid.generate();
	default:
		return state;
	}
}

export default combineReducers({
	auth: authReducer,							//user login confirmation
	availableBldgs: buildingReducer, 			//saved buildings in database
	availableLibs: buildingLibReducer,			//saved libraries in database
	randomId: getRandomId,						//randomId function
	// devPercTotals: DevTypeBottomLineReducer,
	modList: modalListReducer,					//the list inside the modal
	bldgType: bldgPrototypeReducer,				//the current building being edited
	devTypes: devTypeReducer,					//the current development type being edited
	myLibrary: myLibraryReducer,				//the name and properties of my building list
	// selectedBldgs: selectedBldgReducer,			//the array of building list being edited
	modal: modalReducer,						//open or close modal state
	toast: toastReducer							//open or close toast state
});