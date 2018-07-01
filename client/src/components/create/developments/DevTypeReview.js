import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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


	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}

	render() {
		const { classes } = this.props;
		
		// console.log(this.props);
		return (
			<Grid item xs={12} >
				<h2>Review</h2>
				<Card >
					<CardContent>
						<Typography type="headline" component="h3">
						Development Types 
						</Typography>
						
						TIME TO REVIEW!!!!!<br/>Metrics page i guess
						<CardActions>
							<div className={classes.cardAction}>
                                <Button  className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('create/dev-types/building-mix')}>
									Building Mix
								</Button>	
								<Button  className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('create/dev-types/attributes')}>
                                    Attributes
                                </Button>	
                                <Button  className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('create/dev-types/review')}>
                                    Review
                                </Button>	
								<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('metrics')}>
									Test Metrics
								</Button>		
								<Button className={classes.cardButton} variant="raised" color="secondary" onClick={()=>this.handleNavigation('map')}>
									Start Mapping
								</Button>	
							</div>
						</CardActions>
					</CardContent>
				</Card>
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