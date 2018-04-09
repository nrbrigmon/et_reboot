import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ThreeBuildingPrototype from './create/threeModels/three-building-prototype';

const styles = theme => ({
	root: {
		flexGrow: 1,
		alignItems: 'center',
		width: '100%',
		margin: '0px'
	},
	wrapper: {
		maxWidth: '900px',
		background: 'white',
		backgroundColor: 'white'
	},
	paper: {
	  textAlign: 'center',
	},
	card: {
		// margin: '20px',
		justify: 'center'
	},
	sectionHeader:{
		height: '375px',
		justify: 'center',
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
			<Grid 
				container
				justify="center"
				className={classes.root}
				spacing={16}>
				<Grid item xs={12} className={classes.wrapper}>
				<Grid 
					container
					className={classes.root}
					justify="center">
					<Grid container 
						justify="center" 
						className={classes.sectionHeader}
						spacing={16}>
						<Grid item sm={5} className={classes.card}>
							<h2>Software for urban planners</h2>
							<ul>
								<li>Quickly Implement Land Use Plans</li>
								<li>Measure Impacts in Real Time</li>
								<li>Visualize Results In 3D</li>
							</ul>
						</Grid>
						<Grid item sm={5} className={classes.card}>
							<ThreeBuildingPrototype 
								cubeDim={{x: 5, y: 5, z: 3, siteArea: 1000, 
								sqft: 250, landscaping: .75 }} />
						</Grid>



					</Grid>

					<Grid item md={4} sm={6} xs={12}>
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
					<Grid item md={4} sm={6} xs={12}>
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
					<Grid item md={4} sm={6} xs={12}>
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
					<Grid item md={4} sm={6} xs={12}>
						<Card className={classes.card}>
							<CardContent>
								<Typography variant="headline" component="h2">
									View the Map
								</Typography>
								<Typography component="p">
									Examine locations where users have created scenarios and
									examine impacts.
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

				</ Grid>
				</ Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Welcome);
