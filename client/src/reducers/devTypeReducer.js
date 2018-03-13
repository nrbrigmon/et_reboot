import * as shortid from 'shortid';

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
    const newDevMixer = updateItemInArray(state, "uniqueId", rowId, row => {
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
    return newDevMixer;
}
function editDevelopmentTypeAttr(state, {value, rowId, attrId} ) {
    const newDevMixer = updateItemInArray(state, "uniqueId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		return { ...row, 
				[attrId]: value		
			}
	});
	// debugger;
    return newDevMixer;
}

function editDevelopmentTypeName(state, {value, rowId} ) {
    const newDevMixer = updateItemInArray(state, "uniqueId", rowId, row => {
		//after we have the right row, use the callback to find the right cell
		return { ...row, 
				devTypeName: value
		}
	});
	// debugger;
    return newDevMixer;
}

// Case reducer
function addDevelopmentType(state, action) {
    const newState = state.concat(devTypeRow(action.selectedBldgs));
    return newState;
}
//my initial structure for the devType table
const devTypeRow = (selectedBldgs) => {
	let tableCells = [];
	//return one tableCell for every cellNum
	// console.log(selectedBldgs)
	function newCell(id) {
		return {
			bldgId: id,
			percVal: 0
		}
	}
	for (let i = 0; i < selectedBldgs.length; i++) {
		tableCells.push( newCell(selectedBldgs[i]["uniqueId"]) );
	}
	return {
		cellData: tableCells,
		uniqueId: shortid.generate(),
		devTypeName: ''
	};
};

export default function(state = [], action) {
	//when the devtype reducer page loads, there should be one row only...
	switch (action.type) {
		case 'ADD_DEV_TYPE_ROW': 
			return addDevelopmentType(state, action);
		case 'REMOVE_DEV_TYPE_ROW':
			//need to implement/write
			return action.payload || false;
		case 'UPDATE_DEV_TYPE_ROW': 
			return editDevelopmentTypeMixer(state, action);
		case 'UPDATE_DEV_TYPE_NAME':
			return editDevelopmentTypeName(state, action);
		case 'UPDATE_DEV_TYPE_ATTR':
			return editDevelopmentTypeAttr(state, action);
		case 'FETCH_DEV_TYPE_INIT':
			// state = [];
			for (let i = 0; i < action.rows; i++){
				state.push( devTypeRow( action.selectedBldgs) );
			}
			return state;
		default:
			return state;
	}
} 
