import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';
import * as helper from '../../../utils/_helperMethods';

class DevelopmentTypeReview extends Component {

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
									onClick={()=>helper.navigateTo('dev-types/building-mix', this.props)} >
									Building Mix
								</Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('dev-types/attributes', this.props)} >
                                    Attributes
                                </Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="secondary" 
									onClick={()=>helper.navigateTo('dev-types/review', this.props)} >
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
									onClick={()=>helper.navigateTo('mapping', this.props)} >
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

export default DevelopmentTypeReview;