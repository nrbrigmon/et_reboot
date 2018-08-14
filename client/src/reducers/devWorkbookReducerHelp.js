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
export const savedBuildingLibrary = (state) => {
    return {
        ...state,
        library_isNew: false
    }
}
