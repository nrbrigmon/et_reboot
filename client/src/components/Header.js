import React from 'react';

import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function Header(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="contrast" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Envision Reboot
          </Typography>
          <Button color="contrast">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default withStyles(styles)(Header);

// class Header extends Component {
// 	renderContent() {
// 		// switch (this.props.auth) {
// 		// 	case null:
// 		// 		return;
// 		// 	case false:
// 		return (
// 			<li>
// 				<a href="/">Login to Google</a>
// 			</li>
// 		);
// 		// 	default:
// 		// 		return [
// 		// 			<li key="1">
// 		// 				<Payments />
// 		// 			</li>,
// 		// 			<li key="2" style={customStyle}>
// 		// 				Credits: {this.props.auth.credits}
// 		// 			</li>,
// 		// 			<li key="3">
// 		// 				<a href="/api/logout">Sign Out</a>
// 		// 			</li>
// 		// 		];
// 		// }
// 		// return <span>Welcome!</span>;
// 	}
// 	render() {
// 		return (
// 			<nav>
// 				<div className="nav-wrapper">
// 					<div className="col s12">
// 						<a href="" className="brand-logo" style={customStyle}>
// 							<i className="material-icons">business</i>Envision
// 						</a>
// 						<ul id="nav-mobile" className="right hide-on-med-and-down">
// 							{this.renderContent()}
// 						</ul>
// 					</div>
// 				</div>
// 			</nav>
// 		);
// 	}
// }

// export default Header;
