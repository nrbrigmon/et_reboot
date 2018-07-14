export const updateMetrics = (baseMapLayer, devWorkbook) => {
	// console.log("metrics receivd...")
	const action = {
		type: 'UPDATE_METRICS',
		payload: {
			baseMapLayer, devWorkbook
		}
	}
	return action;
}