import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';


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

  
class DevTypeReview extends Component {

    handleNavigation = val => {
		this.props.changePage(val);
    }
	render() {
		const { classes } = this.props;
		
		// console.log(this.props);
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>

				<Grid item xs={12} className={classes.card}>
					<h2>Review</h2>
					<Card className={classes.card}>
						<CardContent>
							<Typography type="headline" component="h3">
							Development Types 
							</Typography>
							
							TIME TO REVIEW!!!!!
							<CardActions>
								<div className={classes.cardAction}>
									<Button dense raised color="accent" onClick={()=>this.handleNavigation('attributes')}>
										Go Back
									</Button>	
									<Button dense raised color="accent" onClick={()=>alert("saved!... later...")}>
										Save
									</Button>
									<Button dense raised color="accent" onClick={()=>this.props.history.push('/metrics')}>
										Test Metrics
									</Button>		
									<Button dense raised color="accent" onClick={()=>this.props.history.push('/map')}>
										Start Mapping
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
  
const styledApp = withStyles(styles)(DevTypeReview);
export default connect(mapStateToProps, actions)(styledApp);