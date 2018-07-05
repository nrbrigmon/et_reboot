export default function(state = [], {type, payload} ) {
	switch (type) {
		case 'FETCH_DEV_WORKBOOKS':
			// console.log(payload);
			return payload;
		case 'UPDATE_DEV_WORKBOOK':
			return payload;
		case 'POST_DEV_WORKBOOK':
			return payload;
		default:
			return state;
	}
} 



