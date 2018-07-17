import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// chapa components
// import { connect } from 'react-redux';
// import * as actions from 'actions';

// import MapStart from './MapStart';

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

import CreateStart from "ccomponents/create/CreateStart";

/** NEED TO
 * ADD SPECIFIC STYLES
 * 
 * / */
import mappingPage from "assets/jss/chapa/mappingPage.jsx";

class BuildingLibraryPage extends React.Component {
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
        
        <div className={classes.container}>
			<CreateStart />
          {/* <BuildingLibraryAboutSection /> */}
          </div>
        <Footer />
      </div>
    );
  }
}


export default withStyles(mappingPage)(BuildingLibraryPage);
