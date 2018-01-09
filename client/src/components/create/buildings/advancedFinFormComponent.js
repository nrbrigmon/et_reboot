import React, { Component } from 'react';

class AdvancedFinFormComponent extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);	
		console.log('updated entire building protoype')


	}

	handleChange = e => {
		let buildingCopy = {};
		buildingCopy[e.target.name] = e.target.value;
		this.props.buildingUpdate(buildingCopy);
	};

	changePage = e => {
		this.props.pageChange(e.target.value);
	};

	render() {
		let bldgAttr = this.props.attributes.advFinInfo;
		return (
		
			
			<div className="row">
				<div className="col s12 center-align">
					<h4>Advanced Financial Costs</h4>
				</div>
				<div className="col m6 center-align">
					<form>
						<input
							className=""
							placeholder="Residential Rate"
							name="residentialRentalRate"
							onChange={event => this.handleChange(event)}
						/>
						<input
							className=""
							placeholder="Retail Rate"
							name="retailRentalRate"
							onChange={event => this.handleChange(event)}
						/>
					</form>
				</div>
				<div className="col m6 center-align">
					<form>
						<input
							className=""
							placeholder="Office Rate"
							name="officeRentalRate"
							onChange={event => this.handleChange(event)}
						/>

						<input
							className=""
							placeholder="Industrial Rate"
							name="industrialRentalRate"
							onChange={event => this.handleChange(event)}
						/>
						{/*<input
							className=""
							placeholder="Site Area"
							name="siteArea"
							onChange={event => this.handleChange(event)}
						/>
						<input
							className=""
							placeholder="Site Location"
							name="siteLocation"
							onChange={event => this.handleChange(event)}
						/>*/}
					</form>
				</div>
			</div>
		);
	}
}

export default AdvancedFinFormComponent;
