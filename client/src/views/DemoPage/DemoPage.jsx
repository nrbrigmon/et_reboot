import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// chapa components
import { connect } from 'react-redux';
import * as actions from 'actions';

// import MapStart from 'views/MappingPage/MapStart';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// import Camera from "@material-ui/icons/Camera";
// import Palette from "@material-ui/icons/Palette";
// import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// import Button from "components/CustomButtons/Button.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";
import Grid from '@material-ui/core/Grid';
import WrapperFull from "components/Wrappers/WrapperFull"

import mappingPage from "assets/jss/chapa/mappingPage.jsx";

class DemoPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    // console.log(rest);
    return (
		<div>
		<Header
			color="white"
			rightLinks={<HeaderLinks splash={false} {...rest} />}
			fixed
			{...rest}
		/>
		<WrapperFull>
			<Grid item sm={12}>
			<h1>Coming Soon!</h1>
			</Grid>
       		 <Grid item sm={12}>
			</Grid>

				{/* 
				load devWorkbook id=HkdS6UBwx8Q
				and layer where bucketkey = Central Austin TOD
				udpate devworkbook with new ID and set isNew to true
					in case anyone tries to Save As a new workbook or edit
					also need to start new
				<MapStart {...this.props} title={"Demo Mapping"}/> */}
        
        <Footer />
      </WrapperFull>
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

export default withStyles(mappingPage)(connect(mapStateToProps, actions)(DemoPage));
