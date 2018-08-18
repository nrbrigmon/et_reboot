import * as shortid from 'shortid';
import * as _ from 'lodash';
import * as myHelp from './devWorkbookReducerHelp';
import getSchema from "./initialStates";

function updateCellValue(oldObject, newValues) {
    // Encapsulate the idea of passing a new object as the first parameter
	// to Object.assign to ensure we correctly copy data instead of mutating
	// console.log(oldObject, newValues);
	// debugger;
    return Object.assign({}, oldObject, newValues);
}

function updateItemInArray(array, key, itemId, updateItemCallback) {
	const updatedItems = array.map(item => {
		// console.log(item);
        if(item[key] !== itemId) {
            // Since we only want to update one item, preserve all others as they are now
            return item;
        }
        
        // Use the provided callback to create an updated item
        const updatedItem = updateItemCallback(item);
        return updatedItem;
    });
    return updatedItems;
}

function addBuildingToWorkbook(state, {uniqueId}){
	let devtype_state = state["workbook_devtypes"];
	// console.log(devtype_state)

	let newDevTypeState = _.map(devtype_state, eachDevType => {
		return {
			...eachDevType,
			cellData: eachDevType["cellData"].concat( newCell(uniqueId) )
		}
	})
	// console.log(newDevTypeState)
    return newDevTypeState;
}
function addBuildingArrayToWorkbook(state, newLibrary){
	let { library_bldgs } = newLibrary;
	let devTypeArray = state.workbook_devtypes
	let devTypeCount = (devTypeArray.length === 0 ? 1 : devTypeArray.length);
	
	let newDevTypeState = [];
	for (let i = 0; i < devTypeCount; i++){
		newDevTypeState.push(newEmptyDevTypeRow(library_bldgs));
	}
	return newDevTypeState;
}
function removeBuildingFromWorkbook(state, uniqueId){
	let devtype_state = state["workbook_devtypes"];
	let newDevTypeState = _.map(devtype_state, eachDevType => {
		// console.log(eachDevType["cellData"]);
		return {
			...eachDevType,
			cellData: _.filter(eachDevType["cellData"], bldgType => {
				return bldgType["bldgId"] !== uniqueId
			})
		}
	})
	return newDevTypeState;
}

// Case reducer
function editDevelopmentTypeMixer(state, {value, rowId, cellId} ) {
	let devtype_state = state["workbook_devtypes"];
    const newDevMixer = updateItemInArray(devtype_state, "uniqueId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		return { ...row, 
				cellData: updateItemInArray(row["cellData"], "bldgId", cellId, cell => {
					// console.log(cell);
					// debugger;
					return updateCellValue(cell, {percVal : value});
				})
		}
	});
	// debugger;
	let newState = _.cloneDeep(state);
	newState["workbook_devtypes"] = newDevMixer;
    return newState;
}
function editDevelopmentTypeAttr(state, {value, rowId, attrId} ) {
	let devtype_state = state["workbook_devtypes"];
	// console.log( state, value, rowId, attrId )
    const newDevMixer = updateItemInArray(devtype_state, "uniqueId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		// console.log(attrId, state);
		return { 
			...row, 
				[attrId]: value		
			}
	});
	// debugger;
	let newState = state;
	newState["workbook_devtypes"] = newDevMixer;
    return newState;
}

// Case reducer
function addDevelopmentType(state, action) {
	let devtype_state = state["workbook_devtypes"];
	let new_devtype_state = devtype_state.concat(devTypeRow(action.library_bldgs));
	
	let newState = state;
	newState["workbook_devtypes"] = new_devtype_state;
    return newState;
}

function removeDevTypeRow(state, action) {
	let currentDevTypes = [...state.workbook_devtypes]; //create array of existing IDs
    let currentDevIds = _.map(state.workbook_devtypes, 'uniqueId'); //create array of existing IDs
	
	// console.log("id received ",action.devTypeId)
	// console.log("ids current: ", currentDevIds);
	let deleteID = currentDevIds.indexOf(action.devTypeId);
	// console.log("position being delteed ",deleteID)
	currentDevTypes.splice(deleteID, 1);
	// console.log("new list being returned ", currentDevIds);
    return {
        ...state,
        workbook_devtypes: currentDevTypes
    }
}
//table cell function
function newCell(id) {
	return {
		bldgId: id,
		percVal: 0
	}
}
//my initial structure for the devType table
const newEmptyDevTypeRow = (library_bldgs) => {
	// console.log(library_bldgs);
	let tableCells = [];
	for (let i = 0; i < library_bldgs.length; i++) {
		tableCells.push( newCell(library_bldgs[i]["uniqueId"]) );
	}
	return {
		cellData: tableCells,
		uniqueId: shortid.generate(),
		devTypeName: '',
		blockWidth1: 0,
		blockWidth2: 0,
		blockAreaBuildable: 0,
		blockAreaTotal: 0,
		blockAreaAcres: 0,
		drivingLanes: 0,
		drivingLaneWidth: 0,
		streetParkingWidth: 0,
		bikeLaneWidth: 0,
		sidewalkWidth: 0,
		landscapingWidth: 0,
		civicPerc: 0,
		openSpacePerc: 0,
		publicRoadsPerc: 0
	}
}
const devTypeRow = (library_bldgs, devTypeArray) => {
	if (devTypeArray){
		return {
			cellData: devTypeArray["cellData"],
			uniqueId: devTypeArray["uniqueId"],
			devTypeName: devTypeArray["devTypeName"],
			blockWidth1: devTypeArray["blockWidth1"],
			blockWidth2: devTypeArray["blockWidth2"],
			blockAreaBuildable: devTypeArray["blockAreaBuildable"],
			blockAreaTotal: devTypeArray["blockAreaTotal"],
			blockAreaAcres: devTypeArray["blockAreaAcres"],
			drivingLanes: devTypeArray["drivingLanes"],
			drivingLaneWidth: devTypeArray["drivingLaneWidth"],
			streetParkingWidth: devTypeArray["streetParkingWidth"],
			bikeLaneWidth: devTypeArray["bikeLaneWidth"],
			sidewalkWidth: devTypeArray["sidewalkWidth"],
			landscapingWidth: devTypeArray["landscapingWidth"],
			civicPerc: devTypeArray["civicPerc"],
			openSpacePerc: devTypeArray["openSpacePerc"],
			publicRoadsPerc: devTypeArray["publicRoadsPerc"]
		};
	} else {
		return newEmptyDevTypeRow(library_bldgs);
	}
};

