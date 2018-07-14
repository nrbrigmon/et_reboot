import AcresPerDevType from "../utils/_AcresPerDevType";
import * as mm from "../utils/_MapMath";
import * as helper from "../utils/_helperMethods";

let defaultState = {
    developedAcreage: []
    ,landUse: []
    ,population: []
    ,housingByType: []
    ,employmentByType: []
    ,jobTotals: []
    ,jobsPerAcre: []
    ,peoplePerAcre: []
    ,householdTotals: []
    ,householdSizeAvg: []
    ,colorArray: []
    ,devTypes: []
}

function updateMetrics({baseMapLayer, devWorkbook}){
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
        developedAcreage: developedAcres
        ,landUse: []
        ,population: populationMetric
        ,housingByType: housingMetric
        ,employmentByType: []
        ,jobTotals: jobsMetric
        ,jobsPerAcre: []
        ,peoplePerAcre: []
        ,schoolChildren: []
        ,householdTotals: []
        ,householdSizeAvg: []
        ,colorArray: colorArray
        ,devTypes: devTypes
    }   
}

export default function (state = defaultState, { type, payload } ) {
    switch (type) {
        case 'UPDATE_METRICS':
            let newState = updateMetrics(payload)
	console.log("metrics reduced...")

            return newState;
        default:
            return state;
    }
}