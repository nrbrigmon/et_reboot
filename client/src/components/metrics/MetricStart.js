import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Wrapper900 from '../wrappers/Wrapper900';

// import { connect } from 'react-redux';
// import * as actions from '../../../actions';
class MetricStart extends Component {
	handleNavigation = val => {
		this.props.history.push(val);
	}
	
	render() {
		return (
			<Wrapper900>
				<Grid item sm={12} >
					<h2>Step Four: Analyze the Metrics</h2>
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('map')}>
						Back to Map 
					</Button>
				</Grid>
				<Grid item xs={6}>	
					<p>Plan of Attack:</p>
					<p>1. choose your site</p>
					<p>2. paint your development</p>
				</Grid>
				<Grid item xs={6} >
					<p>Your Dev Types:</p>
		
				</Grid>
			</Wrapper900>
		);
	}
}

export default MetricStart;
