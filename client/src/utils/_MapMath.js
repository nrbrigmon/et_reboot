//local functions
function getSumProduct(array /*other arrays*/) {
    if (!arguments.length) return 0
    
	if (!Array.isArray(array)) return NaN
	var dim = arguments.length,
			len = array.length,
			args = [array],
			sum = 0,
			err = 0,
			tot = 0

	for (var i = 1; i < dim; ++i) {
		if (!Array.isArray(arguments[i]) || arguments[i].length !== len) return NaN
		args[i] = arguments[i]
	}

	//modified Kahan Sum
	for (i = 0; i < len; ++i) {
		var prod = 1
		for (var j = 0; j < args.length; ++j) prod *= args[j][i]
		sum += prod
		err += (sum - tot) - prod
		tot = sum
	}
	return sum - err
}


/* POPULATION */
export const getPopulation = (devTypes, {library_bldgs}, {workbook_devtypes}) => {
    //for each dev type
    let newPopulationObj = devTypes.map( function ( currentDevType) {
        let popCopy = JSON.parse(JSON.stringify(currentDevType));      
        //1. get dev building mix percentages array
        let currentWorkbook = workbook_devtypes.filter(function(devtypes){
            return devtypes.devTypeName === currentDevType.devType
        });
        let devPercMix = [];
        let devBldgMix = currentWorkbook.reduce(function(filtered, workbook){
            workbook.cellData.map(function(arr){
                if (arr.percVal !== 0){
                    filtered.push(arr); 
                    devPercMix.push( Number(arr.percVal)/100 )
                }
                return arr;
            })
            return filtered;
        }, []);

        //2. get b_hh_acre array
        let bldgHHAcre = devBldgMix.map(function(obj, idx){
            let bldg = library_bldgs.filter(function(bldgObj){
                return bldgObj.uniqueId === obj.bldgId
            });
            // console.log(bldg);
            return bldg[0].forDevType.rResidentialDwellUnit
        });

        //3. get b_hh_size array
        let bldgHHSize = devBldgMix.map(function(obj, idx){
            let bldg = library_bldgs.filter(function(bldgArray){
              return bldgArray.uniqueId === obj.bldgId
            });
            // console.log(bldg);
            let type = bldg[0].forDevType.rHouseholdType
            return (type === 'Single Family' ? 2.5 : 3)
        });

        //4. get dev streets, civic, park %
        let { civicPerc } = currentWorkbook[0] || 0;
        let { openSpacePerc } = currentWorkbook[0] || 0;
        let { publicRoadsPerc } = currentWorkbook[0] || 0;

        let newPop = ((currentDevType.totalAcre) * getSumProduct(bldgHHAcre,devPercMix) * (1 - publicRoadsPerc - civicPerc - openSpacePerc)) *
            ( getSumProduct(bldgHHSize,bldgHHAcre,devPercMix) / getSumProduct(bldgHHAcre,devPercMix) ); 
        // console.log(newPop);
        popCopy["y"] = Number( (newPop).toFixed(0) );
        // console.log(currentDevType);
        return popCopy;
    });
    // console.log(newPopulationObj)
    return newPopulationObj;
};

