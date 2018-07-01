import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Wrapper900 from '../wrappers/Wrapper900';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import metricList from './metricList';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	buttonAction: {
		margin: '20px'
	}
});

class MetricStart extends Component {
	handleNavigation = val => {
		this.props.history.push(val);
	}
	
	render() {
		let { classes } = this.props;
		return (
			<Wrapper900>
				<Grid item sm={12} >
					<h2>Analyze the Metrics</h2>
					<p>Click on a metric to view it in full</p>
					{
						metricList.map( (item, idx) => {
							return (
							<ExpansionPanel key={idx}>
								<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
									<Typography > {item.headline} </Typography>
								</ExpansionPanelSummary>
								<ExpansionPanelDetails>
									<Typography>
										{item.content}
									</Typography>
								</ExpansionPanelDetails>
							</ExpansionPanel>
							)
						})
					}
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('map')}
						className={classes.buttonAction}>
						Back to Map 
					</Button>

				</Grid>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(MetricStart);
