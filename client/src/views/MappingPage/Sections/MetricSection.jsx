import React, { Component } from 'react';
import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import * as helper from "utils/_helperMethods";
import * as MetricConfig from 'ccomponents/metrics/MetricConfig';

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

class MappingSection extends Component {

	render() {
		let { classes, metricData } = this.props;
		let { colorArray, devTypes } = this.props.metricData;
        return(
            <Grid item xs={12} lg={6} style={{border: "1px solid #ddd"}}>
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
		);
	}
}

export default MappingSection;