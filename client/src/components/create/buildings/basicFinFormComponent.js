import React, { Component } from 'react';

class BasicFinFormComponent extends Component {
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
		console.log(this.props);
		let bldgAttr = this.props.attributes.basicFinInfo;
		
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h4>Basic Financial Costs</h4>
				</div>
				<div className="col m6 center-align">
					<form>
						<input
							placeholder="Residential Costs"
							name="residentialConCosts"
							onChange={event => this.handleChange(event)}
						/>
						<input
							placeholder="Retail Costs"
							name="retailConCosts"
							onChange={event => this.handleChange(event)}
						/>
					</form>
				</div>
				<div className="col m6 center-align">
					<form>
						<input
							placeholder="Office Costs"
							name="officeConCosts"
							onChange={event => this.handleChange(event)}
						/>
						<input
							placeholder="Industrial Costs"
							name="industrialConCosts"
							onChange={event => this.handleChange(event)}
						/>
						
					</form>
				</div>
			</div>
		);
	}
}

export default BasicFinFormComponent;
