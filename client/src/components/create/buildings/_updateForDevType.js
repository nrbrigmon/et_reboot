import * as bm from './_buildingMathModule';

export const getBldgOutputs = (buildingCopy) => {
    let { physicalInfo, basicFinInfo, advFinInfo, uniqueId } = buildingCopy;
    
    // console.log('firing updateMathModule..?', buildingCopy);
    bm.updateMathModule(buildingCopy);
    // console.log('update math module done...', buildingCopy);

    return    {
        rBuildingID: uniqueId,
        rBuildingName: physicalInfo.buildingName,
        rLotSize: physicalInfo.siteArea,
        rLotLocation: physicalInfo.siteLocation,
        rBuildingLotCoverage: bm.buildingLotCoverage( physicalInfo.siteArea ),
        rLandscapeLotCoverage: bm.landscapeLotCoverage( physicalInfo.siteArea ),
        rParkingLotCoverage: bm.parkingLotCoverage( physicalInfo.siteArea ),
        rBuildingHeight: physicalInfo.buildingHeight,
        rFAR: bm.getFAR(physicalInfo.siteArea, advFinInfo),
        rTotalSf: bm.getTotalSf(advFinInfo),
        rResidentialSfMix: bm.getResidentialSfMix(),
        rRetailSfMix: bm.getRetailSfMix(),
        rOfficeSfMix: bm.getOfficeSfMix(),
        rIndustrialSfMix: bm.getIndustrialSfMix(),
        rPublicSfMix: bm.getPublicSfMix(),
        rEducationalSfMix: bm.getEducationalSfMix(),
        rHotelSfMix: bm.getHotelSfMix(),
        rCommercialParkingSfMix: bm.getCommercialParkingSfMix(),
        rInternalParkingSfMix: bm.getInternalParkingSfMix(),
        rResidentialSf: (bm.getTotalSf(advFinInfo)*bm.getResidentialSfMix()),
        rResidentialNetUnit: bm.getResidentialNetUnit(physicalInfo.residentialUnitSize),
        rResidentialGrossUnit: bm.getResidentialGrossUnit(physicalInfo.residentialUnitSize),
        rResidentialDwellUnit: bm.getResidentialDwellUnit(physicalInfo, advFinInfo),
        rHouseholdType: physicalInfo.residentialType,
        rHouseholdOwnerPerc: (physicalInfo.occupancyType === 'Renter' ? 0 : 1),
        rHouseholdRenterPerc: (physicalInfo.occupancyType === 'Owner' ? 0 : 1),
        rHouseholdAffordPerc: bm.getHouseholdAffordability(physicalInfo, basicFinInfo),
        rHouseholdEstIncome: bm.getHouseholdEstIncome(physicalInfo, basicFinInfo),
        rMonthlyRentSf: (physicalInfo.occupancyType === 'Renter' ? basicFinInfo.monthlyRentPerSf : 0),
        rMonthlyRent: (bm.getResidentialNetUnit(physicalInfo.residentialUnitSize) * basicFinInfo.monthlyRentPerSf),
        rSalesPriceSf: (physicalInfo.occupancyType === 'Owner' ? basicFinInfo.salesPricePerSf : 0),
        rSalesPrice: (bm.getResidentialNetUnit(physicalInfo.residentialUnitSize) * basicFinInfo.salesPricePerSf),
        rJobsPerSf: bm.getJobsPerSf(physicalInfo),
        rRetailSf: bm.getTotalSf(advFinInfo)*physicalInfo.retailUsePerc,
        rRetailLeaseRate: basicFinInfo.commercialRetailRentSf,
        rRetailSpacePerEmp: physicalInfo.retailAreaPerEmp,
        rRetailEmpPerSf: ( physicalInfo.retailAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.retailUsePerc)/physicalInfo.retailAreaPerEmp ),
        rOfficeSf: bm.getTotalSf(advFinInfo)*physicalInfo.officeUsePerc,
        rOfficeLeaseRate: basicFinInfo.commercialOfficeRentSf,
        rOfficeSpacePerEmp: physicalInfo.officeAreaPerEmp,
        rOfficeEmpPerSf: ( physicalInfo.officeAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.officeUsePerc)/physicalInfo.officeAreaPerEmp ),
        rIndustrialSf: bm.getTotalSf(advFinInfo)*physicalInfo.industrialUsePerc,
        rIndustrialLeaseRate: basicFinInfo.commercialIndustrialRentSf,
        rIndustrialSpacePerEmp: physicalInfo.industrialAreaPerEmp,
        rIndustrialEmpPerSf: ( physicalInfo.industrialAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.industrialUsePerc)/physicalInfo.industrialAreaPerEmp ),
        rPublicSf: bm.getTotalSf(advFinInfo)*physicalInfo.publicUsePerc,
        rPublicLeaseRate: basicFinInfo.commercialPublicRentSf,
        rPublicSpacePerEmp: physicalInfo.publicAreaPerEmp,
        rPublicEmpPerSf: ( physicalInfo.publicAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.publicUsePerc)/physicalInfo.publicAreaPerEmp ),			
        rEducationSf: bm.getTotalSf(advFinInfo)*physicalInfo.educationUsePerc,
        rEducationLeaseRate: basicFinInfo.commercialEducationRentSf,
        rEducationSpacePerEmp: physicalInfo.educationAreaPerEmp,
        rEducationEmpPerSf: ( physicalInfo.educationAreaPerEmp === 0 ? 0: (bm.getTotalSf(advFinInfo)*physicalInfo.educationUsePerc)/physicalInfo.educationAreaPerEmp ),
        rHospitalitySf: bm.getTotalSf(advFinInfo)*physicalInfo.hotelUsePerc,
        rHospitalityRateNight: basicFinInfo.commercialHotelRentRoom,
        rHospitalitySpacePerEmp: physicalInfo.hotelAreaPerEmp,
        rHospitalityEmpPerSf: bm.getHotelEmpPerSf(physicalInfo, advFinInfo),
        rHospitalityNetPerRoom: bm.getHotelNetPerSf(physicalInfo, advFinInfo),
        rHospitalityGrossPerRoom: bm.getHotelGrossPerSf(physicalInfo, advFinInfo),
        rHospitalityRoomsPerSf: ( bm.getHotelGrossPerSf(physicalInfo, advFinInfo) === 0 ? 0 : ((bm.getTotalSf(advFinInfo)*physicalInfo.hotelUsePerc)/bm.getHotelGrossPerSf(physicalInfo, advFinInfo)) ),
        rParkingGrossSf: bm.getTotalSf(advFinInfo)*physicalInfo.parkingUsePerc,
        rParkingRateHour: basicFinInfo.commercialParkingRentSpace,
        rParkingSpacePerEmp: physicalInfo.parkingAreaPerEmp,
        rParkingEmpPerSf: (physicalInfo.parkingAreaPerEmp === 0 ? 0 : (bm.getTotalSf(advFinInfo)*physicalInfo.parkingUsePerc)/physicalInfo.parkingAreaPerEmp),
        rParkingSpaces: bm.getParkingSpaces(),
        rParkingSf: bm.getParkingSf(physicalInfo),
        rInternalStructureParkingSf: bm.getInternalStructureParkingSf(),
        rParkingCostSf: bm.getParkingCostSf(basicFinInfo), 
        rLandCostSf: basicFinInfo.landImpCostsPerSf,
        rTotalPrjValue: bm.getTotalPrjValue(),
        rPropTaxRevenueYr: bm.getPropTaxRevenueYr(),
        rTotalFees: bm.getTotalFees(),
        rSubsidy: bm.getSubsidy(basicFinInfo),  //need to fix
        rRateOfReturn: bm.getRateOfReturn(), //need to fix
        rProjectReturn: bm.getProjectReturn(), //need to fix
        rYIntercept: bm.getYIntercept(), //need to fix
        rSlope: bm.getSlope() //need to fix
        /** 
         * next are 31 metrics that revolve around
            * Stormwater/ Green Infrastructure/ Water Quality 
            * Trip Generation
        * **/
    }
};