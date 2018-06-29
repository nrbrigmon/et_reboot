import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';

import Grid from 'material-ui/Grid';

import MapContainer from './MapContainer';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from '../modals/UploadLayerModal';
import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import AcresPerDevType from "../_AcresPerDevType";
import * as mm from "../_MapMath";
import WrapperFull from '../wrappers/WrapperFull';

import './customLeafletDraw.css';
import UpdateToast from '../modals/UpdateToast';

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin: 0
    },
    overlayContainer: {
        position: 'absolute',
        left: '0px'
	},	
	buttonNav: {
		margin: '20px'
	},  
	paper: {
        position:'relative',
        zIndex: '1000',
        left: '0px',
        margin: '0px',
        padding: '10px',
        width:'226px',
        // top: '120px'
	},
	buttonLayer: {
		position:'relative',
        margin: '5px',
        padding: '5px',
        width: '90%',
        fontSize: '10px'
    },
    buttonDevType: {
		position:'relative',
        margin: '5px',
        padding: '5px',
        width: '90%',
    },
    icon: {
        marginRight: '6px'
	},	
	wrapper: {
        left:' 205px',
        width: '210px',
        opacity: 0.8,
        outline: '1px #ccc solid',
        position: 'absolute',
        background: 'white',
        fontSize: '12px',
        margin: '4px 5px',
        padding: '0px'
    },
    action: {
        padding: '1px',
        margin: '0px',
        fontSize: '10px',
        width: '70px'
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
							<ReactHighcharts config={chartColumnConfig({name:"Population" , data: populationMetric, categories: devTypes, colorArray } )} />					
						</Grid>
						{/* <Grid item xs={4}> */}
							{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
							{/* <ReactHighcharts config={chartColumnConfig({name:"Households" , data: housingMetric, categories: devTypes, colorArray } )} />					 */}
						{/* </Grid> */}
						<Grid item xs={4}>
							{/* chart for jobs by dev type W TOTAL ABOVE*/}					
							<ReactHighcharts config={chartColumnConfig({name:"Jobs" , data: jobsMetric, categories: devTypes, colorArray } )} />					
						</Grid>
						<Grid item xs={4}>
							{/* chart for population by  dev type W TOTAL ABOVE*/}
							<ReactHighcharts config={chartColumnConfig({name: "Acreage" , data: developedAcres, categories: devTypes, colorArray } )} />					
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