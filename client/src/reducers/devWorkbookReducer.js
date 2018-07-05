import * as shortid from 'shortid';
import * as _ from 'lodash';

////
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
	let newState = state;
	newState["workbook_devtypes"] = newDevMixer;
    return newState;
}
function editDevelopmentTypeAttr(state, {value, rowId, attrId} ) {
	let devtype_state = state["workbook_devtypes"];
	// console.log( state, value, rowId, attrId )
    const newDevMixer = updateItemInArray(devtype_state, "uniqueId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		// console.log(attrId, state);
		return { ...row, 
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
	let new_devtype_state = devtype_state.concat(devTypeRow(action.selected_buildings));
	
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
//my initial structure for the devType table
const newEmptyDevTypeRow = (selected_buildings, devTypeArray) => {
	let tableCells = [];
	//return one tableCell for every cellNum
	// console.log(selected_buildings)
	function newCell(id) {
		return {
			bldgId: id,
			percVal: 0
		}
	}
	for (let i = 0; i < selected_buildings.length; i++) {
		tableCells.push( newCell(selected_buildings[i]["uniqueId"]) );
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
const devTypeRow = (selected_buildings, devTypeArray) => {
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
		return newEmptyDevTypeRow(selected_buildings, devTypeArray);
	}
};


function initializeWorkbook(state, action){
	//if there are no existing devtypes, we start with a blank one
	// console.log(state);
	let devTypeArray = state["workbook_devtypes"].filter((devTypeRow) => {
			return devTypeRow.devTypeName.length > 1		
	}); //create array of devTypes
	// console.log(devTypeArray);
	
	let devTypeCount = (devTypeArray.length === 0 ? 1 : devTypeArray.length);
	
	let newState = state;
	let newArray = [];
	for (let i = 0; i < devTypeCount; i++){
		newArray.push(devTypeRow(action.selected_buildings, devTypeArray[i]));
	}
	newState["workbook_devtypes"] = newArray;
	return newState;
}
function updateFirstLevelAttribute(state, key, value){
    return {
        ...state,
        [key]: value
    }
}
let starterDevTypeWorkbook = {
	workbook_id: shortid.generate(),
	workbook_isNew: true, 
    workbook_name: '',
    workbook_devtypes: []
}

export default function(state = starterDevTypeWorkbook, action) {
	//when the devtype reducer page loads, there should be one row only...
	let myDevelopmentWorkbook = null;
    if (localStorage.getItem('myDevelopmentWorkbook')){
        state = JSON.parse(localStorage.getItem('myDevelopmentWorkbook'));
    }
//    console.log(state);
	switch (action.type) {
		case 'INITIALIZE_WORKBOOK':
			myDevelopmentWorkbook = initializeWorkbook(state, action)
			localStorage.setItem('myDevelopmentWorkbook', JSON.stringify(myDevelopmentWorkbook));
			return myDevelopmentWorkbook;
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
			// console.log(action);
			myDevelopmentWorkbook = action.workbook;
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
		default:
			return state;
	}
} 
