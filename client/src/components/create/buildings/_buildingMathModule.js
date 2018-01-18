let landUses = {
	streets: 0,				//b4
	landscaping: 0,			//b5
	buildingNParking: 0,	//b6
	totalLotSize: 0			//b7
};

let maxBuildingEnvelope = {
	squareFootage: 0,		//b10
	buildingFootprint: 0,	//b11
	residentialUnderbuild: 0//b12
};

//if underground or internal parking only - no suface/structured
let parkingOptionA = {
	residentialMaxSf: 0,
	residentialSpacesPoss: 0,
	retailMaxSf: 0,
	retailSpacesPoss: 0,
	officeMaxSf: 0,
	officeSpacesPoss: 0,
	industrialMaxSf: 0,
	industrialSpacesPoss: 0,
	publicMaxSf: 0,
	publicSpacesPoss: 0,
	educationalMaxSf: 0,
	educationalSpacesPoss: 0,
	hotelMaxSf: 0,
	hotelSpacesPoss: 0,
	commercialParkingMaxSf: 0,
	commercialParkingSpacesPoss: 0,
	internalParkingMaxSf: 0,
	internalParkingSpacesPoss: 0,
	totalMaxSf:0,
	totalSpacesPoss: 0,
	lessInternalParking: 0
}
let parkingOptionA_Aids = {
	maxParkingRequired: 0, 				//b29
	undergroundParkingProvided: 0,		//b30
	internalParkingProvided: 0,			//b31
	surplusOrDeficit: 0,				//b32
	externalSpacesPer1000: 0,			//b35
	maxSpacesUnderground: 0,			//b36
	adjustedSpacesUnderground: 0,		//b37
	remainderExternalSpacesRequired: 0,	//b38
	totalParkBuildFootprint: 0,			//b41
	internalSfEnvelope: 0,				//b42
	adjustmentIfOverEnvelope: 0,		//b43
	internalFootprint: 0,				//b44
	adjustmentIfOverFootprint: 0,		//b45
	aboveGradeParking: 0				//b46
}
//end parkingOptionA


//If Underground or Internal Parking Only AND additional Surface/Structured Parking Required
let parkingOptionB = {					
	residentialMaxSf: 0,			//b51
	residentialSpacesPoss: 0,			//c51
	residentialMaxSfPerc: 0,				//d51
	retailMaxSf: 0,					//b52
	retailSpacesPoss: 0,				//c52
	retailMaxSfPerc: 0,						//d52
	officeMaxSf: 0,					//b53
	officeSpacesPoss: 0,				//c53
	officeMaxSfPerc: 0,						//d53
	industrialMaxSf: 0,				//b54
	industrialSpacesPoss: 0,			//c54
	industrialMaxSfPerc: 0,					//d54
	publicMaxSf: 0,					//b55
	publicSpacesPoss: 0,				//c55
	publicMaxSfPerc: 0,						//d55
	educationalMaxSf: 0,			//b56
	educationalSpacesPoss: 0,			//c56
	educationalMaxSfPerc: 0,				//d56
	hotelMaxSf: 0,					//b57
	hotelSpacesPoss: 0,					//c57
	hotelMaxSfPerc: 0,						//d57
	commercialParkingMaxSf: 0,		//b58
	commercialParkingSpacesPoss: 0,		//c58
	commercialParkingMaxSfPerc: 0,			//d58
	internalParkingMaxSf: 0,		//b59
	internalParkingSpacesPoss: 0,		//c59
	internalParkingMaxSfPerc: 0,			//d59
	totalMaxSf:0,					//b60
	totalSpaces:0,						//c60
	lessInternalParking: 0,				//c61
	buildingFootprint: 0,			//b64
	lanscapeFootprint: 0,			//b65
	parkingFootprint: 0,			//b66
	unusedFootprint: 0				//b67
};

//end parkingOptionB

//If Surface/Structured Parking
let parkingOptionC = {					
	parkingMaxA: 0,					//b71
	parkingMaxA_2: 1000,				//c71
	parkingMaxB: 0,					//b72
	parkingMaxB_2: 0,					//c72
	buildingAvailable: 0,			//b73
	parkingAvailable: 0,			//b74
	parkingAvailable_2: 0,				//c74
	aboveGrade: 0,					//b75
	aboveGradeFootprint: 0,			//b76
	buildingFootprintNeeded: 0,		//b77
	adjustedTotalBuilding: 0,		//b78
	aboveGradeParking: 0,			//b79
	unusedSpace: 0,					//b80
	adjustedMaxBuilding: 0,			//b81
	buildingFootprint: 0,			//b84
	lanscapeFootprint: 0,			//b85
	parkingFootprint: 0,			//b86
	unusedFootprint: 0				//b87
}


//Square Footage by Use (if surface/structured parking)
let parkingOptionC_Aid1 = {
	residentialSf: 0,
	residentialSpaces: 0,
	retailSf: 0,
	retailSpaces: 0,
	officeSf: 0,
	officeSpaces: 0,
	industrialSf: 0,
	industrialSpaces: 0,
	publicSf: 0,
	publicSpaces: 0,
	educationalSf: 0,
	educationalSpaces: 0,
	hotelSf: 0,
	hotelSpaces: 0,
	commercialParkingSf: 0,
	commercialParkingSpaces: 0,
	internalParkingSf: 0,
	internalParkingSpaces: 0,
	totalSf: 0,
	totalSpaces: 0,
	lessInternalParking: 0
}

//Square Footage by Use (without Underbuild)
let parkingOptionC_Aid2= {
	residentialSf: 0,
	residentialSpaces: 0,
	retailSf: 0,
	retailSpaces: 0,
	officeSf: 0,
	officeSpaces: 0,
	industrialSf: 0,
	industrialSpaces: 0,
	publicSf: 0,
	publicSpaces: 0,
	educationalSf: 0,
	educationalSpaces: 0,
	hotelSf: 0,
	hotelSpaces: 0,
	commercialParkingSf: 0,
	commercialParkingSpaces: 0,
	internalParkingSf: 0,
	internalParkingSpaces: 0,
	totalSf: 0,
	totalSpaces: 0,
	lessInternalParking: 0
}

//Square Footage by Use (with Underbuild)
let parkingOptionC_Aid3 = {
	residentialSf: 0,
	residentialSpaces: 0,
	retailSf: 0,
	retailSpaces: 0,
	officeSf: 0,
	officeSpaces: 0,
	industrialSf: 0,
	industrialSpaces: 0,
	publicSf: 0,
	publicSpaces: 0,
	educationalSf: 0,
	educationalSpaces: 0,
	hotelSf: 0,
	hotelSpaces: 0,
	commercialParkingSf: 0,
	commercialParkingSpaces: 0,
	internalParkingSf: 0,
	internalParkingSpaces: 0,
	totalSf: 0,
	totalSpaces: 0,
	lessInternalParking: 0
}

//Square Footage by Use (Adjusted)
let parkingOptionC_Aid4 = {
	residentialSf: 0,
	residentialSpaces: 0,
	retailSf: 0,
	retailSpaces: 0,
	officeSf: 0,
	officeSpaces: 0,
	industrialSf: 0,
	industrialSpaces: 0,
	publicSf: 0,
	publicSpaces: 0,
	educationalSf: 0,
	educationalSpaces: 0,
	hotelSf: 0,
	hotelSpaces: 0,
	commercialParkingSf: 0,
	commercialParkingSpaces: 0,
	internalParkingSf: 0,
	internalParkingSpaces: 0,
	totalSf: 0,
	totalSpaces: 0,
	lessInternalParking: 0
}
//Adjustment Factors
let parkingOptionC_Aid5 = {
	unusedFootprint: 0,
	bldgFootprint: 0,
	bldgParkingFootprint: 0,
	additionalArea: 0,
	additionalFootprint: 0,
	additionalParking: 0,
	adjustedVolume: 0,
	adjustedSpaces: 0
}
//end parkingOptionC

// Site Summary
// Pre-Underbuild
let preUnderbuild = {
	buildingFootprint: 0,
	lanscapeFootprint: 0,
	parkingFootprint: 0,
	unusedFootprint: 0	
}

// Post-Underbuild
let postUnderbuild = {
	buildingFootprint: 0,
	lanscapeFootprint: 0,
	parkingFootprint: 0,
	unusedFootprint: 0	
}

// Adjusted
let adjustedSummary = {
	buildingFootprint: 0, //b164
	lanscapeFootprint: 0,
	parkingFootprint: 0,
	unusedFootprint: 0	
}

let adjustedSpaces = {
	surface: 0,
	underground: 0,
	commercialParking: 0,
	internal: 0
}

let adjustedParkingSpaces = {
	residentialRequired: 0,
	retailRequired: 0,
	officeRequired: 0,
	industrialRequired: 0,
	publicRequired: 0,
	educationalRequired: 0,
	hotelRequired: 0,
	structuredProvided: 0,
	undergroundProvided: 0,
	commercialProvided: 0,
	commercialRequired: 0,
	internalProvided: 0,
	totalProvided: 0,
	totalRequired: 0,
	totalExcess: 0
}


let adjustedParkingFootprint = {
	surfaceArea: 0,
	surfaceFootprint: 0,
	undergroundArea: 0,
	undergroundFootprint: 0
}
//end site summary

///rent calculator (will need to be moved to a state loaded file later)
/*
Below-Market Rent Target	AMI	Below-Market Unit Mix	Percent of AMI	Below-Market Rent
Market	 $60,000 	-	-	 - 
Income-Restricted	-	60%	80%	$1,200
Low Income	-	20%	60%	$900
Very Low Income	-	20%	40%	$600
Calculated Below-Market Rent	 - 	100%	 - 	$1,020
*/
let residentialUnitSizeEst = {
	afford: 975,
	affordPerc: .2,
	bed1: 2000,
	bed1Perc: .4,
	bed2: 1200,
	bed2Perc: .2,
	bed3: 975,
	bed3Perc: 0,
	bed4: 725,
	bed4Perc: 0,
	studio:	 575,
	studioPerc: .2
}
let residentialRentEstimator = {
	avgMonthlyRentCalc: 1.63
}
/*
Residential Unit Size Estimator ◊	Avg. Unit Size (Net Square Feet)	% of Units in Building	Required Parking by Type ◊	# of Units by Type
Affordable	 975 	10%	 1.2 	 5 
4+ Bedroom	 2,000 	0%	 2.1 	 - 
3 Bedroom	 1,200 	0%	 1.5 	 - 
2 Bedroom	 975 	25%	 1.2 	 12 
1 Bedroom	 725 	45%	 0.9 	 21 
Studio	 575 	20%	 0.6 	 9 
Calculated Residential Unit Size	 783 	100%	 0.9 	 42 


Residential Rent Estimator ◊	$ / sf	Unit Size	Parking Cost / Mo	Rent
Affordable	 $1.05 	 975 	 $- 	 $1,020 
4+ Bedroom	$1.40 	 2,000 	 $- 	 $2,800 
3 Bedroom	$1.50 	 1,200 	 $- 	 $1,800 
2 Bedroom	$1.60 	 975 	 $- 	 $1,560 
1 Bedroom	$1.70 	 725 	 $- 	 $1,233 
Studio	$1.80 	 575 	 $- 	 $1,035 
Calculated Average Monthly Rent	 $1.63 	 783 	 $- 	 $1,276 
*/

