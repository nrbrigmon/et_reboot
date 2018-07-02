import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import * as helper from '../../../utils/_helperMethods';

import _DevTypeStyles from '../../../styles/DevTypeStyles';

const styles = theme => _DevTypeStyles(theme);

class DevTypeReview extends Component {

	render() {
		const { classes } = this.props;
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
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('create/dev-types/building-mix', this.props)} >
									Building Mix
								</Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('create/dev-types/attributes', this.props)} >
                                    Attributes
                                </Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('create/dev-types/review', this.props)} >
                                    Review
                                </Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('metrics', this.props)} >
									Test Metrics
								</Button>		
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('map', this.props)} >
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