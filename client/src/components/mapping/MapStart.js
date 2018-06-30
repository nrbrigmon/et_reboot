import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from 'material-ui/styles';
import Button from '@material-ui/core/Button';

import Grid from 'material-ui/Grid';

import MapContainer from './MapContainer';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from '../modals/UploadLayerModal';
import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import AcresPerDevType from "../../utils/_AcresPerDevType";
import * as mm from "../../utils/_MapMath";
import WrapperFull from '../wrappers/WrapperFull';

import './customLeafletDraw.css';
import UpdateToast from '../modals/UpdateToast';
import _MapStyles from './_MapStyles';
import * as metricConfig from '../metrics/metricConfig';

const styles = theme => _MapStyles(theme);

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

class MapStart extends Component {
    handleNavigation = val => {
		this.props.history.push(val);
	}
	getDevTypes = (obj) => {
		return obj.map( function(arr){
			return arr.devType
		})
	}
	getDevAcres = (obj) => {
		return obj.map( function(arr){
			return {
				name: arr.devType,
				y: Number( (arr.totalAcre).toFixed(2) )
			}
		})
	}
	componentDidMount(){
		window.scrollTo(0, 0)
	}
	getColorArray = (obj) => {
		return obj.map( function(arr){
			return arr.color
		});
	}
	render() {
		let acresPerDevType = AcresPerDevType(this.props.baseMapLayer);
		let devTypes = this.getDevTypes(acresPerDevType);
		let developedAcres = this.getDevAcres(acresPerDevType);
		let colorArray = this.getColorArray(acresPerDevType);
		let populationMetric = mm.getPopulation(acresPerDevType, this.props.myLibrary, this.props.devWorkbook);
		// let housingMetric = mm.getHousingUnits(acresPerDevType, this.props.myLibrary, this.props.devWorkbook);
		let jobsMetric = mm.getJobCounts(acresPerDevType, this.props.myLibrary, this.props.devWorkbook);
		let { classes } = this.props;
		// console.log(classes)
		return (
			<WrapperFull >
				<Grid item sm={12}>
					<h2>Map the Site</h2>
				</Grid>
				<Grid item xs={12} lg={6} style={{padding:'0px'}}>
					<MapOverlayPanel {...this.props} />	
					<MapContainer {...this.props} />
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid container justify="center">
						<Grid item xs={4}>
							{/* chart for population by  dev type W TOTAL ABOVE*/}
							<ReactHighcharts config={metricConfig.chartColumn({name:"Population" , data: populationMetric, categories: devTypes, colorArray } )} />					
						</Grid>
						{/* <Grid item xs={4}> */}
							{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
							{/* <ReactHighcharts config={chartColumnConfig({name:"Households" , data: housingMetric, categories: devTypes, colorArray } )} />					 */}
						{/* </Grid> */}
						<Grid item xs={4}>
							{/* chart for jobs by dev type W TOTAL ABOVE*/}					
							<ReactHighcharts config={metricConfig.chartColumn({name:"Jobs" , data: jobsMetric, categories: devTypes, colorArray } )} />					
						</Grid>
						<Grid item xs={4}>
							{/* chart for population by  dev type W TOTAL ABOVE*/}
							<ReactHighcharts config={metricConfig.chartColumn({name: "Acreage" , data: developedAcres, categories: devTypes, colorArray } )} />					
						</Grid>
						<Grid item sx={12}>
							<Button className={classes.buttonNav} variant="raised" color="secondary" onClick={() => this.handleNavigation('metrics')}>
								View all Metrics
							</Button>	
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('/create/dev-types/building-mix')}
						className={classes.buttonNav}>
						Edit Development Types
					</Button>
				</Grid>
				<UploadLayerModal />
				<UpdateToast {...this.props}/>
			</WrapperFull>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  myLibrary: state.myLibrary,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType,
		  toast: state.toast,
		  mapOverlayPanel: state.mapOverlayPanel
	   }
}

export default withStyles(styles)(connect(mapStateToProps, actions)(MapStart));