function updateFirstLevelAttribute(state, key, value){
    return {
        ...state,
        [key]: value
    }
}

export default function(state = getSchema["devWorkbook"], action) {
	//when the devtype reducer page loads, there should be one row only...
	let libraryState = null;
	let newLibrary = null;
	let newSelectedBuildings = null;
	let newDevTypes = null;
	let myDevelopmentWorkbook = null;
    if (localStorage.getItem('myDevelopmentWorkbook')){
        state = JSON.parse(localStorage.getItem('myDevelopmentWorkbook'));
    }
//    console.log(state);
	switch (action.type) {
		case 'ADD_DEV_TYPE_ROW': 
			myDevelopmentWorkbook = addDevelopmentType(state, action);
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'REMOVE_DEV_TYPE_ROW':
			myDevelopmentWorkbook = removeDevTypeRow(state, action);
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'UPDATE_DEV_TYPE_ROW': 
			myDevelopmentWorkbook = editDevelopmentTypeMixer(state, action)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'LOAD_WORKBOOK':
			myDevelopmentWorkbook = action.payload;
			myDevelopmentWorkbook = updateFirstLevelAttribute(myDevelopmentWorkbook, "workbook_isNew", false)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'SAVED_WORKBOOK':
			myDevelopmentWorkbook = updateFirstLevelAttribute(state, "workbook_isNew", false)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'UPDATE_WORKBOOK_ATTRIBUTE':
			myDevelopmentWorkbook = updateFirstLevelAttribute(state, action.key, action.value)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'UPDATE_DEV_TYPE_ATTR':
			myDevelopmentWorkbook = editDevelopmentTypeAttr(state, action)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'SAVED_BUILDING_LIBRARY':
			/** 						**/
			/** BUILDING UPDATES BELOW 	**/
			/** 						**/
			// libraryState = state.workbook_library
			
			// newLibrary = myHelp.savedBuildingLibrary(libraryState)
			// console.log(newSelectedBuildings)
			// break
			// myDevelopmentWorkbook = {
			// 	...state,
			// 	workbook_library: newLibrary
			// };
			// localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return state;
		case 'LOAD_BUILDING_LIBRARY':
		/** 						**/
		/** BUILDING UPDATES BELOW 	**/
		/** 						**/
			libraryState = state.workbook_library
			newLibrary = myHelp.savedBuildingLibrary(libraryState)
			myDevelopmentWorkbook = {
				...state,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'UPDATE_LIBRARY_NAME':
			libraryState = state.workbook_library
			newLibrary = myHelp.updateLibraryAttribute(libraryState, action.library_name, 'library_name');
			myDevelopmentWorkbook = {
				...state,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			// console.log(newLibrary)
           return myDevelopmentWorkbook
		case 'UPDATE_BUILDING':
			libraryState = state.workbook_library.library_bldgs
            newSelectedBuildings = myHelp.updateBuilding(libraryState, action.editing, action.building);			
			myDevelopmentWorkbook = {
				...state,
				workbook_library: {
					...state["workbook_library"],
					library_bldgs: newSelectedBuildings
				}
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'LOAD_BUILDING_ARRAY':
            let emptiedState = {
                ...state,
                library_bldgs: []
            }
            newLibrary = myHelp.addBuildingArray(emptiedState, action);
			myDevelopmentWorkbook = {
				...state,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
			
		case 'ADD_BUILDING_ARRAY':
			libraryState = state.workbook_library
			newLibrary = myHelp.addBuildingArray(libraryState, action);
			newDevTypes = addBuildingArrayToWorkbook(state, newLibrary)			
			myDevelopmentWorkbook = {
				...state,
				workbook_devtypes: newDevTypes,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'ADD_BUILDING':
			//if a building already exists in array... it should not be added!!!!
			libraryState = state.workbook_library
			newDevTypes = addBuildingToWorkbook(state, action.bldg)
            newLibrary = myHelp.addBuilding(libraryState, action);
			myDevelopmentWorkbook = {
				...state,
				workbook_devtypes: newDevTypes,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'REMOVE_BUILDING':
			libraryState = state.workbook_library
			newDevTypes = removeBuildingFromWorkbook(state, action.bldgId)
			newLibrary = myHelp.removeBuilding(libraryState, action);
			myDevelopmentWorkbook = {
				...state,
				workbook_devtypes: newDevTypes,
				workbook_library: newLibrary
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'RESET_LIBRARY':
			myDevelopmentWorkbook = {
				...state,
				workbook_devtypes: myHelp.resetDevTypeCellValues(state["workbook_devtypes"]),
				workbook_library: {
					...state["workbook_library"],
					library_bldgs: []
				}
			};
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		case 'INITIALIZE_NEW_WORKBOOK':
			localStorage.removeItem('myDevelopmentWorkbook');
			myDevelopmentWorkbook = getSchema["devWorkbook"]
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
		default:
			return state;
	}
} 
