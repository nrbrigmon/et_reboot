import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
// import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';

import axios from 'axios';
import PhysicalFormComponent from './physicalFormComponent';
import BasicFinFormComponent from './basicFinFormComponent';
import AdvancedFinFormComponent from './advancedFinFormComponent';
import BuildingFormReviewComponent from './buildingFormReviewComponent';
import BuildingPrintSummary from './buildingPrintSummary';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	// },
	// paper: {
	//   textAlign: 'center',
	// },
	// card: {
	// 	// margin: '10px'
	// },
	// button: {
	// 	width: '100%',
	// 	margin: '10px 0 10px 0'
	}
  });

  class StartBuildingPrototype extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageChoice: 'sum',
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
					occupancy1YrOfficential: 0,
					occupancy1YrIndustrial: 0,
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
					devDevelopmentCosts: 0,
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
					contingency: 0
			// 					Property Taxes
				// Property Tax Rate (% of project value: building + land)
				// Assessment Ratio (Assessment Value / Market Value)

				// Financial Targets
				// Cash-on-Cash (After Year 3)
				// IRR on Project Cost (Unleveraged Return)
				// IRR on Investor Equity (Leveraged Return Before Tax)
				// Debt Service Coverage Ratio (Year 3)
				// IRR on Public Participation


				// Project Rate of Return
				// Return to Equity

				// Financial Assumptions
				// Projected retail sales per sf (retail only)
				// % of sales to rent (retail only)
				// Other income (vending, fines)
				// Concessions and bad debt
				// Operating costs (per unit, % of GPI, or per space) ◊
				// Going in cap rate
				// Gross potential income - escalation
				// Operating costs - escalation
				// Property value - annual appreciation
				// Terminal cap rate, gross sales price
				// Net sales = price less sales cost

				// Primary Debt
				// Maximum LTV
				// Interest rate
				// Amortization period - years


				}
			}
		};
		this.componentSelection = this.componentSelection.bind(this);
		this.updatePrototypePhys = this.updatePrototypePhys.bind(this);
		this.updateBasicFinInfo = this.updateBasicFinInfo.bind(this);
		this.updateAdvFinInfo = this.updateAdvFinInfo.bind(this);
	}

	updatePrototypePhys(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.physicalInfo[key] = val;
		this.setState(buildingCopy);
	}

	updateBasicFinInfo(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.basicFinInfo[key] = val;
		this.setState(buildingCopy);
	}

	updateAdvFinInfo(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.advFinInfo[key] = val;
		this.setState(buildingCopy);
	}
	
	componentSelection = (e, value) => {
		// console.log(value)
		// console.log(this.state.pageChoice)
		this.setState({
			tabValue: value
		});
	}
	handleSubmit() {
		axios.post('/api/buildings', this.state.BP).then(function(res) {
			alert('new row added...');
		});
		this.props.history.push('/create');
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
					attributes={this.state.BP}
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
				<Grid item sm={8} xs={12}>
					{this.renderChildContent(this.state.tabValue)}
				</Grid>
				{/* <nav className="nav-extended">
					<div className="nav-content">
						<ul className="tabs tabs-transparent">
							<li	className={
									this.state.pageChoice === 'phys'
										? 'tab active'
										: 'tab'
								}
								onClick={() =>
									this.setState({
										pageChoice: 'phys'
									})}>
								<a> Physical Inputs </a>
							</li>
							<li className={
									this.state.pageChoice === 'fin1'
										? 'tab active'
										: 'tab'
								}
								onClick={() =>
									this.setState({
										pageChoice: 'fin1'
									})}>
								<a> Basic Financial </a> 
							</li>
							
							<li className={
									this.state.pageChoice === 'fin2'
										? 'tab active'
										: 'tab'
								}
								onClick={() =>
									this.setState({
										pageChoice: 'fin2'
									})}>
								<a> Advanced Financial </a> 
							</li>
							
							<li className={
									this.state.pageChoice === 'sum'
										? 'tab active'
										: 'tab'
								}
								onClick={() =>
									this.setState({
										pageChoice: 'sum'
									})}>
								<a> Review </a> 
							</li>
							
							<li className={
									this.state.pageChoice === 'print'
										? 'tab active'
										: 'tab'
								}
								onClick={() =>
									this.setState({
										pageChoice: 'print'
									})}>
								<a> Print </a> 
							</li>
							
						</ul>
						
					</div>
					
				</nav>
				<div className="row">
					<div className="col s12">
						<div> {this.renderContent()} </div> 

						<div className="row">

							<div className="col s8 offset-s2 center-align custom-act-btns">
								
								<button 
									className="waves-effect waves-light btn"
									onClick={() =>
										this.handleSubmit()}>
									Save									
								</button>
								<Link
									to="/create"
									className="waves-effect waves-light btn">
									Cancel 
								</Link>
								
							</div>
							
						</div>
						
					</div>
					
				</div>
				 */}
			</Grid>
		);
	}
}
export default withStyles(styles)(StartBuildingPrototype);
