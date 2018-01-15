import React, { Component } from 'react';
import { updateMathModule } from './_buildingMathModule';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import inputFields from './inputs/basicFinancialInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '80%'
	}
});

class BasicFinFormComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			localBP: this.props.attributes
		}
		this.handleChange = this.handleChange.bind(this);		
		// console.log('updated entire building protoype')

	}

	handleChange = e => {
		let buildingCopy = {};
		buildingCopy[e.target.name] = e.target.value;
		this.props.buildingUpdate(buildingCopy);
		updateMathModule(this.state.localBP);

	};


	render() {
		// console.log(this.props);
		let bldgAttr = this.props.attributes.basicFinInfo;
		const { classes } = this.props;
		const { section1,section2,section3,section4 } = inputFields;

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

export default withStyles(styles)(BasicFinFormComponent);