export const getHousingUnits = (devTypes, {library_bldgs}, {workbook_devtypes}) => {
    //for each dev type
    let newHousingObj = devTypes.map( function ( currentDevType) {
        let housingCopy = JSON.parse(JSON.stringify(currentDevType));              
        //1. get dev building mix percentages array
        let currentWorkbook = workbook_devtypes.filter(function(devtypes){
            return devtypes.devTypeName === currentDevType.devType
        });
        let devPercMix = [];
        let devBldgMix = currentWorkbook.reduce(function(filtered, workbook){
            workbook.cellData.map(function(arr){
                if (arr.percVal !== 0){
                    filtered.push(arr); 
                    devPercMix.push( Number(arr.percVal)/100 )
                }
                return arr;
            })
            return filtered;
        }, []);

        //2. get b_hh_acre array
        let bldgHHAcre = devBldgMix.map(function(obj, idx){
            let bldg = library_bldgs.filter(function(bldgObj){
                return bldgObj.uniqueId === obj.bldgId
            });
            // console.log(bldg);
            return bldg[0].forDevType.rResidentialDwellUnit
        });
		console.log(bldgHHAcre)

        //4. get dev streets, civic, park %
        let { civicPerc } = currentWorkbook[0] || 0;
        let { openSpacePerc } = currentWorkbook[0] || 0;
        let { publicRoadsPerc } = currentWorkbook[0] || 0;

        let newHousing = ((currentDevType.totalAcre) * getSumProduct(bldgHHAcre,devPercMix) * (1 - publicRoadsPerc - civicPerc - openSpacePerc));
            // ( getSumProduct(bldgHHSize,bldgHHAcre,devPercMix) / getSumProduct(bldgHHAcre,devPercMix) ); 
        // console.log(newHousing);
        housingCopy["y"] = Number( (newHousing).toFixed(0) );
        // console.log(currentDevType);
        return housingCopy;
    });
    // console.log(newHousingObj)
    return newHousingObj;
}

export const getJobCounts =  (devTypes, {library_bldgs}, {workbook_devtypes}) => {
    //for each dev type
    let newMetricObj = devTypes.map( function ( currentDevType) {
        let jobCopy = JSON.parse(JSON.stringify(currentDevType));      
        //1. get dev building mix percentages array
        let currentWorkbook = workbook_devtypes.filter(function(devtypes){
            return devtypes.devTypeName === currentDevType.devType
        });
        let devPercMix = [];
        let devBldgMix = currentWorkbook.reduce(function(filtered, workbook){
            workbook.cellData.map(function(arr){
                if (arr.percVal !== 0){
                    filtered.push(arr); 
                    devPercMix.push( Number(arr.percVal)/100 )
                }
                return arr;
            })
            return filtered;
        }, []);

        //2. get b_hh_acre array
        let jobsPerAcre = devBldgMix.map(function(obj, idx){
            let bldg = library_bldgs.filter(function(bldgObj){
                return bldgObj.uniqueId === obj.bldgId
            });
            // console.log(bldg[0].forDevType);
            return bldg[0].forDevType.rJobsPerSf * 43560
        });
		// console.log(jobsPerAcre)
        //4. get dev streets, civic, park %
        let { civicPerc } = currentWorkbook[0] || 0;
        let { openSpacePerc } = currentWorkbook[0] || 0;
        let { publicRoadsPerc } = currentWorkbook[0] || 0;

        let newJobs = ((currentDevType.totalAcre) * getSumProduct(jobsPerAcre,devPercMix) * (1 - publicRoadsPerc - civicPerc - openSpacePerc));
            // ( getSumProduct(bldgHHSize,bldgHHAcre,devPercMix) / getSumProduct(bldgHHAcre,devPercMix) ); 
        // console.log(newJobs);
        jobCopy["y"] = Number( (newJobs).toFixed(0) );
        // console.log(currentDevType);
        return jobCopy;
    });
    return newMetricObj;
}

/**  
 * 
const chartConfig = ({name, data}) => {
	return {
		chart: {
			type: "bar"
		},
		title: {
			text: name
		},
		// subtitle: {
		// 	text:
		// 	'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
		// },
		xAxis: {
			categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: name,
				align: "high"
			},
			labels: {
				overflow: "justify"
			}
		},
		tooltip: {
			valueSuffix: ""
		},
		plotOptions: {
			bar: {
				dataLabels: {
				enabled: true
				}
			}
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "top",
			x: -40,
			y: 80,
			floating: true,
			borderWidth: 1,
			backgroundColor: "#FFFFFF",
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: [
			{
				name: "Year 1800",
				data: [107, 31, 635, 203, 2]
			},
			{
				name: "Year 1900",
				data: [133, 156, 947, 408, 6]
			},
			{
				name: "Dev Types",
				data: [1052, 954, 4250, 740, 38]
			}
		]
	}
}

 * **/