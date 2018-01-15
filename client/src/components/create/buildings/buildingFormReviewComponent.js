import React, { Component } from 'react';
import * as bm from './_buildingMathModule';
 
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	}
	// card: {
	// 	// margin: '10px'
	// },
	// button: {
	// 	width: '100%',
	// 	margin: '10px 0 10px 0'
	// }
  });

class BuildingFormReviewComponent extends Component {
	constructor(props) {
		super(props);
		let { physicalInfo, basicFinInfo, advFinInfo } = this.props.attributes;
		this.state = {
			rBuildingName: physicalInfo.buildingName,
			rLotSize: physicalInfo.siteArea,
			rLotLocation: physicalInfo.siteLocation,
			rBuildingLotCoverage: bm.buildingLotCoverage(
				physicalInfo.siteArea
			),
			rLanscapeLotCoverage: bm.landscapeLotCoverage(
				physicalInfo.siteArea
			),
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
			rPropTaxRevenueYr: bm.getPropTaxRevenueYr(), //need to fix
			rTotalFees: bm.getTotalFees(), //need to fix
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
		};
	}

	handleSubmit() {
		console.log('submission');
	}

	render() {		
		const { classes } = this.props;
		return (
			<Grid container >
				<Grid item xs={12} className={classes.paper}>
					<h4>Review</h4>
				</Grid>
				<Grid item xs={6}> 
					<div><strong>Building Name</strong>: {this.state.rBuildingName} </div>
					<div><strong>Lot Size:</strong> {this.state.rLotSize}</div>
					<div><strong>Lot Location:</strong> {this.state.rLotLocation}</div>
					<div><strong>Building Lot Coverage:</strong> {this.state.rBuildingLotCoverage}</div>
					<div><strong>Landscaping Lot Coverage:</strong> {this.state.rLanscapeLotCoverage}</div>
					<div><strong>Parking Lot Coverage:</strong> {this.state.rParkingLotCoverage}</div>
					<div><strong>Height (Stories):</strong> {this.state.rBuildingHeight}</div>
					<div><strong>Floor Area Ratio (FAR):</strong> {this.state.rFAR}</div>
					<div><strong>Total Bldg Square Footage:</strong> {this.state.rTotalSf}</div>
					<div><strong>Residential:</strong> {this.state.getResidentialSf} </div>
					<div><strong>Retail:</strong> {this.state.getRetailSf} </div>
					<div><strong>Office:</strong> {this.state.getOfficeSf} </div>
					<div><strong>Industrial:</strong> {this.state.getIndustrialSf} </div>
					<div><strong>Public/Civic:</strong> {this.state.getPublicSf} </div>
					<div><strong>Educational:</strong> {this.state.getEducationalSf} </div>
					<div><strong>Hotel / Hospitality:</strong> {this.state.getHotelSf} </div>
					<div><strong>Commercial Parking:</strong> {this.state.getCommercialParkingSf} </div>
					<div><strong>Internal / Structured Parking:</strong> {this.state.getInternalParkingSf} </div>
					<div><strong>Residential sf:</strong> {this.state.rResidentialSf}</div>
					<div><strong>Net sf per Unit:</strong> {this.state.rResidentialNetUnit} </div>
					<div><strong>Gross sf per Unit:</strong> {this.state.rResidentialGrossUnit} </div>
					<div><strong>Dwelling Units / Acre:</strong> {this.state.rResidentialDwellUnit} </div>
					<div><strong>Type of Housing:</strong> {this.state.rHouseholdType}</div>
					<div><strong>Percent Renter:</strong>{this.state.rHouseholdRenterPerc }  </div>
					<div><strong>Percent Owner:</strong> {this.state.rHouseholdOwnerPerc } </div>
					<div><strong>Percent Affordable:</strong>{this.state.rHouseholdAffordPerc } </div>
					<div><strong>Estimated Household Income:</strong> {this.state.rHouseholdEstIncome }</div>
					<div><strong>Rent / sf:</strong> {this.state.rMonthlyRentSf}</div>
					<div><strong>Avg Rent (/Mo.):</strong> {this.state.rMonthlyRent}</div>
					<div><strong>Sales Price /sf:</strong> {this.state.rSalesPriceSf}</div>
					<div><strong>Avg Sales Price:</strong> {this.state.rSalesPrice}</div>
				</Grid>
				<Grid item xs={6}> 
					<div><strong>Total Jobs / sf:</strong> {this.state.rJobsPerSf}			</div>
					<div><strong>Retail Gross sf:</strong> 		{this.state.rRetailSf} </div>
					<div><strong>Retail Lease Rate / sf:</strong> 	{this.state.rRetailLeaseRate} </div>
					<div><strong>Space per Retail Employee:</strong> {this.state.rRetailSpacePerEmp} </div>
					<div><strong>Retail Employees / sf:</strong> 	{this.state.rRetailEmpPerSf} </div>
					<div><strong>Office Gross sf:</strong> {this.state.rOfficeSf}</div>
					<div><strong>Office Lease Rate /sf:</strong> {this.state.rOfficeLeaseRate}</div>
					<div><strong>Space per Office Employee:</strong> {this.state.rOfficeSpacePerEmp} </div>
					<div><strong>Office Employees / sf:</strong> {this.state.rOfficeEmpPerSf}	</div>
					<div><strong>Industrial Gross sf:</strong> 	{this.state.rIndustrialSf}</div>
					<div><strong>Industrial Lease Rate /sf:</strong> {this.state.rIndustrialLeaseRate}</div>
					<div><strong>Space per Employee:</strong> 	{this.state.rIndustrialSpacePerEmp}</div>
					<div><strong>Industrial Employees / sf:</strong> {this.state.rIndustrialEmpPerSf}	</div>
					<div><strong>Public / Civic Gross sf:</strong> 	{this.state.rPublicSf}</div>
					<div><strong>Public / Civic Lease Rate / sf:</strong> {this.state.rPublicLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{this.state.rPublicSpacePerEmp}</div>
					<div><strong>Public / Civic Employees / sf:</strong> {this.state.rPublicEmpPerSf}</div>
					<div><strong>Educational Gross sf:</strong>{this.state.rEducationSf}</div>
					<div><strong>Educational Lease Rate /sf:</strong> {this.state.rEducationLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{this.state.rEducationSpacePerEmp}</div>
					<div><strong>Educational Employees / sf:</strong>{this.state.rEducationEmpPerSf}</div>
					<div><strong>Hospitality Gross sf:</strong>{this.state.rHospitalitySf}</div>
					<div><strong>Hospitality Nightly Rate (per room):</strong>{this.state.rHospitalityRateNight} </div>
					<div><strong>Space per Employee:</strong>{this.state.rHospitalitySpacePerEmp} </div>
					<div><strong>Hospitality Employees / sf:</strong> {this.state.rHospitalityEmpPerSf}</div>
					<div><strong>Net Space per Hotel Room:</strong> {this.state.rHospitalityNetPerRoom} </div>
					<div><strong>Gross Space per Hotel Room:</strong>{this.state.rHospitalityGrossPerRoom}</div>
					<div><strong>Hotel Rooms / sf:</strong> {this.state.rHospitalityRoomsPerSf}</div>
					<div><strong>Shared Parking Gross sf:</strong> {this.state.rParkingGrossSf}</div>
					<div><strong>Parking Hourly Rate (per space):</strong> {this.state.rParkingRateHour}</div>
					<div><strong>Space per Employee:</strong>{this.state.rParkingSpacePerEmp}</div>
					<div><strong>Shared Parking Employees / sf:</strong> {this.state.rParkingEmpPerSf} </div>

					<div><strong>Parking Spaces:</strong>  {this.state.rParkingSpaces} </div>
					<div><strong>Parking sf:</strong>  {this.state.rParkingSf} </div>
					<div><strong>Internal / Structured Parking sf:</strong> {this.state.rInternalStructureParkingSf}  </div>
					<div><strong>Parking Cost:</strong> {this.state.rParkingCostSf} </div>
					<div><strong>Land Cost (per sf):</strong> {this.state.rLandCostSf} </div>
					<div><strong>Total Project Value:</strong>{this.state.rTotalPrjValue}  </div>
					<div><strong>Annual Property Tax Revenue (Year 1):</strong> {this.state.rPropTaxRevenueYr} </div>
					<div><strong>Total Fees / SDCs:</strong> {this.state.rTotalFees} </div>
					<div><strong>Subsidy:</strong>{this.state.rSubsidy}  </div>
					<div><strong>Internal Rate of Return (Rental):</strong> {this.state.rRateOfReturn}</div>
					<div><strong>Project Return (Owner):</strong>{this.state.rProjectReturn} </div>
					<div><strong>Y-Intercept:</strong> {this.state.rYIntercept} </div>
					<div><strong>Slope:</strong> {this.state.rSlope} </div>
					{/* more entries for green infrastructure*/}
					<div><strong>Product Type:</strong> { 'Residential/Office/Mised Use Owner or Renter'} </div>
				
				
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BuildingFormReviewComponent);
