import React, { Component } from "react";
import Button from "components/CustomButtons/Button.jsx";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { withStyles } from "@material-ui/core/styles";

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import * as helper from "utils/_helperMethods";
import image from "assets/img/sign.jpg";
import loginPageStyle from "assets/jss/material-kit-react/views/loginPage.jsx";

// import NotFoundStyles from 'styles/NotFoundStyles';
// const styles = theme => NotFoundStyles(theme);

/** NEED TO
 * REDO THIS PAGE
 *
 *
 *
 *
 *
 * / */

class NotFound404 extends Component {
  state = {
    direction: "row",
    justify: "center",
    alignItems: "center"
  };
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Material Kit React"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes.card}>
                  <CardContent>
                    <Typography className={classes.title} color="textSecondary">
                      Page Not Found
                    </Typography>
                    <Typography
                      className={classes.header}
                      variant="headline"
                      component="h2"
                    >
                      404
                    </Typography>
                    <Typography component="p">
                      Something went wrong here... :/
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      simple
                      color="primary"
                      size="lg"
                      onClick={() => helper.navigateTo("", this.props)}
                    >
                      Go To Homepage
                    </Button>
                  </CardActions>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(NotFound404);
