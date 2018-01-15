import React, { Component } from 'react';
import { updateMathModule } from './_buildingMathModule';
 
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import inputFields from './inputs/physicalInputs';
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


class PhysicalFormComponent extends Component {
	constructor(props) {
		super(props);
		this.state = {
			localBP: this.props.attributes
		}
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = e => {
		let buildingCopy = {};
		buildingCopy[e.target.id] = e.target.value;
		this.props.buildingUpdate(buildingCopy);
		updateMathModule(this.state.localBP);
	};

	render() {
		let bldgAttr = this.props.attributes.physicalInfo;
		const { classes } = this.props;
		const { section1, section2, section3, section4, section5, section6 } = inputFields;
		return (
			<Grid container >
				<Grid item xs={6}> 
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section1}} />
				</Grid>
				<Grid item xs={6}> 
					<div style={{ border: '1px solid grey', height: '300px' }}>
						threeJS 3D component goes here...
					</div>
				</Grid>
				<Grid item xs={12}>
					<hr />
				</Grid>
				<Grid item xs={6}> 
					<h5>Building Use</h5>
					<InputFieldsComponent 
							inputUpdate={this.handleChange}
							attributes={{bldgAttr, classes, section: section2}} />
					<p>Building Check: xxx%</p>

				</Grid>
				<Grid item xs={6}> 
					<InputFieldsComponent 
						inputUpdate={this.handleChange}
						attributes={{bldgAttr, classes, section: section3}} />
			
					<h5>Gross Area per Employee by Sector (Average)</h5>
					<InputFieldsComponent 
						inputUpdate={this.handleChange}
						attributes={{bldgAttr, classes, section: section4}} />
			
				</Grid> 
				
				<Grid item xs={12}>
					<hr />
				</Grid>
				
				<Grid item xs={6}> 
					<h5>Parking Requirements</h5>
					<InputFieldsComponent 
						inputUpdate={this.handleChange}
						attributes={{bldgAttr, classes, section: section5}} />
					
				</Grid>
				
				<Grid item xs={6}> 
					<h5>Parking Layout</h5>
					<InputFieldsComponent 
						inputUpdate={this.handleChange}
						attributes={{bldgAttr, classes, section: section6}} />

				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(PhysicalFormComponent);
