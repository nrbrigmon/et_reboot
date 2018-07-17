import React, { Component } from 'react';
import inputFields from './inputs/advancedFinancialInputs';
import InputFieldsComponent from './inputs/InputFieldsComponent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import NumberFormat from 'react-number-format';

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
		let bldg = this.props.attributes.forDevType;
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
					<Grid item xs={12} className={classes.indicator}> 
						<Typography variant="headline" component="h1">
							Estimated Annual Property Tax Revenue: <br />
							<NumberFormat value={bldg.rPropTaxRevenueYr || 0} prefix="$" suffix="" displayType={'text'} thousandSeparator={true} decimalScale={0} />
						</Typography>
					</Grid>
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