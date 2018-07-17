import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import * as helper from '../../utils/_helperMethods';
import MapStart from '../mapping/MapStart';
import MapStyles from '../../styles/MapStyles';

const styles = theme => MapStyles(theme);

class DemoContainer extends Component {
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
		//reset states
	}
	render() {
		// console.log(this.props);
		// const { classes } = this.props;
		// load demo devWorkbook
		return (
			<div>
				{/*
					1. load (demo) devWorkbook and (demo) libraryBldgs when component mounts
					2. also, when component unmounts, empty these states
					3. add MapStart component... done
				*/}
				<MapStart {...this.props} title={"Demo Mapping"}/>
				<Grid item sm={12} >
					<Button variant="raised" 
						color="primary" 
						onClick={()=>helper.navigateTo('', this.props)} >
						Back Home 
					</Button>
				</Grid>
			</div>
		);
	}
}




function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType,
		  toast: state.toast,
		  mapOverlayPanel: state.mapOverlayPanel,
		  metricData: state.metricData
	   }
}

export default withStyles(styles)(connect(mapStateToProps, actions)(DemoContainer));
