import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import MapContainer from './MapContainer';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from './modal/UploadLayerModal';
import ReactHighcharts from "react-highcharts";
import AcresPerDevType from "../_AcresPerDevType";

import './customLeafletDraw.css';

const populationConfig = (data) => {
	return {
		chart: {
			type: "bar"
		},
		title: {
			text: "Historic World Population by Region"
		},
		subtitle: {
			text:
			'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
		},
		xAxis: {
			categories: ["Africa", "America", "Asia", "Europe", "Oceania"],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: "Population (millions)",
				align: "high"
			},
			labels: {
				overflow: "justify"
			}
		},
		tooltip: {
			valueSuffix: " millions"
		},
		plotOptions: {
			bar: {
				dataLabels: {
				enabled: true
				}
			}
		},
		legend: {
			layout: "vertical",
			align: "right",
			verticalAlign: "top",
			x: -40,
			y: 80,
			floating: true,
			borderWidth: 1,
			backgroundColor: "#FFFFFF",
			shadow: true
		},
		credits: {
			enabled: false
		},
		series: [
			{
				name: "Year 1800",
				data: [107, 31, 635, 203, 2]
			},
			{
				name: "Year 1900",
				data: [133, 156, 947, 408, 6]
			},
			{
				name: "Year 2012",
				data: [1052, 954, 4250, 740, 38]
			}
		]
	}
}
class MapStart extends Component {
    handleNavigation = val => {
		this.props.history.push(val);
	}
	render() {
		let acresPerDevType = AcresPerDevType(this.props.baseMapLayer);
		
		return (
			<Grid >
				<Grid item sm={12} >
					<h2>Step Three: Map the Site</h2>
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('metrics')}>
						Metrics 
					</Button>
				</Grid>
				<Grid item xs={12} style={{ marginTop: '20px' }}>
					<MapOverlayPanel {...this.props} />	
					<MapContainer {...this.props} />
				</Grid>
				<Grid container>
					<Grid item xs={4}>
						{/* chart for population by  dev type W TOTAL ABOVE*/}
						<ReactHighcharts config={populationConfig()} />					
					</Grid>
					<Grid item xs={4}>
						{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
						<ReactHighcharts config={populationConfig()} />	
					</Grid>
					<Grid item xs={4}>
						{/* chart for jobs by dev type W TOTAL ABOVE*/}					
						<ReactHighcharts config={populationConfig()} />	
					</Grid>
				</Grid>
				<UploadLayerModal />
			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType
	   }
}

export default connect(mapStateToProps, actions)(MapStart);