import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import inputFields from './inputs/basicFinancialInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';
import Typography from 'material-ui/Typography';
import NumberFormat from 'react-number-format';

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
		let bldg = this.props.attributes.forDevType;
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
					<Grid item xs={12} className={classes.indicator}> 
						<Typography variant="headline" component="h1">
							Estimated Rent: <br />
							<NumberFormat value={bldg.rMonthlyRent || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} /> 
						</Typography>
					</Grid>
					<Grid item xs={12} className={classes.indicator}> 
						<Typography variant="headline" component="h1">
							Sales Price: <br />
							<NumberFormat value={bldg.rSalesPrice || 0} suffix="" prefix="$" thousandSeparator={true} displayType={'text'} />
						</Typography>
					</Grid>
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
					<Grid item xs={12} className={classes.indicator}> 
						<Typography variant="headline" component="h1">
							Total Project Value: <br />
							<NumberFormat value={bldg.rTotalPrjValue || 0 }  prefix="$" displayType={'text'} thousandSeparator={true} decimalScale={0} />
						</Typography>
					</Grid>
				</Grid>
				
			</Grid>
		);
	}
}

export default BasicFinFormComponent;