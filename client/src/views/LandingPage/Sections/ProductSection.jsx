import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";
import * as _constants from "constants/_landingPage";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What is this, again?</h2>
            <h5 className={classes.description}>
              {_constants.APP_DESCRIPTION_2}
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={_constants.APP_FEATURE_1_TITLE}
                description={_constants.APP_FEATURE_1_DECRP}
                icon={_constants.APP_FEATURE_1_ICON}
                iconColor={_constants.APP_FEATURE_1_ICONCOL}
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={_constants.APP_FEATURE_2_TITLE}
                description={_constants.APP_FEATURE_2_DECRP}
                icon={_constants.APP_FEATURE_2_ICON}
                iconColor={_constants.APP_FEATURE_2_ICONCOL}
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title={_constants.APP_FEATURE_3_TITLE}
                description={_constants.APP_FEATURE_3_DECRP}
                icon={_constants.APP_FEATURE_3_ICON}
                iconColor={_constants.APP_FEATURE_3_ICONCOL}
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
