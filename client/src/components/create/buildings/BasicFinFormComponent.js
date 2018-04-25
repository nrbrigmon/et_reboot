import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
// import { withStyles } from 'material-ui/styles';

// import { connect } from 'react-redux';
// import * as actions from '../../../actions';

import inputFields from './inputs/basicFinancialInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';

class BasicFinFormComponent extends Component {
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
		this.props.updateBuildingPrototypeField('basicFinInfo', updateCopy);
	};

	render() {
		// console.log(this.props);
		let bldgAttr = this.props.attributes.basicFinInfo;
		const { classes } = this.props;
		const { section1,section2,section3,section4 } = inputFields;
		// console.log(bldgAttr);
		return (
			<Grid container >
				
				<Grid item xs={6}> 
					<h5>Construction Costs (Core, Shell and Improvements)</h5>
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
					<h5>Construction Costs (Core, Shell and Improvements)</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section2}} />
				</Grid>
				<Grid item xs={6}> 
					<h5>Construction Costs (Core, Shell and Improvements)</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section3}} />
				</Grid>
				
				<Grid item xs={12}>
					<hr />
				</Grid>
				<Grid item xs={6}> 
					<h5>Construction Costs (Core, Shell and Improvements)</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section4}} />
				</Grid>
				<Grid item xs={6}> 
					<div style={{ border: '1px solid grey', height: '300px' }}>
						cool chart component goes here...
					</div>
				</Grid>
				
			</Grid>
		);
	}
}

export default BasicFinFormComponent;