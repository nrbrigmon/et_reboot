import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
// import { withStyles } from '@material-ui/core/styles';
import NumberFormat from 'react-number-format';
import ReactHighcharts from "react-highcharts";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import ThreeBuildingPrototypeScene from '../threeModels/three-building-prototype-scene';
import './_tableCSS.css';

const chartConfig = (data, title) => {
	return {
		chart: {
			type: "pie",
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false,
		},
		title: {
			text: title
		},
		// subtitle: {
		// 	text:
		// 	'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
		// },
		// xAxis: {
		// 	categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
		// 	title: {
		// 		text: null
		// 	}
		// },
		// yAxis: {
		// 	min: 0,
		// 	title: {
		// 		text: "Population (millions)",
		// 		align: "high"
		// 	},
		// 	labels: {
		// 		overflow: "justify"
		// 	}
		// },
		tooltip: {
			pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
		},
		// plotOptions: {
		// 	bar: {
		// 		dataLabels: {
		// 		enabled: true
		// 		}
		// 	}
		// },
		// legend: {
		// 	layout: "vertical",
		// 	align: "right",
		// 	verticalAlign: "top",
		// 	x: -40,
		// 	y: 80,
		// 	floating: true,
		// 	borderWidth: 1,
		// 	backgroundColor: "#FFFFFF",
		// 	shadow: true
		// },
		credits: {
			enabled: false
		},
		series: [{
			name: 'Use',
			colorByPoint: true,
			data: [{	
						name: (data.rResidentialSf === 0 ? null : 'Residential'),
						y:  (data.rResidentialSf === 0 ? null : data.rResidentialSf)
					}, {
						name: (data.rRetailSf === 0 ? null : 'Retail'),
						y: (data.rRetailSf === 0 ? null : data.rRetailSf)
					}, {
						name: (data.rOfficeSf === 0 ? null : 'Office'),
						y:  (data.rOfficeSf === 0 ? null : data.rOfficeSf)
					}, {
						name: (data.rIndustrialSf === 0 ? null : 'Industrial'),
						y: (data.rIndustrialSf === 0 ? null : data.rIndustrialSf)
					}, {
						name: (data.rPublicSf === 0 ? null : 'Public/Civic'),
						y: (data.rPublicSf === 0 ? null : data.rPublicSf)
					}, {
						name: (data.rEducationSf === 0 ? null : 'Educational'),
						y: (data.rEducationSf === 0 ? null : data.rEducationSf)
					}, {
						name: (data.rHospitalitySf === 0 ? null : 'Hotel/Hospitality'),
						y:  (data.rHospitalitySf === 0 ? null : data.rHospitalitySf)
					}, {
						name: ( (data.rParkingSf === 0 && data.rInternalStructureParkingSf === 0 ) ? null : 'Parking'),
						y: ( (data.rParkingSf === 0 && data.rInternalStructureParkingSf === 0 ) ? null : (data.rParkingSf+data.rInternalStructureParkingSf))
			}] 
		}]
	}
}
class BuildingFormReviewComponent extends Component {

