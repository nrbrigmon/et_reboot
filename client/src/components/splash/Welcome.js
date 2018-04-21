import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ThreeBuildingPrototypeScene from '../create/threeModels/three-building-prototype-scene';
import WelcomeCard from './WelcomeCard';
import CheckIcon from 'material-ui-icons/Check';
import Wrapper900 from '../wrappers/Wrapper900';
import welcomeActions from './WelcomeActions';

const styles = theme => ({
	paper: {
	  textAlign: 'center',
	},
	section: {
		marginBottom:'50px'
	},
	card: {
		marginBottom: '60px',
		marginTop: '60px'
	}
  });

class Welcome extends Component {
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	render() {
		const { classes } = this.props;

		return (
			<Wrapper900>
					<Grid item sm={5} className={classes.card}>
						<h2>Software for urban planners</h2>
						<List>
							<ListItem >
								<ListItemIcon>
									<CheckIcon />
								</ListItemIcon>
								<ListItemText primary={'Implement Land Use Plans'} /> 
							</ListItem>
							<ListItem >
								<ListItemIcon>
									<CheckIcon />
								</ListItemIcon><ListItemText primary={'Measure Impacts in Real Time'} /> 
							</ListItem>
		
							<ListItem >
								<ListItemIcon>
									<CheckIcon />
								</ListItemIcon><ListItemText primary={'Visualize Results In 3D'} /> 
							</ListItem>
						</List>
					</Grid>

					<Grid item sm={5} className={classes.card}>
						<ThreeBuildingPrototypeScene 
							cubeDim={{x: 5, y: 5, z: 3, siteArea: 1000, 
							sqft: 250, landscaping: .75 }} />
					</Grid>
					{
						welcomeActions.map( (card, idx) => {
							return <WelcomeCard {...card} key={idx}/>
						})
					}
			</ Wrapper900>
		);
	}
}

export default withStyles(styles)(Welcome);
