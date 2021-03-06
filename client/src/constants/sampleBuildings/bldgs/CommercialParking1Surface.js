const shortid = require("shortid");

export default {
				uniqueId : shortid.generate(),
				physicalInfo : {
								buildingName: "Commercial Parking 1 - Surface",
								siteLocation: "Your City, USA",
								buildingHeight: 1,
								siteArea: 40000,
								siteNetToGross: 1,
								landscapingPerc: 0.13125,
								underbuildPerc: 0.9,
								residentialType: "None",
								occupancyType: "None",
								residentialUsePerc: 0,
								retailUsePerc: 0,
								officeUsePerc: 0,
								industrialUsePerc: 0,
								publicUsePerc: 0,
								educationUsePerc: 0,
								hotelUsePerc: 0,
								parkingUsePerc: 1,
								residentialUnitSize: 1000,
								retailAreaPerEmp: 650,
								officeAreaPerEmp: 350,
								industrialAreaPerEmp: 700,
								publicAreaPerEmp: 400,
								educationAreaPerEmp: 500,
								hotelAreaPerEmp: 1000,
								hotelAreaPerRoom: 400,
								parkingAreaPerEmp: 20000,
								residentialParkPerUnit: 2,
								retailParkPerArea: 3,
								officeParkPerArea: 4,
								industrialParkPerArea: 0,
								publicParkPerArea: 0,
								educationParkPerArea: 0,
								hotelParkPerRoom: 2,
								surfaceParkingLvls: 1,
								internalParkingLvls: 0,
								undergroundParkingLvls: 0,
								mechanicalParking: "no",
								parkingLayout: " ",
								parkingAreaPerSf: 325
				},
				basicFinInfo : {
								residentialConCosts: 0,
								retailConCosts: 0,
								officeConCosts: 0,
								industrialConCosts: 0,
								publicConCosts: 0,
								educationConCosts: 0,
								hotelConCosts: 0,
								parkingConCosts: 0,
								landImpCostsPerSf: 0,
								testSubsidy: 0,
								monthlyRentPerSf: 1.62,
								monthlyParkingCost: 0,
								salesPricePerSf: 300,
								commercialRetailRentSf: 18,
								commercialOfficeRentSf: 22,
								commercialIndustrialRentSf: 12,
								commercialPublicRentSf: 14,
								commercialEducationRentSf: 14,
								commercialHotelRentRoom: 150,
								commercialParkingRentSpace: 4,
								surfaceParkingCostSpace: 3200.0,
								structureParkingCostSpace: 16000,
								undergroundParkingCostSpace: 37333.333333333336,
								internalParkingCostSpace: 21333.333333333332,
								mechanicalParkingCostSpace: 55000
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
								preDevProfessionalFees: 0.1,
								devDemolitionCosts: 0,
								devSiteDevelopmentCosts: 0,
								devBrownfieldRemediationCosts: 0,
								devAdditionalInfraEnhancement: 0,
								impactFeesPerUnit: 0,
								impactFeesPerJob: 0,
								impactFeesPerSf: 0,
								additonalImpactFees: 0,
								buildingPermitFees: 0,
								taxesDuringConstruction: 0.01,
								insuranceDuringConstruction: 0.01,
								developerFee: 0.04,
								contingency: 0.1,
								propTaxOwner: 0,
								propTaxRenter: 0,
								propTaxRetail: 0,
								propTaxOffice: 0,
								propTaxIndustrial: 0,
								propTaxHotel: 0,
								propTaxParking: 0,
								assessRatioTaxOwner: 1,
								assessRatioTaxRenter: 1,
								assessRatioTaxRetail: 1,
								assessRatioTaxOffice: 1,
								assessRatioTaxIndustrial: 1,
								assessRatioTaxHotel: 1,
								assessRatioTaxParking: 1,
								cash3YrRenter: 0.1,
								cash3YrRetail: 0.1,
								cash3YrOffice: 0.1,
								cash3YrIndustrial: 0.1,
								cash3YrHotel: 0.1,
								cash3YrParking: 1,
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
								projRetailSales: 0,
								percRetailSalestoRent: 0,
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
								operatingCostsPercRenter: 0.1,
								operatingCostsPercRetail: 0.05,
								operatingCostsPercOffice: 0.2,
								operatingCostsPercIndustrial: 0.05,
								operatingCostsPercHotel: 0.3,
								operatingCostsPerSpaceParking: 800,
								percCapRateRenter: 0.06,
								percCapRateRetail: 0.065,
								percCapRateOffice: 0.065,
								percCapRateIndustrial: 0.065,
								percCapRateHotel: 0.065,
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
								propValueApprecOffice: 0.03,
								propValueApprecIndustrial: 0.03,
								propValueApprecHotel: 0.03,
								propValueApprecParking: 0.03,
								terminalCapRateRenter: 0.07,
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
