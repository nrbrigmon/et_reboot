import React from "react";
// nodejs library that concatenates classes
// import classNames from "classnames";
// chapa components
import { connect } from "react-redux";
import * as actions from "../../actions";

import MappingSection from "./Sections/MappingSection";
import MetricSection from "./Sections/MetricSection";
import * as helper from "utils/_helperMethods";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import UploadLayerModal from "components/Modals/UploadLayerModal";
import SaveLayerModal from "components/Modals/SaveLayerModal";
import UpdateToast from "components/Modals/UpdateToast";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import WrapperFull from "components/Wrappers/WrapperFull";
import mappingPage from "assets/jss/chapa/mappingPage.jsx";

import LinearLoadingComponent from "components/LoadingComponent/LinearLoadingComponent";

class MappingPage extends React.Component {
  state = {
    isLoading: false
  };

  componentDidMount() {
    this.props.getAllLayersFromS3();
  }
  componentDidUpdate(prevProps) {
    let currTigger = this.props.leafletDrawTrigger;
    let prevTrigger = prevProps.leafletDrawTrigger;
    if (prevTrigger === "paintScenarioLayer" && currTigger.length === 0) {
      console.log("here");
      this.setState({
        isLoading: true
      });
    } else if (
      currTigger &&
      prevTrigger.length === 0 &&
      currTigger === "closeDrawHelper"
    ) {
      this.setState({
        isLoading: false
      });
    } else {
      return;
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    // console.log(this.props.metricData);
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
            <h2>Scenario Mapping</h2>
          </Grid>
          <MappingSection {...this.props} />
          <MetricSection {...this.props} />
          <Grid item xs={12}>
            <Button
              variant="raised"
              className={classes.buttonNav}
              color="primary"
              onClick={() =>
                helper.navigateTo("dev-types/building-mix", this.props)
              }
            >
              Edit Development Types
            </Button>
          </Grid>
          <UploadLayerModal {...rest} />
          <SaveLayerModal {...rest} />
          <UpdateToast {...rest} />
          <LinearLoadingComponent {...this.state} />
        </WrapperFull>
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
    metricData: state.metricData,
    availableS3Layers: state.availableS3Layers,
    modal: state.modal
  };
}

export default withStyles(mappingPage)(
  connect(
    mapStateToProps,
    actions
  )(MappingPage)
);
