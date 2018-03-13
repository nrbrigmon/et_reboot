// import Cookies from 'js-cookie';
import * as _ from 'lodash';

// function addBuildingArray(state, array, bldgs){
//     // console.log(array, bldgs);
//     //check if building doesn't already exist in existing state
    let currentIds = _.map(state, 'uniqueId'); //create array of existing IDs
    // console.log('current Ids: ', currentIds);
    let IDsToKeep = array.filter( id =>  {
        // console.log(id);
        return currentIds.indexOf(id) === -1; //return items that dont exist
    })
//     // console.log('ids to keep', IDsToKeep);

//     //get values from available building library
//     // let existingArray = [...state];
//     let newArray = bldgs.filter( bldg => {
//         return IDsToKeep.indexOf(bldg.uniqueId) >= 0; //return items that exist
//     });
    
//     // console.log('new building array ', newArray);
//     // console.log([...state]);
//     return [...state].concat(newArray);
// }

// function addBuilding(state, bldg){
//     //get index to check if building already exists in library
//     let existingArray = [...state];
//     let buildingIdIndex = existingArray.indexOf(bldg);
//     if (buildingIdIndex < 0){
//         //doesn't exist in array
//         existingArray.push(bldg);
//     }
//     return existingArray;
// }
// function removeBuilding(state, bldg){
//     let buildingIdIndex = [...state].indexOf(bldg);
//     let existingArray = [...state];
//     existingArray.splice(buildingIdIndex, 1);
//     return existingArray;
// }


export default function(state = [], action ) {
    let selectedBldgs = null;
    if (localStorage.getItem('selectedBldgs')){
        state = JSON.parse(localStorage.getItem('selectedBldgs'));
    }
	switch (action.type) {
        case 'ADD_BUILDING':
            selectedBldgs = addBuilding(state, action.bldg);
            localStorage.setItem('selectedBldgs',JSON.stringify(selectedBldgs));
            return selectedBldgs;
        case 'ADD_BUILDING_ARRAY':
            selectedBldgs = addBuildingArray(state, action.bldgArray, action.availableBldgs);
            localStorage.setItem('selectedBldgs',JSON.stringify(selectedBldgs));
            console.log( JSON.parse(localStorage.getItem('selectedBldgs')) );
            return selectedBldgs;
        case 'REMOVE_BUILDING':
            selectedBldgs = removeBuilding(state, action.bldg);
            localStorage.setItem('selectedBldgs',JSON.stringify(selectedBldgs));
            return selectedBldgs;
        case 'RESET_LIBRARY':
            selectedBldgs = [];
            localStorage.removeItem('selectedBldgs');
            return selectedBldgs;
        default:
            return state;
    }
}
