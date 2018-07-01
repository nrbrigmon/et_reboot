import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Wrapper900 from '../wrappers/Wrapper900';
import { Link } from 'react-router-dom';
import { Typography } from 'material-ui';
import _AboutStyles from './_AboutStyles';
import aboutInputs from './aboutInputs';

const styles = theme => _AboutStyles(theme);

class AboutStart extends Component {

	render() {
		const { classes } = this.props;
		const { list1, list2 } = aboutInputs;
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
						{
							list1.map((item, idx) => {
								return (
									<ListItem key={idx} className={classes.listItem}>
										<ListItemText 
											primary={item.text}/>
									</ListItem>
									)
							})
						}
						</List>
						<h4>What are the solutions offered by this application?</h4>
						<List className={classes.list}>
						{
							list2.map((item, idx) => {
								return (
									<ListItem key={idx} className={classes.listItem}>
										<ListItemText 
											primary={item.text}/>
									</ListItem>
									)
							})
						}
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