export const updateBuildingEnvelope = (physObj, basObj, advObj) => {

	landUses["streets"] = physObj.siteArea*(1-physObj.siteNetToGross);
	landUses["landscaping"] = physObj.siteArea - physObj.landscapingPerc;
	landUses["buildingNParking"] = physObj.siteArea - landUses["landscaping"] - landUses["streets"];
	landUses["totalLotSize"] = landUses["buildingNParking"] + landUses["landscaping"] + landUses["streets"]; //b7

	maxBuildingEnvelope['squareFootage'] = landUses["buildingNParking"] * physObj.buildingHeight;
	maxBuildingEnvelope['buildingFootprint'] = maxBuildingEnvelope['squareFootage'] / physObj.buildingHeight;
	maxBuildingEnvelope['residentialUnderbuild'] = ((physObj.residentialType === 'Multifamily') ? advObj.residentialRentalPerc : 1);
	
	//If Underground or Internal Parking Only  - No Surface/Structured
	parkingOptionA["internalParkingMaxSf"] = physObj.internalParkingLvls*maxBuildingEnvelope['buildingFootprint'];
	let maxMinusInternal = maxBuildingEnvelope['squareFootage'] - parkingOptionA["internalParkingMaxSf"];
	parkingOptionA["residentialMaxSf"] = (maxMinusInternal)*physObj["residentialUsePerc"];
	parkingOptionA["retailMaxSf"] = (maxMinusInternal)*physObj["retailUsePerc"];
	parkingOptionA["officeMaxSf"] = (maxMinusInternal)*physObj["officeUsePerc"];
	parkingOptionA["industrialMaxSf"] = (maxMinusInternal)*physObj["industrialUsePerc"];
	parkingOptionA["publicMaxSf"] = (maxMinusInternal)*physObj["publicUsePerc"];
	parkingOptionA["educationalMaxSf"] = (maxMinusInternal)*physObj["educationUsePerc"];
	parkingOptionA["hotelMaxSf"] = (maxMinusInternal)*physObj["hotelUsePerc"];
	parkingOptionA["commercialParkingMaxSf"] = (maxMinusInternal)*physObj["parkingUsePerc"];
	parkingOptionA["totalMaxSf"] = physObj["residentialUsePerc"] + physObj["retailUsePerc"] + physObj["officeUsePerc"] + physObj["industrialUsePerc"] + physObj["publicUsePerc"] + physObj["educationUsePerc"] + physObj["hotelUsePerc"] + physObj["parkingUsePerc"];


	parkingOptionA["residentialSpacesPoss"] = ((physObj["residentialUnitSize"] === 0) ? 0 : ((parkingOptionA["residentialMaxSf"]/(physObj["residentialUnitSize"] / maxBuildingEnvelope['residentialUnderbuild'] ))*physObj["residentialParkPerUnit"]) );
	parkingOptionA["retailSpacesPoss"] = parkingOptionA["retailMaxSf"] / physObj["retailParkPerArea"]
	parkingOptionA["officeSpacesPoss"] = parkingOptionA["officeMaxSf"] / physObj["officeParkPerArea"]
	parkingOptionA["industrialSpacesPoss"] = parkingOptionA["industrialMaxSf"] / physObj["industrialParkPerArea"]
	parkingOptionA["publicSpacesPoss"] = parkingOptionA["publicMaxSf"] / physObj["publicParkPerArea"]
	parkingOptionA["educationalSpacesPoss"] = parkingOptionA["educationalMaxSf"] / physObj["educationParkPerArea"]
	parkingOptionA["hotelSpacesPoss"] = ((physObj["hotelAreaPerRoom"] === 0) ? 0 : ( (parkingOptionA["hotelMaxSf"] /(physObj["hotelAreaPerRoom"]/advObj["hotelRentalPerc"]))*physObj["hotelParkPerRoom"]) );
	parkingOptionA["commercialParkingSpacesPoss"] = parkingOptionA["commercialParkingMaxSf"] / physObj["parkingAreaPerSf"];
	parkingOptionA["internalParkingSpacesPoss"] = parkingOptionA["internalParkingMaxSf"] / physObj["parkingAreaPerSf"];
	parkingOptionA["totalSpacesPoss"] = parkingOptionA["residentialSpacesPoss"] + parkingOptionA["retailSpacesPoss"] + parkingOptionA["officeSpacesPoss"] + parkingOptionA["industrialSpacesPoss"] + parkingOptionA["publicSpacesPoss"] + parkingOptionA["educationalSpacesPoss"] + parkingOptionA["hotelSpacesPoss"] + parkingOptionA["commercialParkingSpacesPoss"] + parkingOptionA["internalParkingSpacesPoss"];
	parkingOptionA["lessInternalParking"] = parkingOptionA["internalParkingSpacesPoss"] - parkingOptionA["residentialSpacesPoss"] + parkingOptionA["retailSpacesPoss"] + parkingOptionA["officeSpacesPoss"] + parkingOptionA["industrialSpacesPoss"] + parkingOptionA["publicSpacesPoss"] + parkingOptionA["educationalSpacesPoss"] + parkingOptionA["hotelSpacesPoss"];
	

	parkingOptionA_Aids["maxParkingRequired"] = parkingOptionA["residentialSpacesPoss"] + parkingOptionA["retailSpacesPoss"] + parkingOptionA["officeSpacesPoss"] + parkingOptionA["industrialSpacesPoss"] + parkingOptionA["publicSpacesPoss"] + parkingOptionA["educationalSpacesPoss"] + parkingOptionA["hotelSpacesPoss"];
	parkingOptionA_Aids["undergroundParkingProvided"] = (
		( physObj["undergroundParkingLvls"] > 0 && physObj["mechanicalParkingb76"] === "Yes") ? (physObj["siteArea"]*physObj["undergroundParkingLvls"])/125 : ( (physObj["undergroundParkingLvls"] > 0) ? (physObj["siteArea"]*physObj["undergroundParkingLvls"])/physObj["parkingAreaPerSf"] : 0)
	);
	parkingOptionA_Aids["internalParkingProvided"] = parkingOptionA["internalParkingSpacesPoss"];
	parkingOptionA_Aids["surplusOrDeficit"] = parkingOptionA_Aids["undergroundParkingProvided"] + parkingOptionA_Aids["internalParkingProvided"] - parkingOptionA_Aids["maxParkingRequired"];

	parkingOptionA_Aids["externalSpacesPer1000"] = parkingOptionA["lessInternalParking"] / (parkingOptionA["totalMaxSf"] / 1000);
	parkingOptionA_Aids["maxSpacesUnderground"] = (landUses["totalLotSize"]/physObj["parkingAreaPerSf"])*physObj["undergroundParkingLvls"];
	parkingOptionA_Aids["adjustedSpacesUnderground"] = ((parkingOptionA["lessInternalParking"] < parkingOptionA_Aids["maxSpacesUnderground"]) ?parkingOptionA["lessInternalParking"] : parkingOptionA_Aids["maxSpacesUnderground"]); 
	parkingOptionA_Aids["remainderExternalSpacesRequired"] = ( (parkingOptionA_Aids["externalSpacesPer1000"] < 0) ? 0: parkingOptionA_Aids["externalSpacesPer1000"]);

	parkingOptionA_Aids["totalParkBuildFootprint"] = landUses["buildingNParking"];
	parkingOptionA_Aids["internalSfEnvelope"] = (parkingOptionA_Aids["externalSpacesPer1000"] === 0) ? 0 : ((1000/parkingOptionA_Aids["externalSpacesPer1000"])*parkingOptionA_Aids["adjustedSpacesUnderground"]);
	parkingOptionA_Aids["adjustmentIfOverEnvelope"] = ( (parkingOptionA_Aids["internalSfEnvelope"]>maxBuildingEnvelope['squareFootage']) ? maxBuildingEnvelope['squareFootage'] :parkingOptionA_Aids["internalSfEnvelope"])
	parkingOptionA_Aids["internalFootprint"] = parkingOptionA_Aids["adjustmentIfOverEnvelope"] / physObj["buildingHeight"];
	parkingOptionA_Aids["adjustmentIfOverFootprint"] = ( (parkingOptionA_Aids["internalFootprint"]>parkingOptionA_Aids["totalParkBuildFootprint"]) ? parkingOptionA_Aids["totalParkBuildFootprint"] : parkingOptionA_Aids["internalFootprint"]);
	parkingOptionA_Aids["aboveGradeParking"] = parkingOptionA_Aids["totalParkBuildFootprint"]-parkingOptionA_Aids["adjustmentIfOverFootprint"];

	
	
	//If Underground or Internal Parking Only AND additional Surface/Structured Parking Required
	
	parkingOptionB["internalParkingMaxSfPerc"] = (
		(physObj["internalParkingLvls"] === 0) ? 0 : 1/(physObj["buildingHeight"]/physObj["internalParkingLvls"])
	);
	parkingOptionB["residentialMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["residentialUsePerc"];
	parkingOptionB["retailMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["retailUsePerc"];
	parkingOptionB["officeMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["officeUsePerc"];
	parkingOptionB["industrialMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["industrialUsePerc"];
	parkingOptionB["publicMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["publicUsePerc"];
	parkingOptionB["educationalMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["educationUsePerc"];
	parkingOptionB["hotelMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["hotelUsePerc"];
	parkingOptionB["commercialParkingMaxSfPerc"] = (1-parkingOptionB["internalParkingMaxSfPerc"])*physObj["parkingUsePerc"];
	
	let optionBHelper = parkingOptionA_Aids["undergroundParkingProvided"] + parkingOptionA_Aids["internalParkingProvided"];
	let optionBHelper2 = parkingOptionA_Aids["adjustmentIfOverEnvelope"];
	parkingOptionB["internalParkingMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*["internalParkingMaxSfPerc"]) : parkingOptionA["internalParkingMaxSf"]);
	parkingOptionB["residentialMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["residentialMaxSfPerc"]) : parkingOptionA["residentialMaxSfPerc"]);
	parkingOptionB["retailMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["retailMaxSfPerc"]) : parkingOptionA["retailMaxSfPerc"]);
	parkingOptionB["officeMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["officeMaxSfPerc"]) : parkingOptionA["officeMaxSfPerc"]);
	parkingOptionB["industrialMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["industrialMaxSfPerc"]) : parkingOptionA["industrialMaxSfPerc"]);
	parkingOptionB["publicMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["publicMaxSfPerc"]) : parkingOptionA["publicMaxSfPerc"]);
	parkingOptionB["educationalMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["educationalMaxSfPerc"]) : parkingOptionB["educationalMaxSfPerc"]);
	parkingOptionB["hotelMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["hotelMaxSfPerc"]) : parkingOptionA["hotelMaxSfPerc"]);
	parkingOptionB["commercialParkingMaxSf"] = (parkingOptionA_Aids["maxParkingRequired"]>=optionBHelper ? (optionBHelper2*parkingOptionB["commercialParkingMaxSfPerc"]) : parkingOptionA["commercialParkingMaxSfPerc"]);
	parkingOptionB["totalMaxSf"] = parkingOptionB["internalParkingMaxSf"] + parkingOptionB["residentialMaxSf"] + parkingOptionB["retailMaxSf"] + parkingOptionB["officeMaxSf"] + parkingOptionB["industrialMaxSf"] + parkingOptionB["publicMaxSf"] + parkingOptionB["educationalMaxSf"] + parkingOptionB["hotelMaxSf"] + parkingOptionB["commercialParkingMaxSf"];
	
	parkingOptionB["internalParkingSpacesPoss"] = parkingOptionB["internalParkingMaxSf"]/physObj["parkingAreaPerSf"];
	parkingOptionB["residentialSpacesPoss"] = (
		(physObj["residentialUnitSize"]===0) ? 0 : (parkingOptionB["residentialMaxSf"]/(physObj["residentialUnitSize"]/maxBuildingEnvelope["residentialUnderbuild"]))*physObj["residentialParkPerUnit"]
	)		
	parkingOptionB["retailSpacesPoss"] = (parkingOptionB["retailMaxSf"]/1000)*physObj["retailParkPerArea"]
	parkingOptionB["officeSpacesPoss"] = (parkingOptionB["officeMaxSf"]/1000)*physObj["officeParkPerArea"]
	parkingOptionB["industrialSpacesPoss"] = (parkingOptionB["industrialMaxSf"]/1000)*physObj["industrialParkPerArea"]
	parkingOptionB["publicSpacesPoss"] = (parkingOptionB["publicMaxSf"]/1000)*physObj["publicParkPerArea"]
	parkingOptionB["educationalSpacesPoss"] = (parkingOptionB["educationalMaxSf"]/1000)*physObj["educationParkPerArea"]
	parkingOptionB["hotelSpacesPoss"] = (physObj["hotelAreaPerRoom"] === 0 ? 0 :(parkingOptionB["hotelMaxSf"]/(physObj["hotelAreaPerRoom"]/advObj["hotelRentalPerc"]))*physObj["hotelParkPerRoom"]);
	parkingOptionB["commercialParkingSpacesPoss"] = (parkingOptionB["commercialParkingMaxSf"]/1000)*physObj["retailParkPerArea"]
	parkingOptionB["totalSpaces"] = parkingOptionB["residentialSpacesPoss"] + parkingOptionB["retailSpacesPoss"] + parkingOptionB["officeSpacesPoss"] + parkingOptionB["industrialSpacesPoss"] + parkingOptionB["publicSpacesPoss"] + parkingOptionB["educationalSpacesPoss"] + parkingOptionB["hotelSpacesPoss"] + parkingOptionB["commercialParkingSpacesPoss"];
	parkingOptionB["lessInternalParking"] = parkingOptionB["totalSpaces"] - parkingOptionB["commercialParkingSpacesPoss"] - parkingOptionB["internalParkingSpacesPoss"];
	
	
	parkingOptionB["buildingFootprint"] = parkingOptionA_Aids["adjustmentIfOverEnvelope"]/physObj["buildingHeight"];	
	parkingOptionB["lanscapeFootprint"] = landUses["landscaping"];
	parkingOptionB["parkingFootprint"] = 0;
	parkingOptionB["unusedFootprint"] = landUses["totalLotSize"] - parkingOptionB["parkingFootprint"]+parkingOptionB["lanscapeFootprint"]+parkingOptionB["buildingFootprint"];
	
	//end parkingOptionB
	
	//If Surface/Structured Parking
	
	parkingOptionC["parkingMaxA"] = parkingOptionA_Aids["adjustedSpacesUnderground"]*physObj["parkingAreaPerSf"];
	parkingOptionC["parkingMaxB"] = ( (physObj["surfaceParkingLvls"]===0) ? 0 : (parkingOptionC["parkingMaxA"]/physObj["surfaceParkingLvls"]) );
	parkingOptionC["parkingMaxB_2"] = (1000/physObj["buildingHeight"]);
	parkingOptionC["buildingAvailable"] = parkingOptionA_Aids["aboveGradeParking"]/(parkingOptionC["parkingMaxB"]+parkingOptionC["parkingMaxB_2"]);
	parkingOptionC["parkingAvailable"] = parkingOptionC["parkingMaxB"]*parkingOptionC["buildingAvailable"];
	parkingOptionC["parkingAvailable_2"] = parkingOptionC["parkingMaxB_2"]*parkingOptionC["buildingAvailable"];
	parkingOptionC["aboveGrade"] =  (( physObj["surfaceParkingLvls"]>0 || (physObj["surfaceParkingLvls"]+physObj["undergroundParkingLvls"]+physObj["internalParkingLvls"]) === 0) ? 1 : 0);
	parkingOptionC["aboveGradeFootprint"] = (parkingOptionC["aboveGrade"] === 1) ? parkingOptionC["parkingAvailable"] : 0;
	parkingOptionC["buildingFootprintNeeded"] = ( parkingOptionC["aboveGrade"] === 1) ? parkingOptionC["parkingAvailable"] : 0;
	parkingOptionC["adjustedTotalBuilding"] = (parkingOptionC["aboveGrade"] === 1)  ? (parkingOptionC["aboveGrade"]+parkingOptionC["buildingFootprintNeeded"]) : parkingOptionC["aboveGrade"];
	// parkingOptionC["aboveGradeParking"] = parkingOptionC["aboveGradeFootprint"];
	parkingOptionC["unusedSpace"] = landUses["buildingNParking"]-(parkingOptionC["adjustedTotalBuilding"]+parkingOptionC["aboveGradeParking"]);
	parkingOptionC["adjustedMaxBuilding"] = parkingOptionC["adjustedTotalBuilding"]*physObj["buildingHeight"]
	
	parkingOptionC["buildingFootprint"] = parkingOptionC["adjustedTotalBuilding"];
	parkingOptionC["lanscapeFootprint"] = landUses["landscaping"];
	parkingOptionC["parkingFootprint"] = parkingOptionC["aboveGradeFootprint"];
	parkingOptionC["unusedFootprint"] = parkingOptionC["unusedSpace"];
	
	parkingOptionC_Aid1["internalParkingSf"] = (parkingOptionC["adjustedMaxBuilding"]/physObj["buildingHeight"])*physObj["internalParkingLvls"];
	
	let optionCHelper = parkingOptionC["adjustedMaxBuilding"]-parkingOptionC_Aid1["internalParkingSf"];
	let optionCHelper2 = parkingOptionC["aboveGrade"];
	let optionCHelper3 = parkingOptionA_Aids["surplusOrDeficit"];
	
	//Square Footage by Use (if surface/structured parking)
	parkingOptionC_Aid1["residentialSf"] = (optionCHelper)*physObj["residentialUsePerc"];
	parkingOptionC_Aid1["retailSf"] = (optionCHelper)*physObj["retailUsePerc"];
	parkingOptionC_Aid1["officeSf"] = (optionCHelper)*physObj["officeUsePerc"];
	parkingOptionC_Aid1["industrialSf"] = (optionCHelper)*physObj["industrialUsePerc"];
	parkingOptionC_Aid1["publicSf"] = (optionCHelper)*physObj["publicUsePerc"];
	parkingOptionC_Aid1["educationalSf"] =(optionCHelper)*physObj["educationUsePerc"];
	parkingOptionC_Aid1["hotelSf"] = (optionCHelper)*physObj["hotelUsePerc"];
	parkingOptionC_Aid1["commercialParkingSf"] = (optionCHelper)*physObj["parkingUsePerc"];
	parkingOptionC_Aid1["totalSf"] = parkingOptionC_Aid1["internalParkingSf"] + parkingOptionC_Aid1["residentialSf"] + parkingOptionC_Aid1["retailSf"] + parkingOptionC_Aid1["officeSf"] + parkingOptionC_Aid1["industrialSf"] + parkingOptionC_Aid1["publicSf"] + parkingOptionC_Aid1["educationalSf"] + parkingOptionC_Aid1["hotelSf"] + parkingOptionC_Aid1["commercialParkingSf"];
	
	parkingOptionC_Aid1["internalParkingSpaces"] = parkingOptionC_Aid1["internalParkingSf"]/physObj["parkingAreaPerSf"];
	parkingOptionC_Aid1["residentialSpaces"] = (physObj["residentialUnitSize"]=== 0) ? 0 : (parkingOptionC_Aid1["residentialSf"]/(physObj["residentialUnitSize"]/maxBuildingEnvelope['residentialUnderbuild']))*physObj["residentialParkPerUnit"];
	parkingOptionC_Aid1["retailSpaces"] = (parkingOptionC_Aid1["retailSf"]/1000)*physObj["retailParkPerArea"];
	parkingOptionC_Aid1["officeSpaces"] = (parkingOptionC_Aid1["officeSf"]/1000)*physObj["officeParkPerArea"];
	parkingOptionC_Aid1["industrialSpaces"] = (parkingOptionC_Aid1["industrialSf"]/1000)*physObj["industrialParkPerArea"];
	parkingOptionC_Aid1["publicSpaces"] = (parkingOptionC_Aid1["publicSf"]/1000)*physObj["publicParkPerArea"];
	parkingOptionC_Aid1["educationalSpaces"] = (parkingOptionC_Aid1["educationalSf"]/1000)*physObj["educationParkPerArea"]
	parkingOptionC_Aid1["hotelSpaces"] = (
		(physObj["hotelAreaPerRoom"]===0) ? 0 : (parkingOptionC_Aid1["hotelSf"]/(physObj["hotelAreaPerRoom"]/advObj["hotelRentalPerc"]))*physObj["hotelParkPerRoom"]
	);
	parkingOptionC_Aid1["commercialParkingSpaces"] = parkingOptionC_Aid1["commercialParkingSf"]/physObj["parkingAreaPerSf"]
	parkingOptionC_Aid1["totalSpaces"] = parkingOptionC_Aid1["residentialSpaces"] + parkingOptionC_Aid1["retailSpaces"] + parkingOptionC_Aid1["officeSpaces"] + parkingOptionC_Aid1["industrialSpaces"] + parkingOptionC_Aid1["publicSpaces"] + parkingOptionC_Aid1["educationalSpaces"] + parkingOptionC_Aid1["hotelSpaces"] + parkingOptionC_Aid1["commercialParkingSpaces"] + parkingOptionC_Aid1["internalParkingSpaces"];
	parkingOptionC_Aid1["lessInternalParking"] = parkingOptionC_Aid1["totalSpaces"] - parkingOptionC_Aid1["internalParkingSpaces"] - parkingOptionC_Aid1["commercialParkingSpaces"];
	
	//Square Footage by Use (without Underbuild)
	parkingOptionC_Aid2["residentialSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["residentialSf"] : parkingOptionB["residentialMaxSf"]
	parkingOptionC_Aid2["residentialSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["residentialSpacesPoss"] : parkingOptionC_Aid1["residentialSpaces"];
	parkingOptionC_Aid2["retailSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["retailSf"] : parkingOptionB["retailMaxSf"];
	parkingOptionC_Aid2["retailSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["retailSpacesPoss"] : parkingOptionC_Aid1["retailSpaces"];
	parkingOptionC_Aid2["officeSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["officeSf"] : parkingOptionB["officeMaxSf"];
	parkingOptionC_Aid2["officeSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["officeSpacesPoss"] : parkingOptionC_Aid1["officeSpaces"];
	parkingOptionC_Aid2["industrialSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["industrialSf"] : parkingOptionB["industrialMaxSf"];
	parkingOptionC_Aid2["industrialSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["industrialSpacesPoss"] : parkingOptionC_Aid1["industrialSpaces"];
	parkingOptionC_Aid2["publicSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["publicSf"]	: parkingOptionB["publicMaxSf"];
	parkingOptionC_Aid2["publicSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["publicSpacesPoss"] : parkingOptionC_Aid1["publicSpaces"];
	parkingOptionC_Aid2["educationalSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["educationalSf"] : parkingOptionB["educationalMaxSf"];
	parkingOptionC_Aid2["educationalSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["educationalSpacesPoss"] : parkingOptionC_Aid1["educationalSpaces"];
	parkingOptionC_Aid2["hotelSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["hotelSf"] : parkingOptionB["hotelMaxSf"];
	parkingOptionC_Aid2["hotelSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["hotelSpacesPoss"] : parkingOptionC_Aid1["hotelSpaces"];
	parkingOptionC_Aid2["commercialParkingSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["commercialParkingSf"] : parkingOptionB["commercialParkingMaxSf"];
	parkingOptionC_Aid2["commercialParkingSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["commercialParkingSpacesPoss"] : parkingOptionC_Aid1["commercialParkingSpaces"];
	parkingOptionC_Aid2["internalParkingSf"] = (optionCHelper2 >0) ? parkingOptionC_Aid1["internalParkingSf"] : parkingOptionB["internalParkingMaxSf"];
	parkingOptionC_Aid2["internalParkingSpaces"] = (optionCHelper3 >=0) ? parkingOptionA["internalParkingSpacesPoss"] : parkingOptionC_Aid1["internalParkingSpaces"];
	parkingOptionC_Aid2["totalSf"] = parkingOptionC_Aid2["residentialSf"] + parkingOptionC_Aid2["retailSf"] + parkingOptionC_Aid2["officeSf"] + parkingOptionC_Aid2["industrialSf"] + parkingOptionC_Aid2["publicSf"] + parkingOptionC_Aid2["educationalSf"] + parkingOptionC_Aid2["hotelSf"] + parkingOptionC_Aid2["commercialParkingSf"] + parkingOptionC_Aid2["internalParkingSf"];
	
	
	//Square Footage by Use (with Underbuild)
	parkingOptionC_Aid3["residentialSf"] = parkingOptionC_Aid2["residentialSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["residentialSpaces"] = parkingOptionC_Aid2["residentialSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["retailSf"] = parkingOptionC_Aid2["retailSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["retailSpaces"] = parkingOptionC_Aid2["retailSpaces"] *physObj["underbuildPerc"];
	parkingOptionC_Aid3["officeSf"] = parkingOptionC_Aid2["officeSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["officeSpaces"] = parkingOptionC_Aid2["officeSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["industrialSf"] = parkingOptionC_Aid2["industrialSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["industrialSpaces"] = parkingOptionC_Aid2["industrialSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["publicSf"] = parkingOptionC_Aid2["publicSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["publicSpaces"] = parkingOptionC_Aid2["publicSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["educationalSf"] = parkingOptionC_Aid2["educationalSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["educationalSpaces"] = parkingOptionC_Aid2["educationalSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["hotelSf"] = parkingOptionC_Aid2["hotelSf"] *physObj["underbuildPerc"];
	parkingOptionC_Aid3["hotelSpaces"] = parkingOptionC_Aid2["hotelSpaces"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["commercialParkingSf"] = parkingOptionC_Aid2["commercialParkingSf"] *physObj["underbuildPerc"];
	parkingOptionC_Aid3["commercialParkingSpaces"] = parkingOptionC_Aid2["commercialParkingSpaces"] *physObj["underbuildPerc"];
	parkingOptionC_Aid3["internalParkingSf"] = parkingOptionC_Aid2["internalParkingSf"]*physObj["underbuildPerc"];
	parkingOptionC_Aid3["internalParkingSpaces"] = parkingOptionC_Aid3["internalParkingSf"]/physObj["parkingAreaPerSf"];
	parkingOptionC_Aid3["totalSf"] = parkingOptionC_Aid3["residentialSf"] + parkingOptionC_Aid3["retailSf"] + parkingOptionC_Aid3["officeSf"] + parkingOptionC_Aid3["industrialSf"] + parkingOptionC_Aid3["publicSf"] + parkingOptionC_Aid3["educationalSf"] + parkingOptionC_Aid3["hotelSf"] + parkingOptionC_Aid3["commercialParkingSf"] + parkingOptionC_Aid3["internalParkingSf"];
	parkingOptionC_Aid3["totalSpaces"] = parkingOptionC_Aid3["residentialSpaces"] + parkingOptionC_Aid3["retailSpaces"] + parkingOptionC_Aid3["officeSpaces"] + parkingOptionC_Aid3["industrialSpaces"] + parkingOptionC_Aid3["publicSpaces"] + parkingOptionC_Aid3["educationalSpaces"] + parkingOptionC_Aid3["hotelSpaces"];

	
	// Site Summary
	// Pre-Underbuild
	preUnderbuild["buildingFootprint"] = (optionCHelper2>0) ? parkingOptionC["buildingFootprint"] : parkingOptionB["buildingFootprint"]; //b151 
	preUnderbuild["lanscapeFootprint"] = (optionCHelper2>0) ? parkingOptionC["lanscapeFootprint"] : parkingOptionB["lanscapeFootprint"]; //b152
	preUnderbuild["parkingFootprint"] = (optionCHelper2>0) ? parkingOptionC["parkingFootprint"] : parkingOptionB["parkingFootprint"]; //b153
	preUnderbuild["unusedFootprint"] = (optionCHelper2>0) ? parkingOptionC["unusedFootprint"] : parkingOptionB["unusedFootprint"]; //b154
	
	//Adjustment Factors
	parkingOptionC_Aid5["unusedFootprint"] = preUnderbuild["unusedFootprint"]; //b127
	parkingOptionC_Aid5["bldgFootprint"] = 1000/physObj["buildingHeight"]/physObj["underbuildPerc"]; //b128
	parkingOptionC_Aid5["bldgParkingFootprint"] = parkingOptionC_Aid5["bldgFootprint"]+parkingOptionC["parkingMaxB"] //b129
	parkingOptionC_Aid5["additionalArea"] = 1000*parkingOptionC_Aid5["unusedFootprint"]/parkingOptionC_Aid5["bldgParkingFootprint"] //b130
	parkingOptionC_Aid5["additionalFootprint"] = parkingOptionC_Aid5["bldgFootprint"]*(parkingOptionC_Aid5["additionalArea"]/1000) //b131
	parkingOptionC_Aid5["additionalParking"] = parkingOptionC["parkingMaxB"]*parkingOptionC_Aid5["additionalArea"]/1000 //b132
	parkingOptionC_Aid5["adjustedVolume"] = parkingOptionC_Aid3["totalSf"]+parkingOptionC_Aid5["additionalArea"] //b133
	parkingOptionC_Aid5["adjustedSpaces"] = parkingOptionC_Aid3["totalSpaces"]+(parkingOptionC_Aid5["additionalParking"]/physObj["parkingAreaPerSf"]) //b134

	let optionCHelper4 = parkingOptionC_Aid5["adjustedVolume"]/parkingOptionC_Aid3["totalSf"];
	//Square Footage by Use (Adjusted)
	parkingOptionC_Aid4["residentialSf"] = parkingOptionC_Aid3["residentialSf"]*(optionCHelper4) //b138
	parkingOptionC_Aid4["residentialSpaces"] = parkingOptionC_Aid3["residentialSpaces"]*(optionCHelper4) //c138
	parkingOptionC_Aid4["retailSf"] = parkingOptionC_Aid3["retailSf"]*(optionCHelper4) //b139
	parkingOptionC_Aid4["retailSpaces"] = parkingOptionC_Aid3["retailSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["officeSf"] = parkingOptionC_Aid3["officeSf"]*(optionCHelper4) //b140
	parkingOptionC_Aid4["officeSpaces"] = parkingOptionC_Aid3["officeSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["industrialSf"] = parkingOptionC_Aid3["industrialSf"]*(optionCHelper4) //b141
	parkingOptionC_Aid4["industrialSpaces"] = parkingOptionC_Aid3["industrialSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["publicSf"] = parkingOptionC_Aid3["publicSf"]*(optionCHelper4) //b142
	parkingOptionC_Aid4["publicSpaces"] = parkingOptionC_Aid3["publicSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["educationalSf"] = parkingOptionC_Aid3["educationalSf"]*(optionCHelper4) //b143
	parkingOptionC_Aid4["educationalSpaces"] = parkingOptionC_Aid3["educationalSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["hotelSf"] = parkingOptionC_Aid3["hotelSf"]*(optionCHelper4) //b144
	parkingOptionC_Aid4["hotelSpaces"] = parkingOptionC_Aid3["hotelSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["commercialParkingSf"] = parkingOptionC_Aid3["commercialParkingSf"]*(optionCHelper4) //b145
	parkingOptionC_Aid4["commercialParkingSpaces"] = parkingOptionC_Aid3["commercialParkingSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["internalParkingSf"] = parkingOptionC_Aid3["internalParkingSf"]*(optionCHelper4)
	parkingOptionC_Aid4["internalParkingSpaces"] = parkingOptionC_Aid3["internalParkingSpaces"]*(optionCHelper4)
	parkingOptionC_Aid4["totalSf"] = parkingOptionC_Aid4["residentialSf"] + parkingOptionC_Aid4["retailSf"] + parkingOptionC_Aid4["officeSf"] + parkingOptionC_Aid4["industrialSf"] + parkingOptionC_Aid4["publicSf"] + parkingOptionC_Aid4["educationalSf"] + parkingOptionC_Aid4["hotelSf"] + parkingOptionC_Aid4["commercialParkingSf"] + parkingOptionC_Aid4["internalParkingSf"];
	parkingOptionC_Aid4["totalSpaces"] = parkingOptionC_Aid4["residentialSpaces"] + parkingOptionC_Aid4["officeSpaces"] + parkingOptionC_Aid4["retailSpaces"] + parkingOptionC_Aid4["industrialSpaces"] + parkingOptionC_Aid4["publicSpaces"] + parkingOptionC_Aid4["educationalSpaces"] + parkingOptionC_Aid4["hotelSpaces"];
	
	//end parkingOptionC
	
	// Site Summary
	// Post-Underbuild
	postUnderbuild["buildingFootprint"] = preUnderbuild["buildingFootprint"] //b158
	postUnderbuild["lanscapeFootprint"] = preUnderbuild["lanscapeFootprint"] //b159
	postUnderbuild["parkingFootprint"] = preUnderbuild["parkingFootprint"]*physObj["underbuildPerc"] //b160
	postUnderbuild["unusedFootprint"] = physObj["siteArea"]-(postUnderbuild["buildingFootprint"]+postUnderbuild["lanscapeFootprint"]+postUnderbuild["parkingFootprint"])-landUses["streets"] //b161
	
	// Adjusted
	adjustedSummary["buildingFootprint"] = postUnderbuild["buildingFootprint"] + parkingOptionC_Aid5["additionalFootprint"] //b164
	adjustedSummary["lanscapeFootprint"] = postUnderbuild["lanscapeFootprint"] //b165
	adjustedSummary["parkingFootprint"] = parkingOptionC_Aid5["additionalParking"]+postUnderbuild["parkingFootprint"] //b166
	adjustedSummary["unusedFootprint"] = 0; //b167
	
	let optionCHelper5 = parkingOptionC_Aid4["residentialSpaces"] + parkingOptionC_Aid4["retailSpaces"] + parkingOptionC_Aid4["officeSpaces"] + parkingOptionC_Aid4["industrialSpaces"] + parkingOptionC_Aid4["publicSpaces"] + parkingOptionC_Aid4["educationalSpaces"] + parkingOptionC_Aid4["hotelSpaces"];

	//Parking Space Adjustments
	adjustedParkingSpaces["residentialRequired"] = parkingOptionC_Aid4["residentialSpaces"]
	adjustedParkingSpaces["retailRequired"] = parkingOptionC_Aid4["retailSpaces"]
	adjustedParkingSpaces["officeRequired"] = parkingOptionC_Aid4["officeSpaces"]
	adjustedParkingSpaces["industrialRequired"] = parkingOptionC_Aid4["industrialSpaces"]
	adjustedParkingSpaces["publicRequired"] = parkingOptionC_Aid4["publicSpaces"]
	adjustedParkingSpaces["educationalRequired"] = parkingOptionC_Aid4["educationalSpaces"]
	adjustedParkingSpaces["hotelRequired"] = parkingOptionC_Aid4["hotelSpaces"] 
	adjustedParkingSpaces["structuredProvided"] = (parkingOptionC["aboveGrade"]>0) ? ((adjustedSummary["parkingFootprint"]*physObj["surfaceParkingLvls"])/physObj["parkingAreaPerSf"]) : 0;
	adjustedParkingSpaces["undergroundProvided"] = parkingOptionA_Aids["undergroundParkingProvided"]
	adjustedParkingSpaces["commercialProvided"] = parkingOptionC_Aid4["commercialParkingSpaces"]
	adjustedParkingSpaces["commercialRequired"] = parkingOptionC_Aid4["commercialParkingSpaces"]
	adjustedParkingSpaces["internalProvided"] = parkingOptionC_Aid4["internalParkingSpaces"]
	adjustedParkingSpaces["totalProvided"] = adjustedParkingSpaces["structuredProvided"] + adjustedParkingSpaces["undergroundProvided"] + adjustedParkingSpaces["internalProvided"];
	adjustedParkingSpaces["totalRequired"] = (physObj["undergroundParkingLvls"]+physObj["surfaceParkingLvls"]+physObj["internalParkingLvls"] === 0) ? 0 : optionCHelper5
	adjustedParkingSpaces["totalExcess"] = adjustedParkingSpaces["totalProvided"]-adjustedParkingSpaces["totalRequired"]
	
	adjustedSpaces["underground"] = ((parkingOptionA_Aids["undergroundParkingProvided"] - adjustedParkingSpaces["totalExcess"]) > 0) ? (parkingOptionA_Aids["undergroundParkingProvided"] - adjustedParkingSpaces["totalExcess"] ) : 0 //b171
	adjustedSpaces["commercialParking"] = parkingOptionC_Aid4["commercialParkingSpaces"] //b172
	adjustedSpaces["internal"] = parkingOptionC_Aid4["internalParkingSpaces"]  //b173
	adjustedSpaces["surface"] = (adjustedParkingSpaces["totalRequired"]>(adjustedSpaces["underground"] + adjustedSpaces["internal"])) ? (adjustedParkingSpaces["totalRequired"]-(adjustedSpaces["underground"] + adjustedSpaces["internal"])) : 0 //b170
	
	
	adjustedParkingFootprint["surfaceArea"] = adjustedSpaces["surface"]*physObj["parkingAreaPerSf"] //b192
	adjustedParkingFootprint["surfaceFootprint"] = (adjustedParkingFootprint["surfaceArea"] < physObj["parkingAreaPerSf"]) ? 0 : (adjustedParkingFootprint["surfaceArea"] / physObj["surfaceParkingLvls"])
	adjustedParkingFootprint["undergroundArea"] = 0;	//b193
	adjustedParkingFootprint["undergroundFootprint"] = (adjustedSpaces["underground"]*physObj["parkingAreaPerSf"])/landUses["totalLotSize"] //c193


}

export const updateMathModule = (obj) => {
	updateBuildingEnvelope( obj.physicalInfo, obj.basicFinInfo, obj.advFinInfo );
	updatePhysicalOutputs(obj.physicalInfo, obj.basicFinInfo, obj.advFinInfo );
	updateDevelopmentCosts( obj.physicalInfo, obj.basicFinInfo, obj.advFinInfo );
	updateMixedUseSummary( obj.physicalInfo, obj.basicFinInfo, obj.advFinInfo );
}
export const buildingLotCoverage = (siteArea) => {
	// console.log(siteArea);
	// console.log(adjustedSummary['buildingFootprint']);
	let finalLotCoverage = adjustedSummary['buildingFootprint'] / siteArea;
	return (isNaN(finalLotCoverage) ? 0 : finalLotCoverage);
};
export const landscapeLotCoverage = (siteArea) => {
	let finalLandscapeCoverage = adjustedSummary["lanscapeFootprint"]/siteArea;
	return (isNaN(finalLandscapeCoverage) ? 0 : finalLandscapeCoverage);
};
export const parkingLotCoverage = (siteArea) => {
	let finalParkingCoverage = adjustedSummary["parkingFootprint"]/siteArea;
	return finalParkingCoverage;
};

let grossSfTotal = 0;
export const getFAR = (siteArea, advFinInfo) => {
	let { retailRentalPerc, officeRentalPerc, industrialRentalPerc, publicRentalPerc, educationRentalPerc, hotelRentalPerc, parkingRentalPerc } = advFinInfo;

	grossSfTotal = 
		(parkingOptionC_Aid4["residentialSf"]*maxBuildingEnvelope["residentialUnderbuild"])	+
		(parkingOptionC_Aid4["retailSf"]*retailRentalPerc)	+
		(parkingOptionC_Aid4["officeSf"]*officeRentalPerc)	+
		(parkingOptionC_Aid4["industrialSf"]*industrialRentalPerc) 	+
		(parkingOptionC_Aid4["publicSf"]*publicRentalPerc)	+
		(parkingOptionC_Aid4["educationalSf"]*educationRentalPerc)	+
		(parkingOptionC_Aid4["hotelSf"]*hotelRentalPerc)	+
		(parkingOptionC_Aid4["commercialParkingSf"]*parkingRentalPerc)	+
		(adjustedParkingFootprint["surfaceArea"]-adjustedParkingFootprint["surfaceFootprint"]);
		// parkingOptionC_Aid4["internalParkingSf"];

	return grossSfTotal/siteArea;
}
export const getTotalSf = ( ) => {
	return grossSfTotal;
}
export const getResidentialSfMix = () => {
	return parkingOptionC_Aid4["residentialSf"]/grossSfTotal;
}
export const getRetailSfMix = () => {

	return parkingOptionC_Aid4["retailSf"]/grossSfTotal;
}
export const getOfficeSfMix = () => {
	return parkingOptionC_Aid4["officeSf"]/grossSfTotal;
}
export const getIndustrialSfMix = () => {
	return parkingOptionC_Aid4["industrialSf"]/grossSfTotal;
}
export const getPublicSfMix = () => {
	return parkingOptionC_Aid4["publicSf"]/grossSfTotal;
}
export const getEducationalSfMix = () => {
	return parkingOptionC_Aid4["educationalSf"]/grossSfTotal;
}
export const getHotelSfMix = () => {
	return parkingOptionC_Aid4["hotelSf"]/grossSfTotal;
}
export const getCommercialParkingSfMix = () => {
	return parkingOptionC_Aid4["commercialParkingSf"]/grossSfTotal;
}
export const getInternalParkingSfMix = () => {
	return (adjustedParkingFootprint["surfaceArea"]-adjustedParkingFootprint["surfaceFootprint"]+parkingOptionC_Aid4["internalParkingSf"])/grossSfTotal;
}
export const getResidentialNetUnit = (residentialUnitSize) => {
	let c28 = parkingOptionC_Aid4["residentialSf"]*maxBuildingEnvelope["residentialUnderbuild"];
	let d28 = (residentialUnitSize === 0) ? 0 : c28/residentialUnitSize;

	return ( (c28 === 0) ? 0 : c28/d28 );
}
export const getResidentialGrossUnit = (residentialUnitSize) => {
	let b28 = parkingOptionC_Aid4["residentialSf"];
	let c28 = parkingOptionC_Aid4["residentialSf"]*maxBuildingEnvelope["residentialUnderbuild"];
	let d28 = (residentialUnitSize === 0) ? 0 : c28/residentialUnitSize;

	return ( (b28 === 0) ? 0 :b28/d28)
}
export const getResidentialDwellUnit = (physicalInfo, advFinInfo) => {
	let { siteArea, residentialUnitSize, hotelAreaPerRoom, parkingAreaPerEmp } = physicalInfo;
	let { hotelRentalPerc, parkingRentalPerc } = advFinInfo;

	let c28 = parkingOptionC_Aid4["residentialSf"]*maxBuildingEnvelope["residentialUnderbuild"];
	let c34 = parkingOptionC_Aid4["hotelSf"]*hotelRentalPerc;
	let c35 = parkingOptionC_Aid4["commercialParkingSf"]*parkingRentalPerc;
	let siteAreaAcre = siteArea / 43560;
	let total = 
		(((residentialUnitSize === 0) ? 0 : c28/residentialUnitSize) / siteAreaAcre) +
		(((hotelAreaPerRoom === 0) ? 0 : c34/residentialUnitSize) / siteAreaAcre) +
		(((parkingAreaPerEmp === 0) ? 0 : c35/residentialUnitSize) / siteAreaAcre);
	return total;
}

export const getHouseholdAffordability = (physicalInfo, basicFinInfo) => {
	let { occupancyType } = physicalInfo; 
	let { monthlyRentPerSf } = basicFinInfo;
	let perc = (occupancyType === 'Renter' ? 
		   		// ($'Input Calculators'.B59 === monthlyRentPerSf ? $'Input Calculators'.C42 : 0)
		   		(residentialRentEstimator["avgMonthlyRentCalc"] === monthlyRentPerSf ? residentialUnitSizeEst["affordPerc"] : 0)
			 	: 0);
	return perc;
}

export const getHouseholdEstIncome = (physicalInfo, basicFinInfo) =>{
	let { monthlyRentPerSf, salesPricePerSf } = basicFinInfo;
	let { occupancyType, residentialUnitSize } = physicalInfo; 
	if (occupancyType === 'Renter' ){
		return getResidentialNetUnit(residentialUnitSize)*monthlyRentPerSf*12*3;
	} else if  (occupancyType === 'Owner' ){
		return getResidentialNetUnit(residentialUnitSize)*salesPricePerSf*0.006*12*3;
	} else {
		return ( (getResidentialNetUnit(residentialUnitSize)*monthlyRentPerSf*12*3) + (getResidentialNetUnit(residentialUnitSize)*salesPricePerSf*0.006*12*3))/2
	}

}

export const getJobsPerSf = (physicalInfo) => {
	let { siteArea, retailAreaPerEmp, officeAreaPerEmp, industrialAreaPerEmp, publicAreaPerEmp, educationAreaPerEmp, hotelAreaPerEmp, parkingAreaPerEmp } = physicalInfo; 
	let g29 = (retailAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["retailSf"]/retailAreaPerEmp)/siteArea);
	let g30 = (officeAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["officeSf"]/officeAreaPerEmp)/siteArea);
	let g31 = (industrialAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["industrialSf"]/industrialAreaPerEmp)/siteArea);
	let g32 = (publicAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["publicSf"]/publicAreaPerEmp)/siteArea);
	let g33 = (educationAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["educationalSf"]/educationAreaPerEmp)/siteArea);
	let g34 = (hotelAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["hotelSf"]/hotelAreaPerEmp)/siteArea);
	let g35 = (parkingAreaPerEmp === 0 ? 0 : (parkingOptionC_Aid4["commercialParkingSf"]/parkingAreaPerEmp)/siteArea);

	let jpa = g29+g30+g31+g32+g33+g34+g35;
	return jpa;
}

export const getHotelEmpPerSf = (physicalInfo, advFinInfo) => {
	let { hotelAreaPerRoom } = physicalInfo;
	let { hotelRentalPerc } = advFinInfo;
	return ( hotelAreaPerRoom === 0 ? 0 : (parkingOptionC_Aid4["hotelSf"]*hotelRentalPerc)/hotelAreaPerRoom);
}

export const getHotelNetPerSf = (physicalInfo, advFinInfo) => {
	let { hotelAreaPerRoom } = physicalInfo;
	let { hotelRentalPerc } = advFinInfo;
	let c34 = parkingOptionC_Aid4["hotelSf"]*hotelRentalPerc;
	let d34 = (hotelAreaPerRoom === 0) ? 0 : c34/hotelAreaPerRoom;
	if ( c34 === 0 ){
		return 0;
	} else {
		return (c34 / d34);
	}
}

export const getHotelGrossPerSf = (physicalInfo, advFinInfo) => {
	let { hotelAreaPerRoom } = physicalInfo;	
	let { hotelRentalPerc } = advFinInfo;
	let c34 = parkingOptionC_Aid4["hotelSf"]*hotelRentalPerc;	
	let d34 = (hotelAreaPerRoom === 0) ? 0 : c34/hotelAreaPerRoom;
	if ( parkingOptionC_Aid4["hotelSf"] === 0 ){
		return 0;
	} else {
		return (parkingOptionC_Aid4["hotelSf"] / d34);
	}
}

export const getParkingSpaces = () => {
	return parkingOptionC_Aid4["totalSpaces"];
}

export const getParkingSf = (physicalInfo) =>{
	let { parkingAreaPerSf } = physicalInfo;
	
	return parkingOptionC_Aid4["totalSpaces"]*parkingAreaPerSf;	
}

export const getInternalStructureParkingSf = () => {
	let b36 = adjustedParkingFootprint["surfaceArea"]-adjustedParkingFootprint["surfaceFootprint"];
	let b37 = parkingOptionC_Aid4["internalParkingSf"];
	return b36+b37;
}

let siteLevelOutputs = {
	buildingFootprintSf: 0,
	landscapingFootprintSf: 0,
	parkingByBuildingSf: 0,
	netToGrossReductionSf: 0,
	useableBuildingTotalSf: 0,
	buildingFootprintPerc: 0,
	landscapingFootprintPerc: 0,
	parkingByBuildingPerc: 0,
	netToGrossReductionPerc: 0
}

let totalGrossSf = {
	residential: 0,
	retail: 0,
	office: 0,
	industrial: 0,
	public: 0,
	educational: 0,
	hotel: 0,
	commercialParking: 0,
	structuredParking: 0,
	internalParking: 0,
	total: 0
}
let totalNetSf = {
	residential: 0,
	retail: 0,
	office: 0,
	industrial: 0,
	public: 0,
	educational: 0,
	hotel: 0,
	commercialParking: 0,
	structuredParking: 0,
	internalParking: 0,
	total: 0
}
let totalDwellingOrHotelUnits = {
	residential: 0,
	hotel: 0,
	commercialParking: 0,
	total: 0
}

let totalJobsByLandUse = {
	retail: 0,
	office: 0,
	industrial: 0,
	public: 0,
	educational: 0,
	hotel: 0,
	commercialParking: 0,
	total: 0
}

let parkingSpacesByLandUse = {
	residentialSpaces: 0,
	retailSpaces: 0,
	officeSpaces: 0,
	industrialSpaces: 0,
	publicSpaces: 0,
	educationalSpaces: 0,
	hotelSpaces: 0,
	commercialParkingSpaces: 0,
	totalSpaces: 0,
	residentialSf: 0,
	retailSf: 0,
	officeSf: 0,
	industrialSf: 0,
	publicSf: 0,
	educationalSf: 0,
	hotelSf: 0,
	commercialParkingSf: 0,
	totalSf: 0
	}

let parkingSpacesByType = {
	surface: 0,
	structure: 0,
	underground: 0,
	commercial: 0,
	internal: 0
}

export const updatePhysicalOutputs = ( physicalInfo, basicFinInfo, advFinInfo ) => {
	let { siteArea, siteNetToGross } = physicalInfo;
	
	siteLevelOutputs["buildingFootprintSf"] = adjustedSummary["buildingFootprint"];
	siteLevelOutputs["landscapingFootprintSf"] = adjustedSummary["lanscapeFootprint"];
	siteLevelOutputs["parkingByBuildingSf"] = adjustedSummary["parkingFootprint"];
	siteLevelOutputs["netToGrossReductionSf"] = siteArea*(1 - siteNetToGross);

	let siteTotal = siteLevelOutputs["buildingFootprintSf"] + siteLevelOutputs["landscapingFootprintSf"] + siteLevelOutputs["parkingByBuildingSf"] + siteLevelOutputs["netToGrossReductionSf"];
	siteLevelOutputs["buildingFootprintPerc"] = siteLevelOutputs["buildingFootprintSf"]/siteTotal;
	siteLevelOutputs["landscapingFootprintPerc"] = siteLevelOutputs["landscapingFootprintSf"]/siteTotal;
	siteLevelOutputs["parkingByBuildingPerc"] = siteLevelOutputs["parkingByBuildingSf"]/siteTotal;
	siteLevelOutputs["netToGrossReductionPerc"] = siteLevelOutputs["netToGrossReductionSf"]/siteTotal;

	totalGrossSf["residential"] = parkingOptionC_Aid4["residentialSf"];
	totalGrossSf["retail"] = parkingOptionC_Aid4["retailSf"];
	totalGrossSf["office"] = parkingOptionC_Aid4["officeSf"];
	totalGrossSf["industrial"] = parkingOptionC_Aid4["industrialSf"];
	totalGrossSf["public"] = parkingOptionC_Aid4["publicSf"];
	totalGrossSf["educational"] = parkingOptionC_Aid4["educationalSf"];
	totalGrossSf["hotel"] = parkingOptionC_Aid4["hotelSf"];
	totalGrossSf["commercialParking"] = parkingOptionC_Aid4["commercialParkingSf"];
	totalGrossSf["structuredParking"] = adjustedParkingFootprint["surfaceArea"] - adjustedParkingFootprint["surfaceFootprint"];
	totalGrossSf["internalParking"] = parkingOptionC_Aid4["internalParkingSf"];

	let { retailRentalPerc, officeRentalPerc, industrialRentalPerc, 
		publicRentalPerc, educationRentalPerc, hotelRentalPerc, parkingRentalPerc } = advFinInfo;
	totalNetSf["residential"] = totalGrossSf["residential"]*maxBuildingEnvelope["residentialUnderbuild"];
	totalNetSf["retail"] = totalGrossSf["retail"]*retailRentalPerc;
	totalNetSf["office"] = totalGrossSf["office"]*officeRentalPerc;
	totalNetSf["industrial"] = totalGrossSf["industrial"]*industrialRentalPerc;
	totalNetSf["public"] = totalGrossSf["public"]*publicRentalPerc;
	totalNetSf["educational"] = totalGrossSf["educational"]*educationRentalPerc;
	totalNetSf["hotel"] = totalGrossSf["hotel"]*hotelRentalPerc;
	totalNetSf["commercialParking"] = totalGrossSf["commercialParking"]*parkingRentalPerc;
	totalNetSf["structuredParking"] = totalGrossSf["structuredParking"];
	totalNetSf["internalParking"] = totalGrossSf["internalParking"];
	
	let { residentialUnitSize, hotelAreaPerRoom, parkingAreaPerEmp,
		retailAreaPerEmp, officeAreaPerEmp, industrialAreaPerEmp, publicAreaPerEmp, 
		educationAreaPerEmp, hotelAreaPerEmp, parkingAreaPerSf } = physicalInfo;
	totalDwellingOrHotelUnits["residential"] = (residentialUnitSize === 0 ? 0 : totalNetSf["residential"]/residentialUnitSize);
	totalDwellingOrHotelUnits["hotel"] = (hotelAreaPerRoom === 0 ? 0 : totalNetSf["hotel"]/hotelAreaPerRoom);
	totalDwellingOrHotelUnits["commercialParking"] = (parkingAreaPerEmp === 0 ? 0 : totalNetSf["commercialParking"]/parkingAreaPerEmp);
	totalDwellingOrHotelUnits["total"] = totalDwellingOrHotelUnits["residential"]+totalDwellingOrHotelUnits["hotel"]+totalDwellingOrHotelUnits["commercialParking"];

	totalJobsByLandUse["retail"] = (retailAreaPerEmp === 0 ? 0 : totalGrossSf["retail"]/retailAreaPerEmp);
	totalJobsByLandUse["office"] = (officeAreaPerEmp === 0 ? 0 : totalGrossSf["office"]/officeAreaPerEmp);
	totalJobsByLandUse["industrial"] = (industrialAreaPerEmp === 0 ? 0 : totalGrossSf["industrial"]/industrialAreaPerEmp);
	totalJobsByLandUse["public"] = (publicAreaPerEmp === 0 ? 0 : totalGrossSf["public"]/publicAreaPerEmp);
	totalJobsByLandUse["educational"] = (educationAreaPerEmp === 0 ? 0 : totalGrossSf["educational"]/educationAreaPerEmp);
	totalJobsByLandUse["hotel"] = (hotelAreaPerEmp === 0 ? 0 : totalGrossSf["hotel"]/hotelAreaPerEmp);
	totalJobsByLandUse["commercialParking"] = (parkingAreaPerEmp === 0 ? 0 : totalGrossSf["commercialParking"]/parkingAreaPerEmp);
	totalJobsByLandUse["total"] = totalJobsByLandUse["retail"] +totalJobsByLandUse["office"]+totalJobsByLandUse["industrial"]+totalJobsByLandUse["public"]+totalJobsByLandUse["educational"] +totalJobsByLandUse["hotel"]+totalJobsByLandUse["commercialParking"]
	
	let b36 = adjustedParkingFootprint["surfaceArea"]-adjustedParkingFootprint["surfaceFootprint"];
	let z3 = adjustedSpaces["surface"]*adjustedParkingFootprint["surfaceFootprint"]/adjustedParkingFootprint["surfaceArea"];;
	let z2 = adjustedSpaces["surface"]*b36/adjustedParkingFootprint["surfaceArea"];
	parkingSpacesByType["surface"] = ( z3 === 0 ? 0 : z3);
	parkingSpacesByType["structure"] = ( z2 === 0 ? 0 : z2);
	parkingSpacesByType["underground"] = adjustedSpaces["underground"]
	parkingSpacesByType["commercial"] = adjustedSpaces["commercialParking"]
	parkingSpacesByType["internal"] = adjustedSpaces["internal"]

	
	parkingSpacesByLandUse["residentialSpaces"] = parkingOptionC_Aid4["residentialSpaces"];
	parkingSpacesByLandUse["retailSpaces"] = parkingOptionC_Aid4["retailSpaces"];
	parkingSpacesByLandUse["officeSpaces"] = parkingOptionC_Aid4["officeSpaces"];
	parkingSpacesByLandUse["industrialSpaces"] = parkingOptionC_Aid4["industrialSpaces"];
	parkingSpacesByLandUse["publicSpaces"] = parkingOptionC_Aid4["publicSpaces"];
	parkingSpacesByLandUse["educationalSpaces"] = parkingOptionC_Aid4["educationalSpaces"];
	parkingSpacesByLandUse["hotelSpaces"] = parkingOptionC_Aid4["hotelSpaces"];
	parkingSpacesByLandUse["commercialParkingSpaces"] = parkingOptionC_Aid4["commercialParkingSpaces"];
	parkingSpacesByLandUse["totalSpaces"] = parkingSpacesByLandUse["residentialSpaces"] + parkingSpacesByLandUse["retailSpaces"] + parkingSpacesByLandUse["officeSpaces"] + parkingSpacesByLandUse["industrialSpaces"] + parkingSpacesByLandUse["publicSpaces"] + parkingSpacesByLandUse["educationalSpaces"] + parkingSpacesByLandUse["hotelSpaces"] + parkingSpacesByLandUse["commercialParkingSpaces"]



	parkingSpacesByLandUse["residentialSf"] = parkingAreaPerSf*parkingSpacesByLandUse["residentialSpaces"]
	parkingSpacesByLandUse["retailSf"] = parkingAreaPerSf*parkingSpacesByLandUse["retailSpaces"]
	parkingSpacesByLandUse["officeSf"] = parkingAreaPerSf*parkingSpacesByLandUse["officeSpaces"]
	parkingSpacesByLandUse["industrialSf"] = parkingAreaPerSf*parkingSpacesByLandUse["industrialSpaces"]
	parkingSpacesByLandUse["publicSf"] = parkingAreaPerSf*parkingSpacesByLandUse["publicSpaces"]
	parkingSpacesByLandUse["educationalSf"] = parkingAreaPerSf*parkingSpacesByLandUse["educationalSpaces"]
	parkingSpacesByLandUse["hotelSf"] = parkingAreaPerSf*parkingSpacesByLandUse["hotelSpaces"]
	parkingSpacesByLandUse["commercialParkingSf"] = parkingAreaPerSf*parkingSpacesByLandUse["commercialParkingSpaces"]
	parkingSpacesByLandUse["totalSf"] = parkingSpacesByLandUse["residentialSf"] + parkingSpacesByLandUse["retailSf"] + parkingSpacesByLandUse["officeSf"] + parkingSpacesByLandUse["industrialSf"] + parkingSpacesByLandUse["publicSf"] + parkingSpacesByLandUse["educationalSf"] + parkingSpacesByLandUse["hotelSf"] + parkingSpacesByLandUse["commercialParkingSf"];

}

// PROJECT DEVELOPMENT COSTS		
// Pre Development Costs	
let preDevelopmentCosts = {
	dueDiligence: 0,
	landCarry: 0,
	landEntitlement: 0,
	professionalFees: 0,
	rawLand: 0
}

// Development Costs
let developmentCosts = {
	demolition: 0,
	siteDevelopment: 0,
	brownfieldRemediation: 0,
	residentialConstruction: 0,
	retailConstruction: 0,
	officeConstruction: 0,
	industrialConstruction: 0,
	publicConstruction: 0,
	educationConstruction: 0,
	hotelConstruction: 0,
	additionalInfrastructure: 0,
	parkingConstruction: 0,
	waterQualityControls: 0,
	impactFees: 0,
	buildingPermits: 0,
	insuranceDuringConstruction: 0,
	taxesDuringConstruction: 0
}
	
// Developer Fee	
// Contingency	
let develpomentFees = {
	developer: 0,
	contigency: 0
}

let developmentTotals = {
	buildingConstruction: 0,
	parkingConstruction: 0,
	totalProjectCosts: 0
}

let costAllocation = {
	residential: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	retail: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	office: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	industrial: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	public: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	educational: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	hotel: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	parking: {
		devAndLand: 0,
		parking: 0,
		total: 0
	},
	percent : {
		residential: 0,
		retail: 0,
		office: 0,
		industrial: 0,
		public: 0,
		educational: 0,
		hotel: 0,
		parking: 0,
	},
	grand: {
		total: 0
	}
}
export const updateDevelopmentCosts = (physicalInfo, basicFinInfo, advFinInfo) => {
	let { devBrownfieldRemediationCosts, devDemolitionCosts, devSiteDevelopmentCosts, devAdditionalInfraEnhancement, additonalImpactFees } = advFinInfo;
	let { siteArea } = physicalInfo;
	let { residentialConCosts, retailConCosts, officeConCosts,	industrialConCosts,	publicConCosts,	educationConCosts,	hotelConCosts, parkingConCosts } = basicFinInfo;
	developmentCosts["demolition"] = -1 * devDemolitionCosts; //=-$'Advanced Financial'.B45
	developmentCosts["siteDevelopment"] = -1 * (siteArea*devSiteDevelopmentCosts);
	developmentCosts["brownfieldRemediation"] = -1 * (devBrownfieldRemediationCosts*siteArea) //=-$'Advanced Financial'.B47*$'Physical Inputs'.B26
	developmentCosts["residentialConstruction"] = -1 * (residentialConCosts* parkingOptionC_Aid4["residentialSpaces"]);
	developmentCosts["retailConstruction"] = -1 * (retailConCosts* parkingOptionC_Aid4["retailSpaces"])
	developmentCosts["officeConstruction"] = -1 * (officeConCosts* parkingOptionC_Aid4["officeSpaces"])
	developmentCosts["industrialConstruction"] = -1 * (industrialConCosts* parkingOptionC_Aid4["industrialSpaces"])
	developmentCosts["publicConstruction"] = -1 * (publicConCosts* parkingOptionC_Aid4["publicSpaces"])
	developmentCosts["educationConstruction"] = -1 * (educationConCosts* parkingOptionC_Aid4["educationalSpaces"])
	developmentCosts["hotelConstruction"] = -1 * (hotelConCosts* parkingOptionC_Aid4["hotelSpaces"])
	developmentCosts["additionalInfrastructure"] = -1 * devAdditionalInfraEnhancement;
	
	
	let { surfaceParkingCostSpace, landImpCostsPerSf } = basicFinInfo;
	developmentCosts["parkingConstruction"] = (-1 * surfaceParkingCostSpace*parkingSpacesByType["surface"]) + 
			(-1 * basicFinInfo["structureParkingCostSpace"]*parkingSpacesByType["structure"]) + 
			(-1 * basicFinInfo["undergroundParkingCostSpace"]*parkingSpacesByType["underground"]) + 
			(-1 * basicFinInfo["internalParkingCostSpace"]*parkingSpacesByType["commercial"]) + 
			(-1 * basicFinInfo["parkingConCosts"]*parkingSpacesByType["internal"]);
	let totalDevelopmentCosts = developmentCosts["demolition"] + developmentCosts["siteDevelopment"] + developmentCosts["brownfieldRemediation"] + developmentCosts["residentialConstruction"] + developmentCosts["retailConstruction"] + developmentCosts["officeConstruction"] + developmentCosts["industrialConstruction"] + developmentCosts["publicConstruction"] + developmentCosts["educationConstruction"] + developmentCosts["hotelConstruction"] + developmentCosts["additionalInfrastructure"] + developmentCosts["parkingConstruction"]
	
	let { impactFeesPerUnit, impactFeesPerJob, impactFeesPerSf, buildingPermitFees, preDevDueDiligence,
		taxesDuringConstruction, insuranceDuringConstruction, developerFee, contingency	} = advFinInfo;
	developmentCosts["waterQualityControls"] = 0; //=-$'Green Infrastructure'.C68
	
	let impactFeeHelp = totalGrossSf["retail"] + totalGrossSf["office"] + totalGrossSf["industrial"] + totalGrossSf["public"] + totalGrossSf["educational"] + totalGrossSf["hotel"]
	developmentCosts["impactFees"] = (-1 * additonalImpactFees) + 
					(-1 * (impactFeesPerUnit*totalDwellingOrHotelUnits["total"])) +
					(-1 * (impactFeesPerJob*totalJobsByLandUse["total"])) +
					(-1 * (impactFeesPerSf*impactFeeHelp));
	
	developmentCosts["buildingPermits"] = buildingPermitFees;
	developmentCosts["taxesDuringConstruction"] = -1 * (taxesDuringConstruction*landImpCostsPerSf)

	preDevelopmentCosts["dueDiligence"] = preDevDueDiligence;
	preDevelopmentCosts["rawLand"] = -1 * landImpCostsPerSf;
	preDevelopmentCosts["landCarry"] =  advFinInfo.preDevLandCarry * preDevelopmentCosts["rawLand"];
	preDevelopmentCosts["landEntitlement"] =  advFinInfo.preDevLandEntitlement * preDevelopmentCosts["rawLand"];
	preDevelopmentCosts["professionalFees"] =  advFinInfo.preDevProfessionalFees*totalDevelopmentCosts
	let totalPreDevelopmentCosts = preDevelopmentCosts["dueDiligence"] + preDevelopmentCosts["rawLand"] + preDevelopmentCosts["landCarry"] + preDevelopmentCosts["landEntitlement"] + preDevelopmentCosts["professionalFees"]

	developmentCosts["insuranceDuringConstruction"] = insuranceDuringConstruction*(totalPreDevelopmentCosts+totalDevelopmentCosts);

	let totalIndirectCosts = developmentCosts["impactFees"] + developmentCosts["buildingPermits"] + developmentCosts["taxesDuringConstruction"] + developmentCosts["insuranceDuringConstruction"];
	
	develpomentFees["developer"] = developerFee*(totalIndirectCosts+totalDevelopmentCosts);
	develpomentFees["contigency"] = contingency*(totalDevelopmentCosts);

	developmentTotals["buildingConstruction"] = totalDevelopmentCosts - developmentCosts["parkingConstruction"];
	developmentTotals["parkingConstruction"] = developmentCosts["parkingConstruction"];
	developmentTotals["totalProjectCosts"] = totalDevelopmentCosts + totalPreDevelopmentCosts + totalIndirectCosts;
	
	let { sitresidentialUsePerc,
		retailUsePerc,
		officeUsePerc,
		industrialUsePerc,
		publicUsePerc,
		educationUsePerc,
		hotelUsePerc,
		parkingUsePerceArea } = physicalInfo;
	
	let costAllocationVar = totalIndirectCosts + develpomentFees["developer"] + develpomentFees["contigency"] + developmentCosts["waterQualityControls"] + developmentCosts["additionalInfrastructure"]
	costAllocation["residential"]["devAndLand"] = developmentCosts["residentialConstruction"] + (costAllocationVar*sitresidentialUsePerc)
	costAllocation["retail"]["devAndLand"] = developmentCosts["retailConstruction"] + (costAllocationVar*retailUsePerc)
	costAllocation["office"]["devAndLand"] = developmentCosts["officeConstruction"] + (costAllocationVar*officeUsePerc)
	costAllocation["industrial"]["devAndLand"] = developmentCosts["industrialConstruction"] + (costAllocationVar*industrialUsePerc)
	costAllocation["public"]["devAndLand"] = developmentCosts["publicConstruction"] + (costAllocationVar*publicUsePerc)
	costAllocation["educational"]["devAndLand"] = developmentCosts["educationConstruction"] + (costAllocationVar*educationUsePerc)
	costAllocation["hotel"]["devAndLand"] = developmentCosts["hotelConstruction"] + (costAllocationVar*hotelUsePerc)
	costAllocation["parking"]["devAndLand"] = developmentCosts["additionalInfrastructure"] + (costAllocationVar*parkingUsePerceArea)
	
	let costAllocationVar2 = parkingOptionC_Aid4["residentialSpaces"] + parkingOptionC_Aid4["retailSpaces"] + parkingOptionC_Aid4["officeSpaces"] + parkingOptionC_Aid4["industrialSpaces"] + parkingOptionC_Aid4["publicSpaces"] + parkingOptionC_Aid4["educationalSpaces"] + parkingOptionC_Aid4["hotelSpaces"];
	let costAllocationVar3 = developmentCosts["parkingConstruction"] - (-1 * parkingOptionC_Aid4["commercialParkingSpaces"] * parkingConCosts)
	function getParkingCostAllocation(x){
		let solution = (costAllocationVar3)*(  x /costAllocationVar2);
		return ( solution === null ? 0 : solution);
	}
	costAllocation["residential"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["residentialSpaces"]);
	costAllocation["retail"]["parking"] =  getParkingCostAllocation(parkingOptionC_Aid4["retailSpaces"])
	costAllocation["office"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["officeSpaces"])
	costAllocation["industrial"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["industrialSpaces"])
	costAllocation["public"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["publicSpaces"])
	costAllocation["educational"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["educationalSpaces"])
	costAllocation["hotel"]["parking"] = getParkingCostAllocation(parkingOptionC_Aid4["hotelSpaces"])
	costAllocation["parking"]["parking"] = (-1 * parkingOptionC_Aid4["commercialParkingSpaces"] * parkingConCosts)
	
	costAllocation["residential"]["total"] = costAllocation["residential"]["devAndLand"] + costAllocation["residential"]["parking"];
	costAllocation["retail"]["total"] = costAllocation["retail"]["devAndLand"] + costAllocation["retail"]["parking"];
	costAllocation["office"]["total"] = costAllocation["office"]["devAndLand"] + costAllocation["office"]["parking"];
	costAllocation["industrial"]["total"] = costAllocation["industrial"]["devAndLand"] + costAllocation["industrial"]["parking"];
	costAllocation["public"]["total"] = costAllocation["public"]["devAndLand"] + costAllocation["public"]["parking"];
	costAllocation["educational"]["total"] = costAllocation["educational"]["devAndLand"] + costAllocation["educational"]["parking"];
	costAllocation["hotel"]["total"] = costAllocation["hotel"]["devAndLand"] + costAllocation["hotel"]["parking"];
	costAllocation["parking"]["total"] = costAllocation["parking"]["devAndLand"] + costAllocation["parking"]["parking"];
	costAllocation["grand"]["total"] = costAllocation["residential"]["total"] + costAllocation["retail"]["total"] + costAllocation["office"]["total"] + costAllocation["industrial"]["total"] + costAllocation["public"]["total"] + costAllocation["educational"]["total"] + costAllocation["hotel"]["total"] + costAllocation["parking"]["total"];

	costAllocation["percent"]["residential"] = costAllocation["residential"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["retail"] = costAllocation["retail"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["office"] = costAllocation["office"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["industrial"] = costAllocation["industrial"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["public"] = costAllocation["public"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["educational"] = costAllocation["educational"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["hotel"] = costAllocation["hotel"]["total"]/costAllocation["grand"]["total"]
	costAllocation["percent"]["parking"] = costAllocation["parking"]["total"]/costAllocation["grand"]["total"]
}
export const getParkingCostSf = () => {
	return -1 * developmentTotals["parkingConstruction"];
}


export const getTotalPrjValue = () => {
	let solution = -1 * developmentTotals["totalProjectCosts"]
	return solution;
}

let residentialOwnerROI = {
	// investment: {
	// 	targetReturn,
	// 	actualReturn,
	// }
	// publicLeveraging: {
	// 	taxCredits,
	// 	feeReductions,
	// 	grants,
	// }
	baseline: {
		projectCost: 0,
		interimFinancing: 0,
		developerEquity: 0,
		residentialUnits: 0,
		avgMarketPrice: 0,
		netSaleProceeds: 0,
		netProjectReturn: 0
	},
	performanceAssess: {
		projectReturn: 0,
		projectProfit: 0,
		netProjectReturn: 0,
		returnToEquity: 0,
		projectNetProfit: 0
	},
	leveragedPerformance: {
		publicLeveraging: 0,
		adjustedProjectCost: 0,
		developerEquity: 0,
		netProjectReturn: 0,
		projectRateReturn: 0,
		projectProfit: 0,
		returnToEquity: 0,
		equityProfit: 0
	},
	propTax: {
		projectMarketValue: 0,
		projectAssessedValue: 0,
		estimatedPropertyTaxes: 0
	}
}
let residentialRenterROI = {
	leveragingTools: {
		taxCreditsNetToProject: 0,
		feeReductions: 0,
		grants: 0,
		totalDevelopmentOffsets: 0, 
		netDevelopmentCosts: 0
	},
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}
}
let retailROI = {
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}
}
let officeROI = {
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}
}
let industrialROI = {
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}
}
let hotelROI = {
	leveragingTools: {
		taxCreditsNetToProject: 0,
		feeReductions: 0,
		grants: 0,
		totalDevelopmentOffsets: 0, 
		netDevelopmentCosts: 0
	},
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}
}
let commercialParking = {
	netOperatingIncome: {
		totalDevelopmentCosts: 0,
		developmentCostsUnit: 0,
		numberOfUnits: 0,
		monthlyRent: 0,
		totalProjectSize: 0,
		otherIncome: 0,
		lessVacancy: 0,
		lessConcessions: 0,
		lessOperatingCostsRent: 0,
		lessOperatingCostsProject: 0
	},
	operatingStatement: {
		lessPropertyTaxes: 0
	}}
export const updateMixedUseSummary = (physicalInfo, basicFinInfo, advFinInfo) => {
	let { occupancyType, residentialUnitSize } = physicalInfo;
	let { salesPricePerSf, testSubsidy, monthlyRentPerSf, monthlyParkingCost } = basicFinInfo;
	let { maxLTVOwner, projectReturnRateOwner, returnToEquityOwner, assessRatioTaxOwner, assessRatioTaxRenter, propTaxOwner,
		 propTaxRenter, assessRatioTaxRetail, propTaxOffice, assessRatioTaxOffice,
		 propTaxIndustrial, assessRatioTaxIndustrial, propTaxHotel, assessRatioTaxHotel, propTaxParking, assessRatioTaxParking } = advFinInfo;
	//update residentialOwnerROI = {}
	residentialOwnerROI["baseline"]["projectCost"] = (occupancyType === 'Owner' ? (-1*costAllocation["residential"]["total"]) : 0);
	residentialOwnerROI["baseline"]["interimFinancing"] = (1-maxLTVOwner)*residentialOwnerROI["baseline"]["projectCost"];
	residentialOwnerROI["baseline"]["developerEquity"] = residentialOwnerROI["baseline"]["projectCost"] - residentialOwnerROI["baseline"]["interimFinancing"]; 
	residentialOwnerROI["baseline"]["residentialUnits"] = (occupancyType === 'Owner' ? totalDwellingOrHotelUnits["total"] : 0);
	residentialOwnerROI["baseline"]["avgMarketPrice"] = residentialUnitSize*salesPricePerSf;
	residentialOwnerROI["baseline"]["netSaleProceeds"] = residentialOwnerROI["baseline"]["avgMarketPrice"]*residentialOwnerROI["baseline"]["residentialUnits"] //=B17*B18
	residentialOwnerROI["baseline"]["netProjectReturn"] = residentialOwnerROI["baseline"]["netSaleProceeds"]-residentialOwnerROI["baseline"]["projectCost"]; //=B19-B14

	residentialOwnerROI["performanceAssess"]["projectReturn"] = residentialOwnerROI["baseline"]["netProjectReturn"];
	residentialOwnerROI["performanceAssess"]["projectProfit"] = ( residentialOwnerROI["baseline"]["projectCost"] === 0 ? 0 : residentialOwnerROI["performanceAssess"]["projectReturn"]/residentialOwnerROI["baseline"]["projectCost"] )//=IF(B23=0,0,B24/B23)
	residentialOwnerROI["performanceAssess"]["netProjectReturn"] = residentialOwnerROI["performanceAssess"]["projectReturn"] - (residentialOwnerROI["baseline"]["projectCost"]*projectReturnRateOwner) //=B24-(B14*B3)
	residentialOwnerROI["performanceAssess"]["returnToEquity"] = (residentialOwnerROI["baseline"]["developerEquity"] === 0 ? 0 : residentialOwnerROI["performanceAssess"]["projectReturn"]/residentialOwnerROI["baseline"]["developerEquity"]);
	residentialOwnerROI["performanceAssess"]["projectNetProfit"] = residentialOwnerROI["baseline"]["netSaleProceeds"] - (returnToEquityOwner*residentialOwnerROI["baseline"]["developerEquity"]);	//=B27-(B4*B28)

	let publicFunds = 0 //taxCredits+ feeReductions+ grants
	residentialOwnerROI["leveragedPerformance"]["publicLeveraging"] = ( occupancyType === 'Renter' ? 0 : ( testSubsidy === 0 ? publicFunds : (testSubsidy*costAllocation["percent"]["residential"]) ))
	residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"] = residentialOwnerROI["baseline"]["projectCost"] - residentialOwnerROI["leveragedPerformance"]["publicLeveraging"];
	residentialOwnerROI["leveragedPerformance"]["developerEquity"] = (residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"]-residentialOwnerROI["baseline"]["interimFinancing"] < 0 ? 1 : residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"]-residentialOwnerROI["baseline"]["interimFinancing"])

	residentialOwnerROI["leveragedPerformance"]["netProjectReturn"] = residentialOwnerROI["baseline"]["netSaleProceeds"]-residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"];
	residentialOwnerROI["leveragedPerformance"]["projectRateReturn"] = (residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"] === 0 ? 0 : residentialOwnerROI["leveragedPerformance"]["netProjectReturn"]/residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"])
	residentialOwnerROI["leveragedPerformance"]["projectProfit"] = residentialOwnerROI["leveragedPerformance"]["netProjectReturn"] - (residentialOwnerROI["leveragedPerformance"]["adjustedProjectCost"]*projectReturnRateOwner);
	residentialOwnerROI["leveragedPerformance"]["returnToEquity"] = residentialOwnerROI["leveragedPerformance"]["netProjectReturn"]/residentialOwnerROI["leveragedPerformance"]["developerEquity"];
	residentialOwnerROI["leveragedPerformance"]["equityProfit"] = residentialOwnerROI["leveragedPerformance"]["netProjectReturn"]-(residentialOwnerROI["leveragedPerformance"]["developerEquity"]*returnToEquityOwner);
	
	//Year1
	residentialOwnerROI["propTax"]["projectMarketValue"] = residentialOwnerROI["baseline"]["netSaleProceeds"];
	residentialOwnerROI["propTax"]["projectAssessedValue"] = residentialOwnerROI["baseline"]["netSaleProceeds"]*assessRatioTaxOwner;
	residentialOwnerROI["propTax"]["estimatedPropertyTaxes"] = residentialOwnerROI["propTax"]["projectAssessedValue"]*propTaxOwner;

	//update residentialRenterROI = {}
	residentialRenterROI["leveragingTools"]["taxCreditsNetToProject"] = testSubsidy; //gap-financing
	residentialRenterROI["leveragingTools"]["feeReductions"] = testSubsidy; //gap-financing
	residentialRenterROI["leveragingTools"]["grants"] = testSubsidy*costAllocation["percent"]["residential"]; //gap-financing=IF($'Basic Financial'.$B$33=0,D6,IF($'Physical Inputs'.B35="Renter",$'Basic Financial'.$B$33*$'Development Costs'.E40,0))
	residentialRenterROI["leveragingTools"]["totalDevelopmentOffsets"] = residentialRenterROI["leveragingTools"]["taxCreditsNetToProject"]+residentialRenterROI["leveragingTools"]["feeReductions"]+residentialRenterROI["leveragingTools"]["grants"];
	
	residentialRenterROI["netOperatingIncome"]["numberOfUnits"] = ( occupancyType === 'Renter' ? totalDwellingOrHotelUnits["residential"] : 0)
	residentialRenterROI["netOperatingIncome"]["totalDevelopmentCosts"] = ( occupancyType === 'Renter' ? (-1 * costAllocation["residential"]["total"] ) : 0) / residentialRenterROI["netOperatingIncome"]["numberOfUnits"]
	residentialRenterROI["leveragingTools"]["netDevelopmentCosts"] = residentialRenterROI["netOperatingIncome"]["totalDevelopmentCosts"] - residentialRenterROI["leveragingTools"]["totalDevelopmentOffsets"]
	let monthlyRentCalc = (monthlyRentPerSf*residentialUnitSize)+monthlyParkingCost;
	residentialRenterROI["netOperatingIncome"]["monthlyRent"] = ( occupancyType === 'Renter' ? monthlyRentCalc : 0);
	// residentialRenterROI["netOperatingIncome"]["lessOperatingCostsProject"] = 
	residentialRenterROI["netOperatingIncome"]["lessOperatingCostsRent"] = residentialRenterROI["netOperatingIncome"]["lessOperatingCostsProject"]*residentialRenterROI["netOperatingIncome"]["numberOfUnits"]
	residentialRenterROI["operatingStatement"]["lessPropertyTaxes"] = residentialRenterROI["netOperatingIncome"]["totalDevelopmentCosts"]*propTaxRenter*assessRatioTaxRenter

		
	//update retailROI = {}
	retailROI["netOperatingIncome"]["totalDevelopmentCosts"] = -1 * costAllocation["retail"]["total"];
	retailROI["operatingStatement"]["lessPropertyTaxes"] = retailROI["operatingStatement"]["totalDevelopmentCosts"] * propTaxRenter * assessRatioTaxRetail;

	//update officeROI = {}
	officeROI["netOperatingIncome"]["totalDevelopmentCosts"] = -1 * costAllocation["office"]["total"];
	officeROI["operatingStatement"]["lessPropertyTaxes"] = officeROI["operatingStatement"]["totalDevelopmentCosts"] * propTaxOffice * assessRatioTaxOffice;

	//update industrialROI = {}
	industrialROI["netOperatingIncome"]["totalDevelopmentCosts"] = -1 * costAllocation["industrial"]["total"];
	industrialROI["operatingStatement"]["lessPropertyTaxes"] = industrialROI["operatingStatement"]["totalDevelopmentCosts"] * propTaxIndustrial * assessRatioTaxIndustrial;

	//update hotelROI = {}
	hotelROI["netOperatingIncome"]["totalDevelopmentCosts"] = -1 * costAllocation["hotel"]["total"];
	hotelROI["netOperatingIncome"]["netDevelopmentCosts"] = hotelROI["netOperatingIncome"]["totalDevelopmentCosts"] - hotelROI["leveragingTools"]["totalDevelopmentOffsets"];
	hotelROI["operatingStatement"]["lessPropertyTaxes"] = hotelROI["operatingStatement"]["netDevelopmentCosts"] * propTaxHotel * assessRatioTaxHotel;

	//update commercialParking = {}
	commercialParking["netOperatingIncome"]["totalDevelopmentCosts"] = -1 * costAllocation["parking"]["total"];
	commercialParking["operatingStatement"]["lessPropertyTaxes"] = commercialParking["operatingStatement"]["totalDevelopmentCosts"] * propTaxParking * assessRatioTaxParking;

}

export const getPropTaxRevenueYr = () => {
	let mixedUseSummaryC95 = commercialParking["operatingStatement"]["lessPropertyTaxes"]+retailROI["operatingStatement"]["lessPropertyTaxes"]+officeROI["operatingStatement"]["lessPropertyTaxes"]+industrialROI["operatingStatement"]["lessPropertyTaxes"]+hotelROI["operatingStatement"]["lessPropertyTaxes"]
	//, =$'Mixed-Use Summary'.C95+$'Residential Owner'.E54,
	return mixedUseSummaryC95 + residentialOwnerROI["propTax"]["estimatedPropertyTaxes"];
}

export const getTotalFees = () => {
	let solution = -1 * developmentCosts["impactFees"]
	return solution;
}

export const getSubsidy = (basicFinInfo) => {
	let { testSubsidy } = basicFinInfo;
	// let detailedSubsidy = =$'Mixed-Use Summary'.J17+$'Mixed-Use Summary'.H66+IF(OR(testSubsidy=0,testSubsidy=""),SUM($'Mixed-Use Summary'.C96:L100),0)
	let detailedSubsidy = 0;
	let solution = ( testSubsidy > 0 ? testSubsidy : detailedSubsidy)
	return solution;
}

export const getRateOfReturn = () => {
	//=$'Mixed-Use Summary'.O6,
		//=IFERROR(L122,0)
			//=IFERROR(IRR(B121:L121),0)
	return 0;
} 
export const getProjectReturn = () => {
	//=$'Mixed-Use Summary'.U5,
	return 0;
} 
export const getYIntercept = () => {
	//=INTERCEPT($'ROI Scenario'.B146:B147,$'ROI Scenario'.A146:A147),
	return 0;
} 
export const getSlope = () => {
	//=LINEST($'ROI Scenario'.B146:B147,$'ROI Scenario'.A146:A147)
	return 0;
} 