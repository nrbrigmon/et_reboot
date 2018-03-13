import * as shortid from 'shortid';
import * as _ from 'lodash';

function addBuilding(state, action){
    //get index to check if building already exists in library
    let existingArray = [...state.selected_buildings];
    let buildingIdIndex = [...state.selected_buildings].indexOf(action.bldgId);
    if (buildingIdIndex < 0){
        //doesn't exist in array
        existingArray.concat(action.bldgId)
    }
    return {
        ...state,
        selected_buildings: existingArray
    };
}
function removeBuilding(state, action){
    let buildingIdIndex = [...state.selected_buildings].indexOf(action.bldg);
    let existingArray = [...state.selected_buildings];
    existingArray.splice(buildingIdIndex, 1);
    return {
        ...state,
        selected_buildings: existingArray
    } 
}

function addBuildingArray(state, action){
    //check if building doesn't already exist in existing state
    let currentIds = _.map(state.selected_buildings, 'uniqueId'); //create array of existing IDs
    let IDsToKeep = action["bldgArray"].filter( id =>  {
        // console.log(id); //id comes from modallistReducer
        return currentIds.indexOf(id) === -1; //return items that dont exist
    })
    // console.log('ids to keep', IDsToKeep);

    //get values from available building library
    //
    // let currentBuildings = [...state.selected_buildings];
    let newArray = action["availableBldgs"].filter( bldg => {
        return IDsToKeep.indexOf(bldg.uniqueId) >= 0; //return items that exist
    });
    
    return {
        ...state,
        selected_buildings: [...state.selected_buildings].concat(newArray)
    } 
}

function updateLibraryAttribute(state, value, attribute){
    return {
        ...state,
        [attribute]: value
    }
}
function updateBuilding(state, editing, buildingUpdate){
    // is this an existing building? if so...
    let existingArray = [...state.selected_buildings];
    let buildingId = buildingUpdate.uniqueId;
    if (editing){
        existingArray = existingArray.map( bldg => {
                if (bldg.uniqueId === buildingId){
                    return buildingUpdate;
                } else {
                    return bldg;
                }
            }
        )
    } else {
        existingArray.concat(buildingUpdate);
    }
    
    return {
        ...state,
        selected_buildings: existingArray
    } 
}

let starterLibrary = {
    library_id: shortid.generate(),
    library_name: '',
    selected_buildings: []
}

export default function(state = starterLibrary, action ) {
    // console.log(Cookies.getJSON());
    let newLibrary = null;
    if (localStorage.getItem('myLibrary')){
        state = JSON.parse(localStorage.getItem('myLibrary'));
    }
	switch (action.type) {
        case 'ADD_BUILDING':
            //if a building already exists in array... it should not be added!!!!
            newLibrary = addBuilding(state, action);
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));
            return newLibrary;
        case 'ADD_BUILDING_ARRAY':
            newLibrary = addBuildingArray(state, action);
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));            
            return newLibrary;
        case 'REMOVE_BUILDING':
            newLibrary = removeBuilding(state, action);
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));
            return newLibrary;
        case 'UPDATE_LIBRARY_NAME':
            newLibrary = updateLibraryAttribute(state, action.library_name, 'library_name');
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));        
            return newLibrary
        case 'UPDATE_LIBRARY_ID':
            newLibrary = updateLibraryAttribute(state, action.library_id, 'library_id');
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));        
            return newLibrary;
        case 'UPDATE_BUILDING':
            newLibrary = updateBuilding(state, action.editing, action.building);
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));        
            return newLibrary;
        case 'RESET_LIBRARY':
            newLibrary = {
                ...state,
                selected_buildings: []
            };
            localStorage.setItem('myLibrary', JSON.stringify(newLibrary));        
            //empty the library array
            return newLibrary
        default:
            return state;
    }
}