	numberWithCommas = (x) => {
		x = parseInt(x, 10);
		return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}
	render() {		
		const { classes } = this.props;
		let bldg = this.props.attributes.forDevType;
		let bldgAttr = this.props.attributes.physicalInfo; 
		let propArea = (bldgAttr.siteArea)*.1;
		let bldgFootprint = (this.props.attributes.forDevType.rTotalSf / bldgAttr.buildingHeight)*.1;
		return (
			<Grid container className="myTables">
				<Grid item xs={12} className={classes.paper}>
					<h4>{bldg.rBuildingName} | {bldg.rLotLocation}</h4>
				</Grid>
				
				<Grid item xs={6} >
					<div>
						<h3>About</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Lot Area (sq ft)</TableCell> 
								<TableCell><NumberFormat value={bldg.rLotSize || 0} displayType={'text'} thousandSeparator={true} decimalScale={0} /></TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Lot Area (acres)</TableCell> 
								<TableCell> <NumberFormat value={bldg.rLotSize / 43560} displayType={'text'} thousandSeparator={true} decimalScale={2} /></TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Height</TableCell> 
								<TableCell>{bldg.rBuildingHeight || 0} stories</TableCell> 
							</TableRow>
							<TableRow>
								<TableCell>FAR</TableCell> 
								<TableCell><NumberFormat value={bldg.rFAR || 0} displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell> 
							</TableRow>
							<TableRow>
								<TableCell>Total Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rTotalSf || 0} displayType={'text'} thousandSeparator={true} decimalScale={2} /></TableCell> 
							</TableRow>
						</TableBody>
					</Table>
				</Grid>
				
				<Grid item xs={6}>
					<div>
						{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
						<ReactHighcharts config={chartConfig(bldg, "Building Sq Ft Mix (%)") } />	
					</div>	
				</Grid>
	
				<Grid item xs={12}>	
					<ThreeBuildingPrototypeScene
							cubeDim={{x: 5, y: 5, z: bldgAttr.buildingHeight, siteArea: propArea, 
							sqft: bldgFootprint, landscaping: bldgAttr.landscapingPerc }} />
				
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Parking and Value</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Parking Spaces</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingSpaces || 0 } displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Parking Cost</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingCostSf || 0 } prefix="$" displayType={'text'} thousandSeparator={true} decimalScale={0} /></TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Shared Parking Gross sq ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingGrossSf || 0 } prefix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /></TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Parking Hourly Rate (per space)</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingRateHour || 0 } prefix="$" displayType={'text'} thousandSeparator={true} decimalScale={2} /></TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Land Cost (per sf)</TableCell> 
								<TableCell><NumberFormat value={bldg.rLandCotSf || 0 } prefix="$" displayType={'text'} thousandSeparator={true} decimalScale={0} /></TableCell> 
							</TableRow>
							<TableRow>
								<TableCell>Total Project Value</TableCell> 
								<TableCell><NumberFormat value={bldg.rTotalPrjValue || 0 }  prefix="$" displayType={'text'} thousandSeparator={true} decimalScale={0} /></TableCell> 
							</TableRow>
						</TableBody>
					</Table>
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Building Use Mix</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Residential</TableCell> 
								<TableCell><NumberFormat value={bldg.rResidentialSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Retail</TableCell> 
								<TableCell><NumberFormat value={bldg.rRetailSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Office</TableCell> 
								<TableCell><NumberFormat value={bldg.rOfficeSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Industrial</TableCell> 
								<TableCell><NumberFormat value={bldg.rIndustrialSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Public / Civic</TableCell> 
								<TableCell><NumberFormat value={bldg.rPublicSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Educational</TableCell> 
								<TableCell><NumberFormat value={bldg.rEducationalSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Hotel / Hospitality</TableCell> 
								<TableCell><NumberFormat value={bldg.rHotelSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Internal / Structured Parking</TableCell> 
								<TableCell><NumberFormat value={bldg.rInternalParkingSfMix*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
					
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Housing</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Residential Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rResidentialSf || 0} suffix="" displayType={'text'}  thousandSeparator={true} decimalScale={0}  /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Net Sq Ft per Unit</TableCell> 
								<TableCell><NumberFormat value={bldg.rResidentialNetUnit || 0} suffix="" displayType={'text'} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Gross Sq Ft per Unit</TableCell> 
								<TableCell><NumberFormat value={bldg.rResidentialGrossUnit || 0} suffix="" displayType={'text'} decimalScale={0}  /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Dwelling Units per Acre</TableCell> 
								<TableCell><NumberFormat value={bldg.rResidentialDwellUnit || 0} suffix="" displayType={'text'}  decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Type of Housing</TableCell> 
								<TableCell><NumberFormat value={bldg.rHouseholdType || 0} suffix="" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Percent Renter</TableCell> 
								<TableCell><NumberFormat value={bldg.rHouseholdRenterPerc*100 || 0} suffix="%" displayType={'text'} decimalScale={0}  /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Percent Owner</TableCell> 
								<TableCell><NumberFormat value={bldg.rHouseholdOwnerPerc*100 || 0} suffix="%" displayType={'text'} decimalScale={0}  /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
					
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Sales and Income</h3>
					</div>
					
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Percent Affordable</TableCell> 
								<TableCell><NumberFormat value={bldg.rHouseholdAffordPerc*100 || 0} suffix="%" displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Estimated Household Income</TableCell> 
								<TableCell><NumberFormat value={bldg.rHouseholdEstIncome || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Rent per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rMonthlyRentSf || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Avg Rent per Month</TableCell> 
								<TableCell><NumberFormat value={bldg.rMonthlyRent || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Sales Price per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rSalesPriceSf || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Avg Sales Price</TableCell> 
								<TableCell><NumberFormat value={bldg.rSalesPrice || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
					
					
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Jobs and Employment</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Total Jobs per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rJobsPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Retail Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rRetailSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Office Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rOfficeSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Industrial Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rIndustrialSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Civic Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rPublicSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Education Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rEducationSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Hospitality Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalitySpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Space per Parking Employee</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingSpacePerEmp || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Retail Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rRetailEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Office Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rOfficeEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Industrial Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rIndustrialEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Civic Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rPublicEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Educational Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rEducationEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Hospitality Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalityEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Parking Employees per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rParkingEmpPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Use, Space, and Rates</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Retail Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rRetailSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Office Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rOfficeSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Industrial Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rIndustrialSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Civic Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rPublicSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Educational Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rEducationSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Hospitality Gross Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalitySf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Retail Lease Rate per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rRetailLeaseRate || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Office Lease Rate Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rOfficeLeaseRate || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Industrial Lease Rate Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rIndustrialLeaseRate || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Civic Lease Rate per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rPublicLeaseRate || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Educational Lease Rate per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rEducationLeaseRate || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Hospitality Nightly Rate (per room)</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalityRateNight || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Net Space per Hotel Room</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalityNetPerRoom || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Gross Space per Hotel Room</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalityGrossPerRoom || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Hotel Rooms per Sq Ft</TableCell> 
								<TableCell><NumberFormat value={bldg.rHospitalityRoomsPerSf || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Grid>

				<Grid item xs={6}>	
					<div>
						<h3>Other</h3>
					</div>
					<Table  >
						<TableBody>
							<TableRow>
								<TableCell>Annual Property Tax Revenue (Year 1)</TableCell> 
								<TableCell><NumberFormat value={bldg.rPropTaxRevenueYr || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Total Fees / SDCs</TableCell> 
								<TableCell><NumberFormat value={bldg.rTotalFees || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Subsidy</TableCell> 
								<TableCell><NumberFormat value={bldg.rSubsidy || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Internal Rate of Return (Rental)</TableCell> 
								<TableCell><NumberFormat value={bldg.rRateOfReturn*100 || 0} prefix="" suffix="%" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Project Return (Owner)</TableCell> 
								<TableCell><NumberFormat value={bldg.rProjectReturn*100 || 0} prefix="" suffix="%" displayType={'text'} thousandSeparator={true} decimalScale={0} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Y-Intercept</TableCell> 
								<TableCell><NumberFormat value={bldg.rYIntercept || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Slope</TableCell> 
								<TableCell><NumberFormat value={bldg.rSlope || 0} prefix="" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={2} /> </TableCell>
							</TableRow>
						</TableBody>
					</Table>
				</Grid>
			</Grid>
		);
	}
}

export default BuildingFormReviewComponent;
