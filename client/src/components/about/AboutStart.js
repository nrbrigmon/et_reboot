import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Wrapper900 from '../wrappers/Wrapper900';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import "./aboutStyle.css"

const styles =({
	paper: {
	  padding: '0px 20px 20px 20px',
	  margin: '40px 20px 20px 20px',
	  width: '80%'
	},
	intro: {
		textAlign: 'left'
	},
	list: {
		fontSize: '12px'
	}
  });

class AboutStart extends Component {

	render() {
		const { classes } = this.props;
		return (
			<Wrapper900>
				<Paper className={classes.paper}>
					
					<Grid item xs={12}>
						<h2>Software for Urban Planners</h2>
					</Grid>
					
					<Grid item xs={12} className={classes.intro}>
						<Typography component="p" align="left">
							For	cities, policy-makers, and developers, the ET Reboot App offers
							planning insight, real time metrics, building visualization and more.	
							It's a new "back of the envelope" analysis to achieve deeper discussions about 
							development impacts.
							<br/><br/>
							This tool was developed by Nathan Brigmon as a response to the lack of integration
							and intuitiveness with the Envision Tomorrow Plugin. This tool promises an ease of use
							to building scenarios and helps bridge the divide between modern planning and architecture.
						</Typography>
					</Grid>
	
					<Grid item xs={12}>
						<h4> What are the issues with the current Scenario Planning Software? </h4>
						<List className={classes.list}>
							<ListItem>
								<ListItemText 
									primary="Overly complicated spreadsheets and files" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Lack of visualizations (espcially three-dimensional)" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Requirement of private, desktop software" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="De-centralized; isolated data collection" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Difficult to share results" />
							</ListItem>
						</List>
						<h4>What are the solutions offered by this application?</h4>
						<List  className={classes.list}>
							<ListItem>
								<ListItemText 
									primary="Centralized database" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Web-application with simple UI" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="3D visuals" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Shareable, fast, and interactive results" />
							</ListItem>
						</List>
					</Grid>

					<Grid item xs={12}>
						<Link className="waves-effect waves-light btn" to="/">
							Back to Homepage
						</Link>
					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(AboutStart);;