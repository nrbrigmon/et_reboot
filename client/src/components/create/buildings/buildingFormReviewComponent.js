import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import './_tableCSS.css';

import { VictoryPie } from 'victory';
import Stop from 'material-ui-icons/Stop';
import NumberFormat from 'react-number-format';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	}
  });

let placeholderCSS = {
	border: '1px solid black',
	margin: '20px',
	padding: '100px'
};
let legendCSS = {
	fontSize: '10px',
	margin: '0px',
	padding: '0px'
};

class BuildingFormReviewComponent extends Component {

	render() {		
		const { classes } = this.props;
		let bldg = this.props.attributes;
		return (
			<Grid container >
				<Grid item xs={12} className={classes.paper}>
					<h4>Review</h4>
					<h4>{bldg.rBuildingName} | {bldg.rLotLocation}</h4>
				</Grid>
				
				<Grid item xs={4}>
					<div style={legendCSS}>
						Building,
						Parking, and
						Landscaping Footprints
					</div>
					<VictoryPie
						animate={{duration: 1000}} 
						innerRadius={75}
						colorScale={["tomato", "orange", "gold"]} 
						data={[
							{ x: "Building", y: bldg.rBuildingLotCoverage },
							{ x: "Landscaping", y: bldg.rLanscapeLotCoverage },
							{ x: "Parking", y: bldg.rParkingLotCoverage }
						]} />
				</Grid>
	
				<Grid item xs={4} >
					<div style={legendCSS}>
						Lot Area
					</div>
					<p>{bldg.rLotSize} sq ft</p>
					<p><NumberFormat value={bldg.rLotSize / 43560} displayType={'text'} thousandSeparator={true} decimalScale={2} /> acres</p>
				</Grid>
				<Grid item xs={4}>
					<div style={legendCSS}>
						Building Dimensions
					</div>
					<p>Height: {bldg.rBuildingHeight} stories</p>
					<p>FAR: <NumberFormat value={bldg.rFAR} displayType={'text'} thousandSeparator={true} decimalScale={2} /> </p>
					<p>Total Sq Ft: <NumberFormat value={bldg.rTotalSf} displayType={'text'} thousandSeparator={true} decimalScale={2} /> sq ft</p>
				</Grid>
				
				<Grid item xs={12}>	
					<div style={placeholderCSS}>3d image</div>
				</Grid>

				<Grid item xs={12}>	
					<div><strong>Residential:</strong> {bldg.getResidentialSf} </div>
					<div><strong>Retail:</strong> {bldg.getRetailSf} </div>
					<div><strong>Office:</strong> {bldg.getOfficeSf} </div>
					<div><strong>Industrial:</strong> {bldg.getIndustrialSf} </div>
					<div><strong>Public/Civic:</strong> {bldg.getPublicSf} </div>
					<div><strong>Educational:</strong> {bldg.getEducationalSf} </div>
					<div><strong>Hotel / Hospitality:</strong> {bldg.getHotelSf} </div>
					<div><strong>Commercial Parking:</strong> {bldg.getCommercialParkingSf} </div>
					<div><strong>Internal / Structured Parking:</strong> {bldg.getInternalParkingSf} </div>
					<div><strong>Residential sf:</strong> {bldg.rResidentialSf}</div>
					<div><strong>Net sf per Unit:</strong> {bldg.rResidentialNetUnit} </div>
					<div><strong>Gross sf per Unit:</strong> {bldg.rResidentialGrossUnit} </div>
					<div><strong>Dwelling Units / Acre:</strong> {bldg.rResidentialDwellUnit} </div>
					<div><strong>Type of Housing:</strong> {bldg.rHouseholdType}</div>
					<div><strong>Percent Renter:</strong>{bldg.rHouseholdRenterPerc }  </div>
					<div><strong>Percent Owner:</strong> {bldg.rHouseholdOwnerPerc } </div>
					<div><strong>Percent Affordable:</strong>{bldg.rHouseholdAffordPerc } </div>
					<div><strong>Estimated Household Income:</strong> {bldg.rHouseholdEstIncome }</div>
					<div><strong>Rent / sf:</strong> {bldg.rMonthlyRentSf}</div>
					<div><strong>Avg Rent (/Mo.):</strong> {bldg.rMonthlyRent}</div>
					<div><strong>Sales Price /sf:</strong> {bldg.rSalesPriceSf}</div>
					<div><strong>Avg Sales Price:</strong> {bldg.rSalesPrice}</div>
					<div><strong>Total Jobs / sf:</strong> {bldg.rJobsPerSf}			</div>
					<div><strong>Retail Gross sf:</strong> 		{bldg.rRetailSf} </div>
					<div><strong>Retail Lease Rate / sf:</strong> 	{bldg.rRetailLeaseRate} </div>
					<div><strong>Space per Retail Employee:</strong> {bldg.rRetailSpacePerEmp} </div>
					<div><strong>Retail Employees / sf:</strong> 	{bldg.rRetailEmpPerSf} </div>
					<div><strong>Office Gross sf:</strong> {bldg.rOfficeSf}</div>
					<div><strong>Office Lease Rate /sf:</strong> {bldg.rOfficeLeaseRate}</div>
					<div><strong>Space per Office Employee:</strong> {bldg.rOfficeSpacePerEmp} </div>
					<div><strong>Office Employees / sf:</strong> {bldg.rOfficeEmpPerSf}	</div>
					<div><strong>Industrial Gross sf:</strong> 	{bldg.rIndustrialSf}</div>
					<div><strong>Industrial Lease Rate /sf:</strong> {bldg.rIndustrialLeaseRate}</div>
					<div><strong>Space per Employee:</strong> 	{bldg.rIndustrialSpacePerEmp}</div>
					<div><strong>Industrial Employees / sf:</strong> {bldg.rIndustrialEmpPerSf}	</div>
					<div><strong>Public / Civic Gross sf:</strong> 	{bldg.rPublicSf}</div>
					<div><strong>Public / Civic Lease Rate / sf:</strong> {bldg.rPublicLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{bldg.rPublicSpacePerEmp}</div>
					<div><strong>Public / Civic Employees / sf:</strong> {bldg.rPublicEmpPerSf}</div>
					<div><strong>Educational Gross sf:</strong>{bldg.rEducationSf}</div>
					<div><strong>Educational Lease Rate /sf:</strong> {bldg.rEducationLeaseRate}</div>
					<div><strong>Space per Employee:</strong>{bldg.rEducationSpacePerEmp}</div>
					<div><strong>Educational Employees / sf:</strong>{bldg.rEducationEmpPerSf}</div>
					<div><strong>Hospitality Gross sf:</strong>{bldg.rHospitalitySf}</div>
					<div><strong>Hospitality Nightly Rate (per room):</strong>{bldg.rHospitalityRateNight} </div>
					<div><strong>Space per Employee:</strong>{bldg.rHospitalitySpacePerEmp} </div>
					<div><strong>Hospitality Employees / sf:</strong> {bldg.rHospitalityEmpPerSf}</div>
					<div><strong>Net Space per Hotel Room:</strong> {bldg.rHospitalityNetPerRoom} </div>
					<div><strong>Gross Space per Hotel Room:</strong>{bldg.rHospitalityGrossPerRoom}</div>
					<div><strong>Hotel Rooms / sf:</strong> {bldg.rHospitalityRoomsPerSf}</div>
					<div><strong>Shared Parking Gross sf:</strong> {bldg.rParkingGrossSf}</div>
					<div><strong>Parking Hourly Rate (per space):</strong> {bldg.rParkingRateHour}</div>
					<div><strong>Space per Employee:</strong>{bldg.rParkingSpacePerEmp}</div>
					<div><strong>Shared Parking Employees / sf:</strong> {bldg.rParkingEmpPerSf} </div>

					<div><strong>Parking Spaces:</strong>  {bldg.rParkingSpaces} </div>
					<div><strong>Parking sf:</strong>  {bldg.rParkingSf} </div>
					<div><strong>Internal / Structured Parking sf:</strong> {bldg.rInternalStructureParkingSf}  </div>
					<div><strong>Parking Cost:</strong> {bldg.rParkingCostSf} </div>
					<div><strong>Land Cost (per sf):</strong> {bldg.rLandCostSf} </div>
					<div><strong>Total Project Value:</strong>{bldg.rTotalPrjValue}  </div>
					<div><strong>Annual Property Tax Revenue (Year 1):</strong> {bldg.rPropTaxRevenueYr} </div>
					<div><strong>Total Fees / SDCs:</strong> {bldg.rTotalFees} </div>
					<div><strong>Subsidy:</strong>{bldg.rSubsidy}  </div>
					<div><strong>Internal Rate of Return (Rental):</strong> {bldg.rRateOfReturn}</div>
					<div><strong>Project Return (Owner):</strong>{bldg.rProjectReturn} </div>
					<div><strong>Y-Intercept:</strong> {bldg.rYIntercept} </div>
					<div><strong>Slope:</strong> {bldg.rSlope} </div>
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BuildingFormReviewComponent);
