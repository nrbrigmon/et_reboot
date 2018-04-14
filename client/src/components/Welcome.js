import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ThreeBuildingPrototype from './create/threeModels/three-building-prototype';
import WelcomeCard from './WelcomeCard';
import CheckIcon from 'material-ui-icons/Check';

import WelcomeActions from './WelcomeActions';

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
		height: '200px',
		margin: '10px'
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
		const { actions } = WelcomeActions;

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
								<ThreeBuildingPrototype 
									cubeDim={{x: 5, y: 5, z: 3, siteArea: 1000, 
									sqft: 250, landscaping: .75 }} />
							</Grid>

						</Grid>
						{
							actions.map( (card, idx) => {
								return <WelcomeCard {...card} key={idx}/>
							})
						}

					</ Grid>
				</ Grid>
			</Grid>
		);
	}
}

export default withStyles(styles)(Welcome);
