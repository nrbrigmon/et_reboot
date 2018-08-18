import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import { connect } from "react-redux";
import * as actions from "../../actions";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import * as _constants from "constants/_landingPage";
// Sections for this page
import ProductSection from "views/LandingPage/Sections/ProductSection.jsx";
import TeamSection from "views/LandingPage/Sections/TeamSection.jsx";
import WorkSection from "views/LandingPage/Sections/WorkSection.jsx";
import * as helper from "utils/_helperMethods";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import AnimationModal from "../../components/Modals/AnimationModal";

const styles = theme => landingPageStyle(theme);

class LandingPage extends React.Component {
  state = {
    isLoading: false
  };

  goToDemo = () => {
    this.setState({
      isLoading: true
    });
    this.props.getExistingWorkbookById("SkuBIDzg4B7").then(a => {
      // console.log(a)
      // console.log("workbook file was gotten");
      this.props.updateWorkbookProperty("workbook_id", helper.getRandomId());
      this.props.updateWorkbookProperty("workbook_isNew", true);
    });

    this.props
      .getFileFromS3("1534257629974,Central Austin TOD.json")
      .then(a => {
        // console.log(a)
        // console.log("s3 file was gotten");
        helper.navigateTo("mapping", this.props);
      });
  };
  componentWillUnmount() {
    this.setState({
      isLoading: false
    });
  }
  render() {
    const { classes, ...rest } = this.props;
    // console.log(this.props);
    return (
      <div>
        <Header
          color="transparent"
          rightLinks={<HeaderLinks splash={false} {...rest} />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax
          className={classes.parallax}
          filter
          image={require("assets/img/landing-bg.jpg")}
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>{_constants.APP_TITLE}</h1>
                <h4>{_constants.APP_DESCRIPTION_1}</h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  onClick={() => helper.navigateTo("video", this.props)}
                >
                  <i className="fas fa-play" />Watch Video
                </Button>
                <Button color="info" size="lg" onClick={() => this.goToDemo()}>
                  <i className="fas fa-laptop" />Check Out Demo
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <ProductSection />
            <TeamSection />
            <WorkSection {...rest} />
          </div>
        </div>
        <AnimationModal {...this.state} message={"Loading Demo Components"} />
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    toast: state.toast
  };
}

export default connect(
  mapStateToProps,
  actions
)(withStyles(styles)(LandingPage));
