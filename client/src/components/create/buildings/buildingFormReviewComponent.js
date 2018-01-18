import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	}
  });

class BuildingFormReviewComponent extends Component {

	render() {		
		const { classes } = this.props;
		// console.log(this.props.attributes);
		let reviewObj = this.props.attributes;
		return (
			<Grid container >
				<Grid item xs={12} className={classes.paper}>
					<h4>Review</h4>
				</Grid>
				<Grid item xs={6}> 
					<div><strong>Building Name</strong>: {reviewObj.rBuildingName} </div>
					<div><strong>Lot Size:</strong> {reviewObj.rLotSize}</div>
					<div><strong>Lot Location:</strong> {reviewObj.rLotLocation}</div>
					<div><strong>Building Lot Coverage:</strong> {reviewObj.rBuildingLotCoverage}</div>
					<div><strong>Landscaping Lot Coverage:</strong> {reviewObj.rLanscapeLotCoverage}</div>
					<div><strong>Parking Lot Coverage:</strong> {reviewObj.rParkingLotCoverage}</div>
					<div><strong>Height (Stories):</strong> {reviewObj.rBuildingHeight}</div>
					<div><strong>Floor Area Ratio (FAR):</strong> {reviewObj.rFAR}</div>
					<div><strong>Total Bldg Square Footage:</strong> {reviewObj.rTotalSf}</div>
					<div><strong>Residential:</strong> {reviewObj.getResidentialSf} </div>
					<div><strong>Retail:</strong> {reviewObj.getRetailSf} </div>
					<div><strong>Office:</strong> {reviewObj.getOfficeSf} </div>
					<div><strong>Industrial:</strong> {reviewObj.getIndustrialSf} </div>
					<div><strong>Public/Civic:</strong> {reviewObj.getPublicSf} </div>
					<div><strong>Educational:</strong> {reviewObj.getEducationalSf} </div>
					<div><strong>Hotel / Hospitality:</strong> {reviewObj.getHotelSf} </div>
					<div><strong>Commercial Parking:</strong> {reviewObj.getCommercialParkingSf} </div>
					<div><strong>Internal / Structured Parking:</strong> {reviewObj.getInternalParkingSf} </div>
					<div><strong>Residential sf:</strong> {reviewObj.rResidentialSf}</div>
					<div><strong>Net sf per Unit:</strong> {reviewObj.rResidentialNetUnit} </div>
					<div><strong>Gross sf per Unit:</strong> {reviewObj.rResidentialGrossUnit} </div>
					<div><strong>Dwelling Units / Acre:</strong> {reviewObj.rResidentialDwellUnit} </div>
					<div><strong>Type of Housing:</strong> {reviewObj.rHouseholdType}</div>
					<div><strong>Percent Renter:</strong>{reviewObj.rHouseholdRenterPerc }  </div>
					<div><strong>Percent Owner:</strong> {reviewObj.rHouseholdOwnerPerc } </div>
					<div><strong>Percent Affordable:</strong>{reviewObj.rHouseholdAffordPerc } </div>
					<div><strong>Estimated Household Income:</strong> {reviewObj.rHouseholdEstIncome }</div>
					<div><strong>Rent / sf:</strong> {reviewObj.rMonthlyRentSf}</div>
					<div><strong>Avg Rent (/Mo.):</strong> {reviewObj.rMonthlyRent}</div>
					<div><strong>Sales Price /sf:</strong> {reviewObj.rSalesPriceSf}</div>
					<div><strong>Avg Sales Price:</strong> {reviewObj.rSalesPrice}</div>
				</Grid>
				<Grid item xs={6}> 
					<div><strong>Total Jobs / sf:</strong> {reviewObj.rJobsPerSf}			</div>
					<div><strong>Retail Gross sf:</strong> 		{reviewObj.rRetailSf} </div>
					<div><strong>Retail Lease Rate / sf:</strong> 	{reviewObj.rRetailLeaseRate} </div>
					<div><strong>Space per Retail Employee:</strong> {reviewObj.rRetailSpacePerEmp} </div>
					<div><strong>Retail Employees / sf:</strong> 	{reviewObj.rRetailEmpPerSf} </div>
					<div><strong>Office Gross sf:</strong> {reviewObj.rOfficeSf}</div>
					<div><strong>Office Lease Rate /sf:</strong> {reviewObj.rOfficeLeaseRate}</div>
					<div><strong>Space per Office Employee:</strong> {reviewObj.rOfficeSpacePerEmp} </div>
					<div><strong>Office Employees / sf:</strong> {reviewObj.rOfficeEmpPerSf}	</div>
					<div><strong>Industrial Gross sf:</strong> 	{reviewObj.rIndustrialSf}</div>
					<div><strong>Industrial Lease Rate /sf:</strong> {reviewObj.rIndustrialLeaseRate}</div>
					<div><strong>Space per Employee:</strong> 	{reviewObj.rIndustrialSpacePerEmp}</div>
					<div><strong>Industrial Employees / sf:</strong> {reviewObj.rIndustrialEmpPerSf}	</div>
					<div><strong>Public / Civic Gross sf:</strong> 	{reviewObj.rPublicSf}</div>
					<div><strong>Public / Civic Lease Rate / sf:</strong> {reviewObj.rPublicLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{reviewObj.rPublicSpacePerEmp}</div>
					<div><strong>Public / Civic Employees / sf:</strong> {reviewObj.rPublicEmpPerSf}</div>
					<div><strong>Educational Gross sf:</strong>{reviewObj.rEducationSf}</div>
					<div><strong>Educational Lease Rate /sf:</strong> {reviewObj.rEducationLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{reviewObj.rEducationSpacePerEmp}</div>
					<div><strong>Educational Employees / sf:</strong>{reviewObj.rEducationEmpPerSf}</div>
					<div><strong>Hospitality Gross sf:</strong>{reviewObj.rHospitalitySf}</div>
					<div><strong>Hospitality Nightly Rate (per room):</strong>{reviewObj.rHospitalityRateNight} </div>
					<div><strong>Space per Employee:</strong>{reviewObj.rHospitalitySpacePerEmp} </div>
					<div><strong>Hospitality Employees / sf:</strong> {reviewObj.rHospitalityEmpPerSf}</div>
					<div><strong>Net Space per Hotel Room:</strong> {reviewObj.rHospitalityNetPerRoom} </div>
					<div><strong>Gross Space per Hotel Room:</strong>{reviewObj.rHospitalityGrossPerRoom}</div>
					<div><strong>Hotel Rooms / sf:</strong> {reviewObj.rHospitalityRoomsPerSf}</div>
					<div><strong>Shared Parking Gross sf:</strong> {reviewObj.rParkingGrossSf}</div>
					<div><strong>Parking Hourly Rate (per space):</strong> {reviewObj.rParkingRateHour}</div>
					<div><strong>Space per Employee:</strong>{reviewObj.rParkingSpacePerEmp}</div>
					<div><strong>Shared Parking Employees / sf:</strong> {reviewObj.rParkingEmpPerSf} </div>

					<div><strong>Parking Spaces:</strong>  {reviewObj.rParkingSpaces} </div>
					<div><strong>Parking sf:</strong>  {reviewObj.rParkingSf} </div>
					<div><strong>Internal / Structured Parking sf:</strong> {reviewObj.rInternalStructureParkingSf}  </div>
					<div><strong>Parking Cost:</strong> {reviewObj.rParkingCostSf} </div>
					<div><strong>Land Cost (per sf):</strong> {reviewObj.rLandCostSf} </div>
					<div><strong>Total Project Value:</strong>{reviewObj.rTotalPrjValue}  </div>
					<div><strong>Annual Property Tax Revenue (Year 1):</strong> {reviewObj.rPropTaxRevenueYr} </div>
					<div><strong>Total Fees / SDCs:</strong> {reviewObj.rTotalFees} </div>
					<div><strong>Subsidy:</strong>{reviewObj.rSubsidy}  </div>
					<div><strong>Internal Rate of Return (Rental):</strong> {reviewObj.rRateOfReturn}</div>
					<div><strong>Project Return (Owner):</strong>{reviewObj.rProjectReturn} </div>
					<div><strong>Y-Intercept:</strong> {reviewObj.rYIntercept} </div>
					<div><strong>Slope:</strong> {reviewObj.rSlope} </div>
					{/* more entries for green infrastructure*/}
					<div><strong>Product Type:</strong> { 'Residential/Office/Mised Use Owner or Renter'} </div>
	
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BuildingFormReviewComponent);
