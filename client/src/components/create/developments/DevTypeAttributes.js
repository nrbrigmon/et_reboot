import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import columns from './inputs/attributeColumns';
import DevTypeAttributesTable from './DevTypeAttributesTable';

const styles = theme => ({
	table: {
	  minWidth: 700,
	},
	card: {
		padding: '20px'
	},
	cardAction: {
		margin: '0 auto'
	}
  });

  
class DevTypeAttributes extends Component {

    handleNavigation = val => {
		this.props.changePage(val);
    }

	render() {
		const { classes } = this.props;
		
		const { section1,section2,section3 } = columns;

		// console.log(this.props);
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>
				
				<Grid item sm={12} className={classes.card}>
				<h2>Step Three: Create Development Type Attributes</h2>
					<Card className={classes.card}>
					<CardContent>
						<Typography type="headline" component="h3">
							Block Size
						</Typography>
						<DevTypeAttributesTable { ...this.props} columns={section1}/>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Street Characteristics
						</Typography>
						<DevTypeAttributesTable { ...this.props} columns={section2}/>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Public Space Dedication
						</Typography>
						<DevTypeAttributesTable { ...this.props} columns={section3}/>
						<br />
						<br />

						<CardActions>
							<div className={classes.cardAction}>
								<Button dense color="primary" onClick={()=>this.handleNavigation('mix')}>
									Go Back
								</Button>	
								<Button dense color="primary" onClick={()=>alert("saved!... later...")}>
									Save Progress
								</Button>	
								<Button dense color="primary" onClick={()=>this.handleNavigation('review')}>
									Review 
								</Button>	
							</div>
						</CardActions>
					</CardContent>
				</Card>
				</Grid>
			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
			devTypes: state.devTypes
		 };
}
  
const styledApp = withStyles(styles)(DevTypeAttributes);
export default connect(mapStateToProps, actions)(styledApp);