import React, { Component } from 'react';

import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Wrapper900 from '../wrappers/Wrapper900';

const styles = theme => ({
	paper: {
	  padding: '0px 20px 20px 20px',
	  margin: '40px 20px 20px 20px',
	  width: '80%'
	}
  });



class ContactStart extends Component {
	constructor() {
		super();
		this.state = {
			selection: ''
		};
	}
	
	render() {
		const { classes } = this.props;
		return (
			<Wrapper900>
				<Paper className={classes.paper}>
					
					<Grid item xs={12}>
						<h2>Contact</h2>
					</Grid>
					

					<Grid item xs={12}>
						<h5>
							What are the issues with the current Scenario Planning Software?
						</h5>
						<List>
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

					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}


const styledApp = withStyles(styles)(ContactStart);
export default styledApp;
