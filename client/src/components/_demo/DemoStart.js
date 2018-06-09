import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Wrapper900 from '../wrappers/Wrapper900';

// import { connect } from 'react-redux';
// import * as actions from '../../../actions';
class DemoStart extends Component {
	handleNavigation = val => {
		this.props.history.push(val);
	}
	
	render() {
		return (
			<Wrapper900>
				<Grid item sm={12} >
					<h2>Demo</h2>
					in perfect world we'd have an international Demo (sau paulo)
					and a local demo (austin).

					custom metrics?
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('map')}>
						Back to Map 
					</Button>
				</Grid>
			</Wrapper900>
		);
	}
}

export default DemoStart
;
