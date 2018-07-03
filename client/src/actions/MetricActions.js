export const updateMetrics = (baseMapLayer, myLibrary, devWorkbook) => {
	// console.log("metrics receivd...")
	const action = {
		type: 'UPDATE_METRICS',
		payload: {
			baseMapLayer, myLibrary, devWorkbook
		}
	}
	return action;
}