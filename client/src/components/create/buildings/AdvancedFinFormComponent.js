import React, { Component } from 'react';

import Grid from 'material-ui/Grid';

// import { connect } from 'react-redux';
// import * as actions from '../../../actions';

import inputFields from './inputs/advancedFinancialInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';

class AdvancedFinFormComponent extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e, valueSub) => {
		// console.log(e, percentSub);
		let updateCopy = {};
		if (valueSub){
			updateCopy[e.target.id] = valueSub;
		} else {
			updateCopy[e.target.id] = e.target.value;
		}
		// console.log(updateCopy);
		this.props.updateBuildingPrototypeField('advFinInfo', updateCopy);
	};


	render() {
		let bldgAttr = this.props.attributes.advFinInfo;
		const { classes } = this.props;
		const { section1, section2, section3,
			section4, section5, section6, section7 } = inputFields;
		// console.log(bldgAttr);
			
		return (
			<Grid container >
				<Grid item xs={6}> 
					<h5>Building Efficiency</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section1}} />
				</Grid>
				<Grid item xs={6}> 
					<div style={{ border: '1px solid grey', height: '300px' }}>
						cool chart component goes here...
					</div>
				</Grid>
				
				<Grid item xs={12}>
					<hr />
				</Grid>

				<Grid item xs={6}> 
					<h5>Occcupancy Rate</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section2}} />
				</Grid>

				<Grid item xs={6}> 	
					<h5>Pre Development Costs</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section3}} />
					<h5>Development Costs</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section4}} />
					<h5>Indirect Costs</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section5}} />
					
				</Grid>

				<Grid item xs={12}>
					<hr />
				</Grid>

				<Grid item xs={6}> 
					<h5>Property Taxes</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section6}} />
				</Grid>

				<Grid item xs={6}> 
					<h5>Financial Targets</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section7}} />
				</Grid>
			</Grid>
		);
	}
}
 
export default AdvancedFinFormComponent;