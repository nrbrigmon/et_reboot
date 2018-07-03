import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Wrapper900 from '../wrappers/Wrapper900';
import Typography from '@material-ui/core/Typography';

import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import * as MetricConfig from '../metrics/MetricConfig';
import * as helper from "../../utils/_helperMethods";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MetricList from './MetricList';
import { withStyles } from '@material-ui/core/styles';

import MetricStyles from '../../styles/MetricStyles';

const styles = theme => MetricStyles(theme);

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

class MetricStart extends Component {

	render() {		
		let { classes, metricData } = this.props;
		console.log(this.props)
		let { colorArray, devTypes } = this.props.metricData;
		return (
			<Wrapper900>
				<Grid item sm={12} >
					<h2>Analyze the Metrics</h2>
					<p>Click on a metric to view it in full</p>
					{
						MetricList.map( (item, idx) => {
							return (
								<ExpansionPanel key={idx}>
									<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
										<Typography > {item.headline} </Typography>
									</ExpansionPanelSummary>
									<ExpansionPanelDetails>
										<Typography>
											{item.content}
										</Typography>
										<ReactHighcharts 
											config={
												MetricConfig.chartColumn({
													name: item.headline, 
													data: metricData[item.metric], 
													categories: devTypes, 
													colorArray })
												} />	
										{ item.component }
									</ExpansionPanelDetails>
								</ExpansionPanel>
							)
						})
					}
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>helper.navigateTo('map', this.props)}
						className={classes.buttonAction}>
						Back to Map 
					</Button>

				</Grid>
			</Wrapper900>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		metricData: state.metricData
	   }
}

export default withStyles(styles)(connect(mapStateToProps, null)(MetricStart));
