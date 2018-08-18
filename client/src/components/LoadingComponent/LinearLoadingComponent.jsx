import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const styles = {
  root: {
    flexGrow: 1,
    zIndex: 100000,
    position: "fixed",
    bottom: "0px",
    width: "100%"
  }
};

function LinearIndeterminate(props) {
  const { classes } = props;
  return (
    <div
      className={classes.root}
      style={{ display: props.isLoading ? "block" : "none" }}
    >
      <LinearProgress />
      {/* <br /> */}
      {/* <LinearProgress color="secondary" /> */}
    </div>
  );
}

LinearIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(LinearIndeterminate);
