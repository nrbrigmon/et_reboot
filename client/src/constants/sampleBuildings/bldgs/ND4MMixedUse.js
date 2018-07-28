const shortid = require("shortid");

export default {
				uniqueId : shortid.generate(),
				physicalInfo : {
								buildingName: "ND4M Mixed Use",
								siteLocation: "San Marcos, TX",
								buildingHeight: 3,
								siteArea: 6000,
								siteNetToGross: 0.85,
								landscapingPerc: 0.25,
								underbuildPerc: 0.9,
								residentialType: "Townhome",
								occupancyType: "Owner",
								residentialUsePerc: 1,
								retailUsePerc: 0,
								officeUsePerc: 0,
								industrialUsePerc: 0,
								publicUsePerc: 0,
								educationUsePerc: 0,
								hotelUsePerc: 0,
								parkingUsePerc: 0,
								residentialUnitSize: 1500,
								retailAreaPerEmp: 650,
								officeAreaPerEmp: 350,
								industrialAreaPerEmp: 700,
								publicAreaPerEmp: 400,
								educationAreaPerEmp: 500,
								hotelAreaPerEmp: 1000,
								hotelAreaPerRoom: 600,
								parkingAreaPerEmp: 0,
								residentialParkPerUnit: 2.5,
								retailParkPerArea: 3,
								officeParkPerArea: 4,
								industrialParkPerArea: 0,
								publicParkPerArea: 0,
								educationParkPerArea: 0,
								hotelParkPerRoom: 2,
								surfaceParkingLvls: 1,
								internalParkingLvls: 1,
								undergroundParkingLvls: 0,
								mechanicalParking: "no",
								parkingLayout: " ",
								parkingAreaPerSf: 325
				},
				basicFinInfo : {
								residentialConCosts: 150,
								retailConCosts: 70,
								officeConCosts: 135,
								industrialConCosts: 65,
								publicConCosts: 135,
								educationConCosts: 135,
								hotelConCosts: 135,
								parkingConCosts: 0,
								landImpCostsPerSf: 10,
								testSubsidy: 0,
								monthlyRentPerSf: 0,
								monthlyParkingCost: 0,
								salesPricePerSf: 106.18633415345704,
								commercialRetailRentSf: 0,
								commercialOfficeRentSf: 0,
								commercialIndustrialRentSf: 0,
								commercialPublicRentSf: 0,
								commercialEducationRentSf: 0,
								commercialHotelRentRoom: 0,
								commercialParkingRentSpace: 0,
								surfaceParkingCostSpace: 3000,
								structureParkingCostSpace: 20000,
								undergroundParkingCostSpace: 55000,
								internalParkingCostSpace: 20000,
								mechanicalParkingCostSpace: 45000
				},
				advFinInfo : {
								residentialRentalPerc: 0.85,
								retailRentalPerc: 0.85,
								officeRentalPerc: 0.85,
								industrialRentalPerc: 0.85,
								publicRentalPerc: 0.85,
								hotelRentalPerc: 0.85,
								parkingRentalPerc: 0.95,
								occupancy1YrResidential: 0.8,
								occupancy1YrRetail: 0.95,
								occupancy1YrOffice: 0.95,
								occupancy1YrIndustrial: 0.95,
								occupancyLongTermResidential: 0.95,
								occupancyLongTermRetail: 0.95,
								occupancyLongTermOffice: 0.95,
								occupancyLongTermIndustrial: 0.95,
								occupancyLongTermPublic: 0.95,
								occupancyLongTermHotel: 0.75,
								occupancyLongTermParking: 0.7,
								preDevDueDiligence: 0,
								preDevLandCarry: 0.05,
								preDevLandEntitlement: 0.02,
								preDevProfessionalFees: 0.05,
								devDemolitionCosts: 0,
								devSiteDevelopmentCosts: 0,
								devBrownfieldRemediationCosts: 0,
								devAdditionalInfraEnhancement: 0,
								impactFeesPerUnit: 5000,
								impactFeesPerJob: 0,
								impactFeesPerSf: 0,
								buildingPermitFees: 5000,
								taxesDuringConstruction: 0.01,
								insuranceDuringConstruction: 0.01,
								developerFee: 0.04,
								contingency: 0.1,
								propTaxOwner: 0.01,
								propTaxRenter: 0.02,
								propTaxRetail: 0.02,
								propTaxOffice: 0.01,
								propTaxIndustrial: 0.01,
								propTaxHotel: 0.01,
								propTaxParking: 0.015,
								assessRatioTaxOwner: 0.5,
								assessRatioTaxRenter: 0.75,
								assessRatioTaxRetail: 0.75,
								assessRatioTaxOffice: 0.54,
								assessRatioTaxIndustrial: 0.54,
								assessRatioTaxHotel: 0.54,
								assessRatioTaxParking: 0.54,
								cash3YrRenter: 0.1,
								cash3YrRetail: 0.1,
								cash3YrOffice: 0.1,
								cash3YrIndustrial: 0.1,
								cash3YrHotel: 0.1,
								cash3YrParking: 0.1,
								iRRCostRenter: 0.12,
								iRRCostRetail: 0.12,
								iRRCostOffice: 0.12,
								iRRCostIndustrial: 0.12,
								iRRCostHotel: 0.12,
								iRRCostParking: 0.12,
								iRREquityRenter: 0.25,
								iRREquityRetail: 0.25,
								iRREquityOffice: 0.25,
								iRREquityIndustrial: 0.25,
								iRREquityHotel: 0.25,
								iRREquityParking: 0.25,
								debServRatioRenter: 1.25,
								debServRatioRetail: 1.25,
								debServRatioOffice: 1.25,
								debServRatioIndustrial: 1.25,
								debServRatioHotel: 1.25,
								debServRatioParking: 1.25,
								iRRParticipationRenter: 0.05,
								iRRParticipationRetail: 0.05,
								iRRParticipationOffice: 0.05,
								iRRParticipationIndustrial: 0.05,
								iRRParticipationHotel: 0.05,
								iRRParticipationParking: 0.05,
								projectReturnRateOwner: 0.25,
								returnToEquityOwner: 0.75,
								projRetailSales: 350,
								percRetailSalestoRent: 0.04,
								otherIncomeRenter: 0.1,
								otherIncomeRetail: 0.02,
								otherIncomeOffice: 0.1,
								otherIncomeIndustrial: 0.1,
								otherIncomeHotel: 0.1,
								otherIncomeParking: 0,
								percConcessionsRenter: 0.02,
								percConcessionsRetail: 0.02,
								percConcessionsOffice: 0.02,
								percConcessionsIndustrial: 0.02,
								percConcessionsHotel: 0.02,
								percConcessionsParking: 0,
								operatingCostsPercRenter: 0.12,
								operatingCostsPercRetail: 0.2,
								operatingCostsPercOffice: 0.2,
								operatingCostsPercIndustrial: 0.2,
								operatingCostsPercHotel: 0.3,
								operatingCostsPerSpaceParking: 800,
								percCapRateRenter: 0.06,
								percCapRateRetail: 0.06,
								percCapRateOffice: 0.073,
								percCapRateIndustrial: 0.073,
								percCapRateHotel: 0.06,
								percCapRateParking: 0,
								grossPotentIncomeRenter: 0.03,
								grossPotentIncomeRetail: 0.03,
								grossPotentIncomeOffice: 0.03,
								grossPotentIncomeIndustrial: 0.03,
								grossPotentIncomeHotel: 0.03,
								grossPotentIncomeParking: 0,
								operateCostsRenter: 0.03,
								operateCostsRetail: 0.03,
								operateCostsOffice: 0.03,
								operateCostsIndustrial: 0.03,
								operateCostsHotel: 0.03,
								operateCostsParking: 0,
								propValueApprecOwner: 0.03,
								propValueApprecRenter: 0.03,
								propValueApprecRetail: 0.03,
								propValueApprecOffice: 0.073,
								propValueApprecIndustrial: 0.03,
								propValueApprecHotel: 0.03,
								propValueApprecParking: 0.03,
								terminalCapRateRenter: 0.073,
								terminalCapRateRetail: 0.073,
								terminalCapRateOffice: 0.073,
								terminalCapRateIndustrial: 0.08,
								terminalCapRateHotel: 0.073,
								terminalCapRateParking: 0,
								percNetSalesRenter: 0.05,
								percNetSalesRetail: 0.05,
								percNetSalesOffice: 0.05,
								percNetSalesIndustrial: 0.05,
								percNetSalesHotel: 0.05,
								percNetSalesParking: 0,
								maxLTVOwner: 0.6,
								maxLTVRenter: 0.7,
								maxLTVRetail: 0.7,
								maxLTVOffice: 0.7,
								maxLTVIndustrial: 0.7,
								maxLTVHotel: 0.7,
								maxLTVParking: 0.7,
								debtInterestRateRenter: 0.06,
								debtInterestRateRetail: 0.06,
								debtInterestRateOffice: 0.06,
								debtInterestRateIndustrial: 0.06,
								debtInterestRateHotel: 0.06,
								debtInterestRateParking: 0.06,
								debtAmortPeriodRenter: 25,
								debtAmortPeriodRetail: 25,
								debtAmortPeriodOffice: 25,
								debtAmortPeriodIndustrial: 25,
								debtAmortPeriodHotel: 25,
								debtAmortPeriodParking: 25
				}
};
