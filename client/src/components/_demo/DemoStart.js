import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import WrapperFull from '../wrappers/WrapperFull';
import * as helper from '../../utils/_helperMethods';
import { withStyles } from '@material-ui/core/styles';
import GlobalStyles from '../../styles/GlobalStyles';
const styles = theme => GlobalStyles(theme);

class DemoStart extends Component {
	componentDidMount(){
		// 1. load sample basemaplayer from s3
		// 2. load devWorkbook from postgres
		// 3. load myLibary from postgres
		// 4. set mapRef here
		// 5. set leafletDrawTrigger  here
		// 6. set activeDevType here
		// 7. set mapOverlayPanel state here 
		// 8. copy metricData: state.metricData
		console.log("mounting")
	}
	componentWillUnmount(){
		console.log("unmounting")
		//empty states
	}
	render() {
		const { classes } = this.props;
		return (
			<WrapperFull>
				<Paper className={classes.paper}>
					<Grid item sm={12} >
						<h2>Demo</h2>
					</Grid>
					<Grid item sm={12} >
						{/*
							1. load (demo) devWorkbook and (demo) libraryBldgs when component mounts
							2. also, when component unmounts, empty these states
							3. add MapStart component... done
						*/}
					</Grid>
					<Grid item sm={12} >
						<Button variant="raised" 
							color="primary" 
							onClick={()=>helper.navigateTo('', this.props)} >
							Back Home 
						</Button>
					</Grid>
				</Paper>
			</WrapperFull>
		);
	}
}

export default withStyles(styles)(DemoStart);;
