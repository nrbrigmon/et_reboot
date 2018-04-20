import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Grid from 'material-ui/Grid';
// import Button from 'material-ui/Button';

import MapContainer from './MapContainer';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from './modal/UploadLayerModal';
import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import AcresPerDevType from "../_AcresPerDevType";
import * as mm from "../_MapMath";
import WrapperFull from '../wrappers/WrapperFull';

import './customLeafletDraw.css';

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

const chartColumnConfig = ({name, data, categories, colorArray}) => {
	return {
		chart: {
			type: "column"
		},
		title: {
			text: name
		},
		colors: colorArray,
		xAxis: {
			categories: categories,
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: name,
				align: "high"
			},
			labels: {
				overflow: "justify"
			}
		},
		legend: {
			enabled: false
		},
		plotOptions: {
			bar: {
				dataLabels: {
				enabled: true
				}
			}
		},
		credits: {
			enabled: false
		},
		series: [
			{
				"name": name,
				"colorByPoint": true,
				"data": data
			}
		]
	}
}
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
		let housingMetric = mm.getHousingUnits(acresPerDevType, this.props.myLibrary, this.props.devWorkbook);
		let jobsMetric = mm.getJobCounts(acresPerDevType, this.props.myLibrary, this.props.devWorkbook);

		return (
			<WrapperFull >
				<Grid item sm={12}>
					<h2>Step Three: Map the Site</h2>
					
					{/* <Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('metrics')}>
						Metrics 
					</Button> */}
				</Grid>
				<Grid item xs={12} style={{padding:'0px'}}>
					<MapOverlayPanel {...this.props} />	
					<MapContainer {...this.props} />
				</Grid>
				<Grid container>
					<Grid item xs={4}>
						{/* chart for population by  dev type W TOTAL ABOVE*/}
						<ReactHighcharts config={chartColumnConfig({name:"Population" , data: populationMetric, categories: devTypes, colorArray } )} />					
					</Grid>
					<Grid item xs={4}>
						{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
						<ReactHighcharts config={chartColumnConfig({name:"Households" , data: housingMetric, categories: devTypes, colorArray } )} />					
					</Grid>
					<Grid item xs={4}>
						{/* chart for jobs by dev type W TOTAL ABOVE*/}					
						<ReactHighcharts config={chartColumnConfig({name:"Jobs" , data: jobsMetric, categories: devTypes, colorArray } )} />					
					</Grid>
					<Grid item xs={4}>
						{/* chart for population by  dev type W TOTAL ABOVE*/}
						<ReactHighcharts config={chartColumnConfig({name: "Acreage" , data: developedAcres, categories: devTypes, colorArray } )} />					
					</Grid>
				</Grid>
				<UploadLayerModal />
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
		  activeDevType: state.activeDevType
	   }
}

export default connect(mapStateToProps, actions)(MapStart);