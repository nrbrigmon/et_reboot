import AcresPerDevType from "../utils/_AcresPerDevType";
import * as mm from "../utils/_MapMath";
import * as helper from "../utils/_helperMethods";
import getSchema from "./initialStates";

function updateMetrics(state, {baseMapLayer, devWorkbook}){
    let { workbook_library } = devWorkbook;
	let acresPerDevType = AcresPerDevType(baseMapLayer);
    let devTypes = helper.getDevTypes(acresPerDevType);
    let developedAcres = helper.getDevAcres(acresPerDevType);
    let colorArray = helper.getColorArray(acresPerDevType);
    let populationMetric = mm.getPopulation(acresPerDevType, 
                        workbook_library, 
                        devWorkbook);
    let housingMetric = mm.getHousingUnits(acresPerDevType, 
                        workbook_library, 
                        devWorkbook);
    let jobsMetric = mm.getJobCounts(acresPerDevType, 
                        workbook_library, 
                        devWorkbook);

    return {
		...state
        ,developedAcreage: developedAcres
        ,population: populationMetric
        ,housingByType: housingMetric
        ,jobTotals: jobsMetric
        ,colorArray: colorArray
        ,devTypes: devTypes
    }   
}
 
export default function (state = getSchema["metricData"] || null, { type, payload } ) {
    switch (type) {
        case 'UPDATE_METRICS':
            let newState = updateMetrics(state, payload)
			// console.log("metrics reduced...")
            return newState;
        default:
            return state;
    }
}