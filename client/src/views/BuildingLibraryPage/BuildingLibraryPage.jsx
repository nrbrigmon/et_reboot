import React from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

import Grid from "@material-ui/core/Grid";
import Button from "components/CustomButtons/Button.jsx";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";

import LoadExistingBldgModal from "components/Modals/LoadExistingBldgModal";
import LoadExistingLibraryModal from "components/Modals/LoadExistingLibraryModal";
import SaveBldgLibraryModal from "components/Modals/SaveBldgLibraryModal";
import UpdateToast from "components/Modals/UpdateToast";
import * as helper from "utils/_helperMethods";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header";
import HeaderLinks from "components/Header/HeaderLinks";
import Footer from "components/Footer/Footer";
import Wrapper900 from "components/Wrappers/Wrapper900";
import BuildingListSection from "views/BuildingLibraryPage/Sections/BuildingListSection";
import BuildingActionSection from "views/BuildingLibraryPage/Sections/BuildingActionSection";

import buildingLibraryPage from "assets/jss/chapa/buildingLibraryPage.jsx";

class BuildingLibraryPage extends React.Component {
  componentWillMount() {
    // console.log(this.props);
    let { availableBldgs } = this.props;
    //load all available buildings in the database
    if (availableBldgs.length === 0) {
      this.props.fetchAllBuildings();
      this.props.fetchAllBuildingLibraries();
      ///need better logic for why i would initialize a workbook?
    }

    this.props.fetchRandomId();
    // console.log(this.props.devWorkbook)
  }

  render() {
    const { classes, ...rest } = this.props;
    // console.log(this.props.devWorkbook)
    return (
      <div>
        <Header
          color="white"
          rightLinks={<HeaderLinks splash={false} {...rest} />}
          fixed
          {...rest}
        />

        <div className={classes.container}>
          <Wrapper900>
            <Grid item xs={12}>
              <h2>Create Your Library</h2>
              <Typography component="p">
                To build any development, we need structures on which to draw.
                This is called our <b>library</b>.
                <br />
                <br />
              </Typography>
            </Grid>

            <Card className={classes.card}>
              <CardContent>
                <Grid container>
                  {/* COLUMN #1 */}
                  <BuildingListSection {...this.props} />

                  {/* COLUMN #2 */}
                  <BuildingActionSection {...this.props} />
                </Grid>
              </CardContent>
            </Card>

            <CardActions>
              <div className={classes.cardAction}>
                <Button
                  className={classes.cardButton}
                  variant="raised"
                  color="primary"
                  onClick={() =>
                    helper.navigateTo("dev-types/building-mix", this.props)
                  }
                >
                  Next: Development Types
                </Button>
              </div>
            </CardActions>

            <LoadExistingBldgModal {...rest} />
            <LoadExistingLibraryModal {...rest} />
            <SaveBldgLibraryModal {...rest} />
            <UpdateToast {...rest} />
          </Wrapper900>
        </div>
        {/* <BuildingLibraryAboutSection /> */}
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    uniqueId: state.randomId,
    availableBldgs: state.availableBldgs,
    devWorkbook: state.devWorkbook,
    toast: state.toast,
    modList: state.modList,
    modal: state.modal,
    availableLibs: state.availableLibs
  };
}

const styledApp = withStyles(buildingLibraryPage)(BuildingLibraryPage);
export default connect(
  mapStateToProps,
  actions
)(styledApp);
