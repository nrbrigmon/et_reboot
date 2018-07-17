import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// chapa components
import { connect } from 'react-redux';
import * as actions from '../../actions';

import MappingSection from './Sections/MappingSection';
import MetricSection from './Sections/MetricSection';
import * as helper from "utils/_helperMethods";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from '@material-ui/core/Grid';
import UploadLayerModal from 'ccomponents/modals/UploadLayerModal';
import UpdateToast from 'ccomponents/modals/UpdateToast';

// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
// import GridContainer from "components/Grid/GridContainer.jsx";
// import GridItem from "components/Grid/GridItem.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
// import NavPills from "components/NavPills/NavPills.jsx";
// import Parallax from "components/Parallax/Parallax.jsx";

import mappingPage from "assets/jss/chapa/mappingPage.jsx";

class MappingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    // console.log(rest);
    return (
      <div>
        <Header
          color="white"
          brand="Material Kit React"
          rightLinks={<HeaderLinks splash={false} {...rest} />}
          fixed
          {...rest}
        />
        <Grid item sm={12}>
            <h2>Demo Mapping</h2>
		</Grid>
        <Grid item sm={12}>
			<MappingSection {...this.props} />
			<MetricSection {...this.props} />
		</Grid>
		<Grid item xs={12}>
			<Button variant="raised" 
				className={classes.buttonNav}
				color="primary" 
				onClick={()=>helper.navigateTo('/create/dev-types/building-mix', this.props)} >
				Edit Development Types
			</Button>
		</Grid>
		<UploadLayerModal {...this.props} />
		<UpdateToast {...this.props} />
        <Footer />
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

export default withStyles(mappingPage)(connect(mapStateToProps, actions)(MappingPage));
