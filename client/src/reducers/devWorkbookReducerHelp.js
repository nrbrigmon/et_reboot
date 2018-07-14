import * as _ from 'lodash';
 
export const addBuilding = (state, action) =>{
    //get index to check if building already exists in library
    let currentIds = _.map(state.library_bldgs, 'uniqueId'); //create array of existing IDs
    let keepID = currentIds.indexOf(action.bldg['uniqueId']);
    //if already exists in array.. console.log(currentIds, keepID, state, action)
    if (keepID >= 0) {
        return {
            ...state
        }
    } else {
        return {
            ...state,
            library_bldgs: [...state.library_bldgs].concat(action.bldg)
        }
    }

}
export const removeBuilding = (state, action) => {

    let existingBldgArray = [...state.library_bldgs];
    let currentIds = _.map(state.library_bldgs, 'uniqueId'); //create array of existing IDs
    let deleteID = currentIds.indexOf(action.bldgId);

    existingBldgArray.splice(deleteID, 1);
    return {
        ...state,
        library_bldgs: existingBldgArray
    }
}

export const addBuildingArray = (state, action) => {
    //check if building doesn't already exist in existing state
    let currentIds = _.map(state.library_bldgs, 'uniqueId'); //create array of existing IDs
    let IDsToKeep = action["bldgArray"].filter(id => {
        // console.log(id); //id comes from modallistReducer
        return currentIds.indexOf(id) === -1; //return items that dont exist
    })
    // console.log('ids to keep', IDsToKeep); get values from available building
    // library
    //
    // let currentBuildings = [...state.library_bldgs];
    let newArray = action["availableBldgs"].filter(bldg => {
        return IDsToKeep.indexOf(bldg.uniqueId) >= 0; //return items that exist
    });
    return {
        ...state,
        library_bldgs: [...state.library_bldgs].concat(newArray)
    }
}


export const updateLibraryAttribute = (state, value, attribute) => {
    return {
        ...state,
        [attribute]: value
    }
}
export const updateBuilding = (state, editing, buildingUpdate) => {
    // is this an existing building? if so...
    let existingArray = [...state];
    let buildingId = buildingUpdate.uniqueId;
    if (editing) {
        existingArray = existingArray.map(bldg => {
            if (bldg.uniqueId === buildingId) {
                return buildingUpdate;
            } else {
                return bldg;
            }
        })
    } else {
        existingArray.concat(buildingUpdate);
    }

    return existingArray
}
export const savedBuildinglibrary = (state) => {
    return {
        ...state,
        library_isNew: false
    }
}


// function initializeWorkbook(state, action){
// 	//if there are no existing devtypes, we start with a blank one
// 	let { workbook_library } = action.myLibary;

// 	let devTypeArray = state["workbook_devtypes"].filter((devTypeRow) => {
// 			return devTypeRow.devTypeName.length > 1		
// 	}); //create array of devTypes
// 	// console.log(devTypeArray);
	
// 	let devTypeCount = (devTypeArray.length === 0 ? 1 : devTypeArray.length);
	
// 	let newState = _.cloneDeep(state);
// 	let newArray = [];
// 	for (let i = 0; i < devTypeCount; i++){
// 		newArray.push(devTypeRow(workbook_library.library_bldgs, devTypeArray[i]));
// 	}
// 	newState["workbook_devtypes"] = newArray;
// 	return newState;
// }


// function updateAllDevTypeCells(state, action){
// 	let { myLibary, devWorkbook } = action;
// 	// console.log(action);
// 	let idArray = _.map(myLibary.workbook_library, "uniqueId"); 
// 	let { workbook_devtypes } = devWorkbook;
// 	//1. loop through workbook_devtypes and update only the cellData
// 	const newDevMixer = _.map(workbook_devtypes, (row, idx) => {
// 		// console.log(row);
// 		return { ...row, 
// 			cellData: correctDevCells(row["cellData"], idArray)
// 		}
// 	});
// 	// 2. for each table Cell, if it has data, skip
// 	//3. if there are too many cells, truncate
// 	//4. if there are not enough, add the correct buildingID
// 	//5. and cell by using this function newCell(id)
// 	//copy state correctly and return new object
// 	let newState = _.cloneDeep(state);
// 	newState["workbook_devtypes"] = newDevMixer;
// 	return newState
// }
////

// function correctDevCells(cellArray, bldgIdArray){
// 	/// we need to map through the selected bldg ids
// 	let newCells = _.map(bldgIdArray, (i, idx) => {
// 		//if we one of the cells in our workbook is blank
// 		if (cellArray[idx] === undefined){
// 			//we update it with something
// 			return newCell(i)
// 		} else {
// 			//otherwise we return the existing cell
// 			return cellArray[idx]
// 		}
// 		//this method will also truncate if we have too many cells
// 	});
// 	// console.log(newCells);
// 	return newCells;
// }