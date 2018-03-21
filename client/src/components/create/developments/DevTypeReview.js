import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

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
	},
	cardButton: {
		margin: '0 1px 0 1px'
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
									<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('attributes')}>
										Go Back
									</Button>	
									<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>alert("saved!... later...")}>
										Save
									</Button>
									<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.props.history.push('/metrics')}>
										Test Metrics
									</Button>		
									<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.props.history.push('/map')}>
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
			devWorkbook: state.devWorkbook
		 };
}
  
const styledApp = withStyles(styles)(DevTypeReview);
export default withRouter(connect(mapStateToProps, actions)(styledApp));