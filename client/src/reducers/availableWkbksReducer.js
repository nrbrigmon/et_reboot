
// function modifyBaseLayer(state, payload){
// 	let newState;
// 	if (helper.isEmptyObject(payload)){
// 		newState = state;
// 	} else {
// 		newState = payload;
// 	};
// 	return newState;
// }
// const LAYER_NAME = 'availableWkbks';
function addnewWorkbook(state, wkbk){
	let newArray = [...state];
	newArray.push(wkbk);
	return newArray;
}
export default function(state = [], {type, payload} ) {
	// console.log(state)
	switch (type) {
		case 'FETCH_DEV_WORKBOOKS':
			// console.log(payload);
			return payload;
		case 'UPDATE_DEV_WORKBOOK':
			return payload;
		case 'SAVED_WORKBOOK':
			let new_payload = addnewWorkbook(state, payload);
			return new_payload;
		default:
			return state;
	}
} 



