import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%'
	},
	paper: {
	  textAlign: 'center',
	},
	card: {
		// maxWidth: 345,
		margin: '20px',
		justify: 'center'
	},
	centerCard: {
		margin: '20px',
		// display: 'flex',
		// justify: 'center',
		// justifyContent: 'center',
		alignItems: 'center'
	}
  });

class Welcome extends Component {
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	render() {
		const { classes } = this.props;
		return (
			  <Grid container
			  	className={classes.root}
				alignItems='center'
				direction='row'
				justify='center'>
				
				<Grid item sm={12} className={classes.paper}>
					<h2>Be a Developer</h2>
				</Grid>
				<Grid item md={4} sm={12}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="headline" component="h2">
								Build and Analyze
							</Typography>
							<Typography component="p">
								Build a development from scratch or use existing data
								approved by others.
							</Typography>
							</CardContent>
							<CardActions>
							<Button size="small" variant="raised" color="primary" onClick={()=>this.handleNavigation('create')}>
								Start here
							</Button>
							
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={4} sm={12}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="headline" component="h2">
								Explore the Gallery
							</Typography>
							<Typography component="p">
								Explore datasets, maps, ideas, and designs created by the
								community.
							</Typography>
							</CardContent>
							<CardActions>
							<Button size="small" variant="raised" color="primary"
								 onClick={()=>this.handleNavigation('gallery')}>
								Start here
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={4} sm={12}>
					<Card className={classes.card}>
						<CardContent>
							<Typography variant="headline" component="h2">
								The Business Case
							</Typography>
							<Typography component="p">
								Why this application? What problems does it solve and to
								whom is it targeted?
							</Typography>
							</CardContent>
							<CardActions>
							<Button size="small" variant="raised" color="primary"
								 onClick={()=>this.handleNavigation('pitch')}>
								Start here
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item md={4} sm={12}>
					<Card className={classes.centerCard}>
						<CardContent>
							<Typography variant="headline" component="h2">
								Go to the Map
							</Typography>
							<Typography component="p">
								Straight to the map
							</Typography>
							</CardContent>
							<CardActions>
							<Button size="small" variant="raised" color="primary"
								 onClick={()=>this.handleNavigation('map')}>
								Start here
							</Button>
						</CardActions>
					</Card>
				</Grid>

			</Grid>
		);
	}
}

export default withStyles(styles)(Welcome);
