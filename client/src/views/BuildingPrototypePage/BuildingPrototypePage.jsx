import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Button from "components/CustomButtons/Button.jsx";

import { connect } from "react-redux";
import * as actions from "actions";

import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";

import PhysicalFormComponent from "views/BuildingPrototypePage/SubPages/PhysicalFormComponent";
import BasicFinFormComponent from "views/BuildingPrototypePage/SubPages/BasicFinFormComponent";
import AdvancedFinFormComponent from "views/BuildingPrototypePage/SubPages/AdvancedFinFormComponent";
import BuildingFormReviewComponent from "views/BuildingPrototypePage/SubPages/BuildingFormReviewComponent";
import BuildingMenu from "./SubPages/menu/BuildingMenu";
import LoadTemplateBldgModal from "components/Modals/LoadTemplateBldgModal";
import FormStyles from "styles/FormStyles";

const styles = theme => FormStyles(theme);

class BuildingPrototypePage extends Component {
  constructor(props) {
    super(props);
    // if new building shortid.generate
    // else get shortid from exinput
    this.state = {
      tabValue: 0,
      editing: props.match.path.indexOf("edit") >= 0 ? true : false
    };
    this.componentSelection = this.componentSelection.bind(this);
  }

  componentSelection = (e, value) => {
    this.setState({
      tabValue: value
    });
    window.scrollTo(0, 0);
  };
  saveBuilding = () => {
    let { editing } = this.state;
    let { bldgType } = this.props;
    //if it is new tale the following actions
    if (editing === false) {
      //add building to available library modal list
      this.props.newAvailableBuilding(bldgType);
      //add building to my library
      this.props.addBuildingToLibrary(bldgType);
    }
    //save overall library
    this.props.updateBuildingInLibrary(editing, bldgType);
    this.props.updateAvailableBuildings(bldgType);
    this.props.saveBuildingToDb(editing, bldgType);
    this.props.releaseBuildingPrototype();
    this.props.history.push("/buildings");
  };
  saveAsBuilding = () => {
    let editingState = false;
    let { bldgType } = this.props;
    // console.log(bldgType);
    bldgType["uniqueId"] = this.props.uniqueId; //update to NEW ID
    // console.log(this.props);
    //add building to available library modal list
    this.props.newAvailableBuilding(bldgType);
    //add building to my library
    this.props.addBuildingToLibrary(bldgType);

    //save overall library
    this.props.updateBuildingInLibrary(editingState, bldgType);
    this.props.updateAvailableBuildings(bldgType);
    this.props.saveBuildingToDb(editingState, bldgType);
    this.props.releaseBuildingPrototype();
    this.props.history.push("/buildings");
  };
  cancelBuilding = () => {
    this.props.history.push("/buildings");
    this.props.releaseBuildingPrototype();
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchBldgTemplates();
  }
  render() {
    // console.log(this.props);
    const { classes, match, ...rest } = this.props;
    const { tabValue } = this.state;
    const buildingPrototype = this.props.bldgType;

    return (
      <Grid
        container
        className={classes.root}
        alignItems="center"
        direction="row"
        justify="center"
      >
        <Header
          color="white"
          rightLinks={<HeaderLinks splash={false} {...rest} />}
          fixed
          {...rest}
        />
        <AppBar position="fixed" color="default" className={classes.appbar}>
          <Tabs
            value={tabValue}
            onChange={this.componentSelection}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab
              label="Physical Inputs"
              component={Link}
              to={`${match.url}/physical-form`}
            />
            <Tab
              label="Basic Financial"
              component={Link}
              to={`${match.url}/basic-financial`}
            />
            <Tab
              label="Advanced Financial"
              component={Link}
              to={`${match.url}/advanced-financial`}
            />
            <Tab label="Review" component={Link} to={`${match.url}/review`} />
          </Tabs>
        </AppBar>

        <Grid item md={8} sm={12}>
          <BuildingMenu
            onSave={this.saveBuilding}
            onSaveAs={this.saveAsBuilding}
            onCancel={this.cancelBuilding}
          />
          <Route
            path={`${match.url}/physical-form`}
            render={() => (
              <PhysicalFormComponent
                attributes={buildingPrototype}
                {...this.props}
              />
            )}
          />
          <Route
            path={`${match.url}/basic-financial`}
            render={() => (
              <BasicFinFormComponent
                attributes={buildingPrototype}
                {...this.props}
              />
            )}
          />
          <Route
            path={`${match.url}/advanced-financial`}
            render={() => (
              <AdvancedFinFormComponent
                attributes={buildingPrototype}
                {...this.props}
              />
            )}
          />
          <Route
            path={`${match.url}/review`}
            render={() => (
              <BuildingFormReviewComponent
                attributes={buildingPrototype}
                {...this.props}
              />
            )}
          />

          <LoadTemplateBldgModal {...this.props} />
        </Grid>

        <Grid item className={classes.paper} xs={12}>
          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={() => this.saveBuilding()}
          >
            Save
          </Button>

          <Button
            variant="raised"
            color="primary"
            className={classes.button}
            onClick={() => this.saveAsBuilding()}
          >
            Save As
          </Button>

          <Button
            variant="raised"
            color="warning"
            className={classes.button}
            onClick={() => this.cancelBuilding()}
          >
            Cancel
          </Button>
        </Grid>
        <Footer />
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    uniqueId: state.randomId,
    bldgType: state.bldgType,
    availableBldgs: state.availableBldgs,
    modal: state.modal,
    bldgTemplates: state.bldgTemplates
  };
}

const styledApp = withStyles(styles)(BuildingPrototypePage);
export default connect(
  mapStateToProps,
  actions
)(styledApp);
