import React, { Component } from 'react';
import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MapMainComponent from './MapMainComponent';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from '../modals/UploadLayerModal';
import UpdateToast from '../modals/UpdateToast';
import WrapperFull from '../wrappers/WrapperFull';
import * as helper from "../../utils/_helperMethods";
import * as MetricConfig from '../metrics/MetricConfig';
import '../../styles/customLeafletDraw.css';

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

class MapStart extends Component {

	componentDidMount(){
		helper.windowToTop();
	}
	render() {
		let { classes, metricData } = this.props;
		let { colorArray, devTypes } = this.props.metricData;

		return (
			<WrapperFull >
				<Grid item sm={12}>
					<h2>{this.props.title}</h2>
				</Grid>
				<Grid item xs={12} lg={6} style={{padding:'0px'}}>
					<MapOverlayPanel {...this.props} />	
					<MapMainComponent {...this.props} />
				</Grid>
				<Grid item xs={12} lg={6}>
					<Grid container justify="center">
						<Grid item xs={4}>
							{/* chart for population by  dev type W TOTAL ABOVE*/}
							<ReactHighcharts 
								config={
									MetricConfig.chartColumn({
										name:"Population", 
										data: metricData["population"], 
										categories: devTypes, 
										colorArray })
									} />					
						</Grid>
						{/* <Grid item xs={4}> */}
							{/* chart for housing units by  dev type W TOTAL ABOVE*/}					
							{/* <ReactHighcharts config={chartColumnConfig({name:"Households" , data: housingMetric, categories: devTypes, colorArray } )} />					 */}
						{/* </Grid> */}
						<Grid item xs={4}>
							{/* chart for jobs by dev type W TOTAL ABOVE*/}					
							<ReactHighcharts 
								config={
									MetricConfig.chartColumn({
										name:"Jobs", 
										data: metricData["jobTotals"], 
										categories: devTypes, 
										colorArray })
									} />					
						</Grid>
						<Grid item xs={4}>
							{/* chart for population by  dev type W TOTAL ABOVE*/}
							<ReactHighcharts 
								config={
									MetricConfig.chartColumn({
										name: "Acreage", 
										data: metricData["developedAcreage"], 
										categories: devTypes, 
										colorArray })
									} />					
						</Grid>
						<Grid item sx={12}>
							<Button 
								className={classes.buttonNav} 
								variant="raised" 
								color="secondary" 
								onClick={()=>helper.navigateTo('metrics', this.props)} >
									View all Metrics
							</Button>	
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12}>
					<Button variant="raised" 
						className={classes.buttonNav}
						color="primary" 
						onClick={()=>helper.navigateTo('/create/dev-types/building-mix', this.props)} >
						Edit Development Types
					</Button>
				</Grid>
				<UploadLayerModal />
				<UpdateToast {...this.props}/>
			</WrapperFull>
		);
	}
}

export default MapStart;