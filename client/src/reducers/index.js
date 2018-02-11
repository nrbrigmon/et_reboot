import { combineReducers } from 'redux';
import * as _ from 'lodash';
import authReducer from './authReducer';
import buildingLibReducer from './buildingLibReducer';
import localLibReducer from './localLibReducer';
import modalListReducer from './modalListReducer';
import bldgPrototypeReducer from './bldgPrototypeReducer';

import * as shortid from 'shortid';

const sampleDev = (state = [], action) => {
	// console.log('sample')
	switch (action.type) {
		case 'SAMPLE_BUILDINGS':
			// console.log(action.payload);
			return action.payload || false;
		default:
			return state;
	}
} 


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
    const newDevMixer = updateItemInArray(state, "devTypeId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		return { ...row, 
				cellData: updateItemInArray(row["cellData"], "bldgId", cellId, cell => {
					// console.log(cell);
					// debugger;
					return updateCellValue(cell, {percVal : value});
				})
		}
	});
	// console.log(newDevMixer);
	// debugger;
    return newDevMixer;
}

function editDevelopemntTypeName(state, {value, rowId} ) {
    const newDevMixer = updateItemInArray(state, "devTypeId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		// console.log(row);
		return { ...row, 
				devTypeName: value
		}
	});
	// console.log(newDevMixer);
	// debugger;
    return newDevMixer;
}

// Case reducer
function addDevelopmentType(state, action) {
    const newState = state.concat(devTypeRow(action.myLib));
    return newState;
}
//my initial structure for the devType table
const devTypeRow = (myLib) => {
	let tableCells = [];
	//return one tableCell for every cellNum
	function newCell(id) {
		return {
			bldgId: id,
			percVal: 0
		}
	}
	for (let i = 0; i < myLib.length; i++) {
		tableCells.push( newCell(myLib[i]["uniqueId"]) );
	}
	return {
		cellData: tableCells,
		devTypeId: shortid.generate(),
		devTypeName: ''
	};
};

const DevTypeReducer = (state = [], action) => {
	//when the devtype reducer page loads, there should be one row only...
	switch (action.type) {
		case 'ADD_DEV_TYPE_ROW': 
			return addDevelopmentType( state, action);
		case 'REMOVE_DEV_TYPE_ROW':
			// console.log(action.payload);
			return action.payload || false;
		case 'UPDATE_DEV_TYPE_ROW': 
			return editDevelopmentTypeMixer(state, action);
		case 'UPDATE_DEV_TYPE_NAME':
			return editDevelopemntTypeName(state, action);
		case 'FETCH_DEV_TYPE_INIT':
			state = [];
			for (let i = 0; i < action.rows; i++){
				state.push( devTypeRow( action.myLib) );
			}
			// console.log('state fetched: ', state);
			return state;
		default:
			return state;
	}
} 

//// sample
function getDevTypeTotals ( table ) {
	// console.log('calc table: ',table)
	return _(_.flatMap(table, item => {
						return item["cellData"]
					}))
					.groupBy('bldgId')
					.map((objs, key) => ({
						'bldgId': key,
						'totals': _.sumBy(objs, 'percVal') 
					}))
					.value();
} 


const DevTypeTotalReducer = (state = [], action) => {
	// console.log('action called');
	switch (action.type) {
		case 'FETCH_DEV_TYPE_TOTAL':
			console.log('fettching total...')
			return getDevTypeTotals(action.devTypes)
	default:
		return state;
	}
}

export default combineReducers({
	auth: authReducer,
	bldgType: bldgPrototypeReducer,
	bldgLib: buildingLibReducer,
	myLib: localLibReducer,
	modList: modalListReducer,
	sample: sampleDev,
	devTypes: DevTypeReducer,
	devPercTotals: DevTypeTotalReducer
	// surveys: surveysReducer
	// form: reduxForm
});

