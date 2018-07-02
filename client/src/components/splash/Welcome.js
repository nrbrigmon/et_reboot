import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import ThreeBuildingPrototypeScene from '../create/threeModels/three-building-prototype-scene';
import WelcomeCard from './WelcomeCard';
import Wrapper900 from '../wrappers/Wrapper900';
import welcomeActions from './welcomeActions';
import _WelcomeStyles from '../../styles/WelcomeStyles';
import * as helper from '../../utils/_helperMethods';

const styles = theme => _WelcomeStyles(theme);

class Welcome extends Component {

	render() {
		const { classes } = this.props;

		return (
			<Wrapper900>
					<Grid item xs={12} sm={12} md={5} className={classes.card}>
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
								</ListItemIcon>
								<ListItemText primary={'Measure Impacts in Real Time'} /> 
							</ListItem>
		
							<ListItem >
								<ListItemIcon>
									<CheckIcon />
								</ListItemIcon>
								<ListItemText primary={'Visualize Results In 3D'} /> 
							</ListItem>
						</List>
					</Grid>

					<Grid item xs={12} sm={12} md={5} className={classes.grid}>
						<ThreeBuildingPrototypeScene 
							cubeDim={{x: 5, y: 5, z: 3, siteArea: 1000, 
							sqft: 250, landscaping: .75 }} />
					</Grid>

					<Grid item xs={12} sm={12} className={classes.grid}>
						<Button variant="raised" 
							color="primary" 
							className={classes.root}
							onClick={()=>helper.navigateTo('demo', this.props)} >
							<p>View the Demo</p>
						</Button>
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

const styledApp = withStyles(styles)(Welcome);
export default styledApp;
