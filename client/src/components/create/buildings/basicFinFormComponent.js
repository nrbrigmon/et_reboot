import React, { Component } from 'react';

import TextField from 'material-ui/TextField';

import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	}
	// card: {
	// 	// margin: '10px'
	// },
	// button: {
	// 	width: '100%',
	// 	margin: '10px 0 10px 0'
	// }
	});
class BasicFinFormComponent extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);		
		// console.log('updated entire building protoype')

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
		// console.log(this.props);
		let bldgAttr = this.props.attributes.basicFinInfo;
		const { classes } = this.props;
		return (
			<Grid container >
				<Grid item xs={12} className={classes.paper}>
				<h4>Basic Financial Costs</h4>
				</Grid>
				<Grid item xs={6}> 
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
					</Grid>
					<Grid item xs={6}> 
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
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(BasicFinFormComponent);
