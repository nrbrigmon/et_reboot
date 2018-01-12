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
	
class AdvancedFinFormComponent extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);	

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
		const { classes } = this.props;
		return (
		
			<Grid container >
				<Grid item xs={12} className={classes.paper}>
					<h4>Advanced Financial Costs</h4>
				</Grid>
				<Grid item xs={6}> 
				
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
					</Grid>
					<Grid item xs={6}> 
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
				</Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(AdvancedFinFormComponent);
