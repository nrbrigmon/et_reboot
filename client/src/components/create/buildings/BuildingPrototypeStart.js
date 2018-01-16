import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';

import axios from 'axios';
import PhysicalFormComponent from './PhysicalFormComponent';
import BasicFinFormComponent from './BasicFinFormComponent';
import AdvancedFinFormComponent from './AdvancedFinFormComponent';
import BuildingFormReviewComponent from './BuildingFormReviewComponent';
import BuildingPrintSummary from './BuildingPrintSummary';
import * as bm from './_buildingMathModule';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	},
	button: {
		margin: '10px 10px 10px 10px',
		width: '150px'
	}
  });

  class BuildingPrototypeStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabValue: 'phys',
			BP: {
				physicalInfo: {
					buildingName: "My first building",
					buildingHeight: 2,
					siteArea: 10,
					siteLocation: 'Austin, TX',
					siteNetToGross: 10,
					landscapingPerc: 10,
					underbuildPerc: 10,
					residentialType: 'Single Family',
					occupancyType: 'Renter',
					residentialUsePerc: 10,
					retailUsePerc: .20,
					officeUsePerc: .30,
					industrialUsePerc: .20,
					publicUsePerc: .50,
					educationUsePerc: .40,
					hotelUsePerc: .10,
					parkingUsePerc: .10,
					residentialUnitSize: 700,
					retailAreaPerEmp: 50,
					officeAreaPerEmp: 50,
					industrialAreaPerEmp: 50,
					publicAreaPerEmp: 50,
					educationAreaPerEmp: 50,
					hotelAreaPerEmp: 50,
					hotelAreaPerRoom: 20,
					parkingAreaPerEmp: 50,
					residentialParkPerUnit: 20,
					retailParkPerArea: 10,
					officeParkPerArea: 20,
					industrialParkPerArea: 30,
					publicParkPerArea: 40,
					educationParkPerArea: 50,
					hotelParkPerRoom: 30,
					surfaceParkingLvls: 1,
					internalParkingLvls: 0,
					undergroundParkingLvls: 0,
					mechanicalParking: "no",
					parkingLayout: '',
					parkingAreaPerSf: 300
				},
				basicFinInfo: {
					residentialConCosts: 0,
					retailConCosts: 0,
					officeConCosts: 0,
					industrialConCosts: 0,
					publicConCosts:0,
					educationConCosts: 0,
					hotelConCosts: 0,
					parkingConCosts: 0,
					landImpCostsPerSf: 0,
					testSubsidy: 0,
					monthlyRentPerSf: 1.4,
					monthlyParkingCost: 0,
					salesPricePerSf: 1000,
					commercialRetailRentSf: 0,
					commercialOfficeRentSf: 0,
					commercialIndustrialRentSf: 0,
					commercialPublicRentSf: 0,
					commercialEducationRentSf: 0,
					commercialHotelRentRoom: 0,
					commercialParkingRentSpace: 0,
					surfaceParkingCostSpace: 0,
					structureParkingCostSpace: 0,
					undergroundParkingCostSpace: 0,
					internalParkingCostSpace: 0,
					mechanicalParkingCostSpace: 0
				},
				advFinInfo: {
					residentialRentalPerc: 0,
					retailRentalPerc: 0,
					officeRentalPerc: 0,
					industrialRentalPerc: 0,
					publicRentalPerc: 0,
					educationRentalPerc: 0,
					hotelRentalPerc: 0,
					parkingRentalPerc: 0,
					occupancy1YrResidential: 0,
					occupancy1YrRetail: 0,
					occupancy1YrOffice: 0,
					occupancy1YrIndustrial: 0,
					occupancy1YrPublic: 0,
					occupancy1YrHotel: 0,
					occupancy1YrParking: 0,
					occupancyLongTermResidential: 0,
					occupancyLongTermRetail: 0,
					occupancyLongTermOffice: 0,
					occupancyLongTermIndustrial: 0,
					occupancyLongTermPublic: 0,
					occupancyLongTermHotel: 0,
					occupancyLongTermParking: 0,
					preDevDueDiligence: 0,
					preDevLandCarry: 0,
					preDevLandEntitlement: 0,
					preDevProfessionalFees: 0,
					devDemolitionCosts: 0,
					devSiteDevelopmentCosts: 0,
					devBrownfieldRemediationCosts: 0,
					devAdditionalInfraEnhancement: 0,
					impactFeesPerUnit: 0,
					impactFeesPerJob: 0,
					impactFeesPerSf: 0,
					additonalImpactFees: 0,
					buildingPermitFees: 0,
					taxesDuringConstruction: 0,
					insuranceDuringConstruction: 0,
					developerFee: 0,
					contingency: 0,
					propTaxOwner: 0,
					propTaxRenter: 0,
					propTaxRetail: 0,
					propTaxOffice: 0,
					propTaxIndustrial: 0,
					propTaxHotel: 0,
					propTaxParking: 0,
					assessRatioTaxOwner: 0,
					assessRatioTaxRenter: 0,
					assessRatioTaxRetail: 0,
					assessRatioTaxOffice: 0,
					assessRatioTaxIndustrial: 0,
					assessRatioTaxHotel: 0,
					assessRatioTaxParking: 0,
					cash3YrRenter: 0,
					cash3YrRetail: 0,
					cash3YrOffice: 0,
					cash3YrIndustrial: 0,
					cash3YrHotel: 0,
					cash3YrParking: 0,
					iRRCostRenter: 0,
					iRRCostRetail: 0,
					iRRCostOffice: 0,
					iRRCostIndustrial: 0,
					iRRCostHotel: 0,
					iRRCostParking: 0,
					iRREquityRenter: 0,
					iRREquityRetail: 0,
					iRREquityOffice: 0,
					iRREquityIndustrial: 0,
					iRREquityHotel: 0,
					iRREquityParking: 0,
					debServRatioRenter: 0,
					debServRatioRetail: 0,
					debServRatioOffice: 0,
					debServRatioIndustrial: 0,
					debServRatioHotel: 0,
					debServRatioParking: 0,
					iRRParticipationRenter: 0,
					iRRParticipationRetail: 0,
					iRRParticipationOffice: 0,
					iRRParticipationIndustrial: 0,
					iRRParticipationHotel: 0,
					iRRParticipationParking: 0,
					projectReturnRateOwner: 0,
					returnToEquityOwner: 0,
					projRetailSales: 0,
					percRetailSalestoRent: 0,
					otherIncomeRenter: 0,
					otherIncomeRetail: 0,
					otherIncomeOffice: 0,
					otherIncomeIndustrial: 0,
					otherIncomeHotel: 0,
					otherIncomeParking: 0,
					percConcessionsRenter: 0,
					percConcessionsRetail: 0,
					percConcessionsOffice: 0,
					percConcessionsIndustrial: 0,
					percConcessionsHotel: 0,
					percConcessionsParking: 0,
					operatingCostsPercRenter: 0,
					operatingCostsPercRetail: 0,
					operatingCostsPercOffice: 0,
					operatingCostsPercIndustrial: 0,
					operatingCostsPercHotel: 0,
					operatingCostsPerSpaceParking: 0,
					percCapRateRenter: 0,
					percCapRateRetail: 0,
					percCapRateOffice: 0,
					percCapRateIndustrial: 0,
					percCapRateHotel: 0,
					percCapRateParking: 0,
					grossPotentIncomeRenter: 0,
					grossPotentIncomeRetail: 0,
					grossPotentIncomeOffice: 0,
					grossPotentIncomeIndustrial: 0,
					grossPotentIncomeHotel: 0,
					grossPotentIncomeParking: 0,
					operateCostsRenter: 0,
					operateCostsRetail: 0,
					operateCostsOffice: 0,
					operateCostsIndustrial: 0,
					operateCostsHotel: 0,
					operateCostsParking: 0,
					propValueApprecOwner: 0,
					propValueApprecRenter: 0,
					propValueApprecRetail: 0,
					propValueApprecOffice: 0,
					propValueApprecIndustrial: 0,
					propValueApprecHotel: 0,
					propValueApprecParking: 0,
					terminalCapRateRenter: 0,
					terminalCapRateRetail: 0,
					terminalCapRateOffice: 0,
					terminalCapRateIndustrial: 0,
					terminalCapRateHotel: 0,
					terminalCapRateParking: 0,
					percNetSalesRenter: 0,
					percNetSalesRetail: 0,
					percNetSalesOffice: 0,
					percNetSalesIndustrial: 0,
					percNetSalesHotel: 0,
					percNetSalesParking: 0,
					maxLTVOwner: 0,
					maxLTVRenter: 0,
					maxLTVRetail: 0,
					maxLTVOffice: 0,
					maxLTVIndustrial: 0,
					maxLTVHotel: 0,
					maxLTVParking: 0,
					debtInterestRateRenter: 0,
					debtInterestRateRetail: 0,
					debtInterestRateOffice: 0,
					debtInterestRateIndustrial: 0,
					debtInterestRateHotel: 0,
					debtInterestRateParking: 0,
					debtAmortPeriodRenter: 0,
					debtAmortPeriodRetail: 0,
					debtAmortPeriodOffice: 0,
					debtAmortPeriodIndustrial: 0,
					debtAmortPeriodHotel: 0,
					debtAmortPeriodParking: 0
				}
			},
			forDevType: {	}
		};
		this.componentSelection = this.componentSelection.bind(this);
		this.updatePrototypePhys = this.updatePrototypePhys.bind(this);
		this.updateBasicFinInfo = this.updateBasicFinInfo.bind(this);
		this.updateAdvFinInfo = this.updateAdvFinInfo.bind(this);
		this.updateForDevType = this.updateForDevType.bind(this);
	}

	updatePrototypePhys(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.physicalInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}

	updateBasicFinInfo(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.basicFinInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}

	updateAdvFinInfo(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.advFinInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}
	
	componentSelection = (e, value) => {
		this.setState({
			tabValue: value
		});
	}
	updateForDevType(buildingCopy){
		let { physicalInfo, basicFinInfo, advFinInfo } = buildingCopy;
		this.setState({
			forDevType: {
				rBuildingID: '0',
				rBuildingName: physicalInfo.buildingName,
				rLotSize: physicalInfo.siteArea,
				rLotLocation: physicalInfo.siteLocation,
				rBuildingLotCoverage: bm.buildingLotCoverage( physicalInfo.siteArea ),
				rLanscapeLotCoverage: bm.landscapeLotCoverage( physicalInfo.siteArea ),
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
		});
	}
	saveBuilding() {
		console.log(this.state.forDevType);
		// if (choice === 'save') {
		// 	axios.post('/api/buildings', this.state.BP).then(function(res) {
		// 		alert('new row added...');
		// 	});
		// }
		// this.props.history.push('/create');
	}

	renderChildContent(pg){
		if (pg === 'phys') {
			return (
				<PhysicalFormComponent
					buildingUpdate={this.updatePrototypePhys}
					attributes={this.state.BP}
				/>
			);
		} else if (pg === 'fin1') {
			return (
				<BasicFinFormComponent
					buildingUpdate={this.updateBasicFinInfo}
					attributes={this.state.BP}
				/>
			);
		} else if (pg === 'fin2') {
			return (
				<AdvancedFinFormComponent
					buildingUpdate={this.updateAdvFinInfo}
					attributes={this.state.BP}
				/>
			);
		} else if (pg === 'print') {
			return <BuildingPrintSummary />;
		} else {
			return (
				<BuildingFormReviewComponent
					pageChange={this.changePage}
					attributes={this.state.forDevType}
				/>
			);
		}
	}
	render() {
		const { classes } = this.props;
		const { tabValue } = this.state;
		return (
				<Grid container
					className={classes.root}
					alignItems='center'
					direction='row'
					justify='center'>
					<AppBar position="static" color="default">
						<Tabs
							value={tabValue}
							onChange={this.componentSelection}
							indicatorColor="primary"
							textColor="primary"
							fullWidth
							centered
						>
							<Tab value="phys" label="Physical Inputs" />
							<Tab value="fin1" label="Basic Financial" />
							<Tab value="fin2" label="Advanced Financial" />
							<Tab value="rev" label="Review" />
							<Tab value="print" label="Print" />
						</Tabs>
					</AppBar>
					<Grid item md={8} sm={12}>
						{this.renderChildContent(this.state.tabValue)}
					</Grid>
					<Grid item className={classes.paper} xs={12}>
						<Button raised color="primary"  className={classes.button} onClick={()=>this.saveBuilding}>
							Save
						</Button>	
						
						<Button raised color="accent"  className={classes.button} onClick={()=>this.handleSubmit('create')}>
							Cancel
						</Button>	
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(styles)(BuildingPrototypeStart);
