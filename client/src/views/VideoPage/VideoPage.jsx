import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
// import Button from "components/CustomButtons/Button.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import metricsPageStyle from "assets/jss/chapa/metricsPage.jsx";
// import * as actions from 'actions';

import Grid from "@material-ui/core/Grid";
import Wrapper900 from "components/Wrappers/Wrapper900";

import * as _constants from "constants/_landingPage";

class VideoPage extends React.Component {
  render() {
    let { classes, ...rest } = this.props;
    // console.log(this.props)
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
        <Parallax
          small
          filter
          className={classes.parallax}
          image={require("assets/img/profile-bg.jpg")}
        />
        <div className={classNames(classes.main, classes.mainRaised)}>
          <Wrapper900>
            <Grid item sm={12} md={6}>
              <h2>The Old Way</h2>
              <iframe
                id="old_way"
                title="The Old Way"
                width="90%"
                height="315"
                src="https://www.youtube.com/embed/1BtcykFU2xc?mute=1"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
              />
              <p>
                I created this video back in 2014 to show the potential for
                scenario planning with 3D modelling. Note the three different
                types of proprietary Desktop software and the large array of
                spreadsheets. This planted the seed for a more streamlined
                approach.
              </p>
            </Grid>
            <Grid item sm={12} md={6}>
              <h2>{_constants.APP_NAME}</h2>
              <p>
                The ambition of this application is to globally centralize the
                data and the functionality of this planning tool. All the
                thinking in one space.
              </p>
            </Grid>
            <div style={{ margin: "50px" }}>
              <br />
            </div>
          </Wrapper900>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(metricsPageStyle)(VideoPage);
