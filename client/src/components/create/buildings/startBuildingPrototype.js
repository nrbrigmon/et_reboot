import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PhysicalFormComponent from './physicalFormComponent';
import BasicFinFormComponent from './basicFinFormComponent';
import AdvancedFinFormComponent from './advancedFinFormComponent';
import BuildingFormReviewComponent from './buildingFormReviewComponent';
import BuildingPrintSummary from './buildingPrintSummary';

class StartBuildingPrototype extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageChoice: 'sum',
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
					monthlyRentPerSf: 1.4,
					monthlyParkingCost: 0,
					salesPricePerSf: 1000,
					commercialRetailRentSf: 0,
					commercialOfficeRentSf: 0,
					commercialIndustrialRentSf: 0,
					commercialPublicRentSf: 0,
					commercialEducationRentSf: 0,
					commercialHotelRentSf: 0,
					commercialParkingRentSf: 0
				},
				advFinInfo: {
					residentialRentalPerc: 0,
					retailRentalPerc: 0,
					officeRentalPerc: 0,
					industrialRentalPerc: 0,
					publicRentalPerc: 0,
					educationRentalPerc: 0,
					hotelRentalPerc: 0,
					parkingRentalPerc: 0
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
	componentSelection(choice) {
		this.setState({
			pageChoice: choice
		});
	}

	handleSubmit() {
		axios.post('/api/buildings', this.state.BP).then(function(res) {
			alert('new row added...');
		});
		this.props.history.push('/create');
	}

	renderContent() {
		let pg = this.state.pageChoice;
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
		return (
			<div>
				<nav className="nav-extended">
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
				
			</div>
		);
	}
}
export default StartBuildingPrototype;
