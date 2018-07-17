/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
// import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
// import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";
import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";
import headerSplashLinks from "components/Header/HeaderSplashLinks";
import headerMainLinks from "components/Header/HeaderMainLinks";
import * as helper from '../../utils/_helperMethods';

function HeaderLinks({ ...props }) {
  const { classes, splash } = props;
//   console.log(props);
  const navLinks = ( splash ? headerSplashLinks : headerMainLinks)
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
			target="_blank"
			color="transparent"
			className={classes.navLink}
			onClick={ ()=>{ helper.navigateTo("login", props) } }
        >
        Sign Up | Login
        </Button>
      </ListItem>
      {
		navLinks.map( (_link, idx) => {
			return (
				<ListItem className={classes.listItem} key={idx}>
					<Tooltip
					id={_link.id}
					title={_link.popupTitle}
					placement={window.innerWidth > 959 ? "top" : "left"}
					classes={{ tooltip: classes.tooltip }}
					disableTouchListener={!_link.popupTitle} 
					disableHoverListener={!_link.popupTitle} 
					disableFocusListener={!_link.popupTitle}
					>
					<Button
						href={_link.href}
						target="_blank"
						className={classes.navLink}
						onClick={()=> !_link.href ? helper.navigateTo(_link.compLink, props) : '' }
						color="transparent"
					>
						{ _link.icon ? 
							<i className={classes.socialIcons + " "+ _link.classLink} /> :
							_link.text
						}
					</Button>
					</Tooltip>
				</ListItem>
			)
		})
      }
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
