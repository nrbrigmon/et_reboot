import React, { Component } from 'react';
 
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import inputFields from './inputs/physicalInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';
import PercentStatusCheck from '../../PercentStatusCheck';

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
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange = (e, valueSub) => {
		// console.log(e, percentSub);
		let updateCopy = {};
		if (valueSub){
			updateCopy[e.target.id] = Number(valueSub);
		} else {
			updateCopy[e.target.id] = e.target.value;
		}
		// console.log(updateCopy);
		this.props.updateBuildingPrototypeField('physicalInfo', updateCopy);
	};
	
	render() {
		let bldgAttr = this.props.attributes.physicalInfo;
		let { residentialUsePerc, retailUsePerc, officeUsePerc, industrialUsePerc, publicUsePerc, educationUsePerc, hotelUsePerc, parkingUsePerc } = bldgAttr;
		const { classes } = this.props;
		const { section1, section2, section3, section4, section5, section6 } = inputFields;
		// console.log(bldgAttr)
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
					<p>{ PercentStatusCheck([residentialUsePerc, retailUsePerc, officeUsePerc, industrialUsePerc, publicUsePerc, educationUsePerc, hotelUsePerc, parkingUsePerc], "Building Check: ")}</p>

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

const styledApp = withStyles(styles)(PhysicalFormComponent);
export default connect(null, actions)(styledApp);