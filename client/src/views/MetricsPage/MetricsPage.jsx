import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";


import metricsPageStyle from "assets/jss/chapa/metricsPage.jsx";
import { connect } from 'react-redux';
// import * as actions from 'actions';

import Grid from '@material-ui/core/Grid';
import Wrapper900 from 'components/Wrappers/Wrapper900';
import Typography from '@material-ui/core/Typography';

import ReactHighcharts from "react-highcharts";
import Highcharts from 'react-highcharts';

import * as MetricConfig from 'utils/_metricConfig';
import * as helper from "utils/_helperMethods";

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import MetricList from './Sections/MetricList';

Highcharts.Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

/** NEED TO
 * REDO THIS PAGE
 * 
 * 
 * 
 * 
 * 
 * / */
class MetricsPage extends React.Component {
  render() {
    
	let { classes, metricData, ...rest } = this.props;
	// console.log(this.props)
	let { colorArray, devTypes } = this.props.metricData;
    return (
      <div>
      <Header
        color="transparent"
        rightLinks={<HeaderLinks splash={false} {...rest} />}
        fixed
        changeColorOnScroll={{
          height: 100,
          color: "white"
        }}
        {...rest}
      />
        <Parallax small filter className={classes.parallax} image={require("assets/img/profile-bg.jpg")}/>
        <div className={classNames(classes.main, classes.mainRaised)}>
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
						onClick={()=>helper.navigateTo('mapping', this.props)}
						className={classes.buttonAction}>
						Back to Map 
					</Button>

				</Grid>
			</Wrapper900>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {  
	return { 
		metricData: state.metricData
	   }
}

export default withStyles(metricsPageStyle)(connect(mapStateToProps, null)(MetricsPage));
