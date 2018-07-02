import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Wrapper900 from '../wrappers/Wrapper900';
import * as helper from '../../utils/_helperMethods';

import { withStyles } from '@material-ui/core/styles';
import GlobalStyles from '../../styles/GlobalStyles';
const styles = theme => GlobalStyles(theme);

class DemoStart extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Wrapper900>
			<Paper className={classes.paper}>
					<Grid item sm={12} >
						<h2>Demo</h2>
					</Grid>
					<Grid item sm={12} >

						in perfect world we'd have an international Demo (sau paulo)
						and a local demo (austin).

						custom metrics?
					</Grid>
					<Grid item sm={12} >
						<Button variant="raised" 
							color="primary" 
							onClick={()=>helper.navigateTo('', this.props)} >
							Back Home 
						</Button>
					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(DemoStart);;
