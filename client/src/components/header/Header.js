import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SideBar from './SideBar';

const styles = {
  root: {
    width: '100%',
    zIndex: '1600'
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  links: {
    color: 'inherit',
    textDecoration: 'none'
  }
};


class Header extends Component {
  state = {
    left: false
  };
  
  toggleDrawer = (side, open) => () => {
    // console.log('boop');
    this.setState({
      [side]: open,
    });
  };

  renderLogin () {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
          <Button color="inherit">
            <a href="/auth/google" style={{color:'inherit',textDecoration:'none'}}>Login</a>
            {/* <a href="/" style={{color:'inherit',textDecoration:'none'}}>Login</a>             */}
          </Button>
				);
      default:
				return (
          <div>
            {this.props.auth && (
              <div>
                Welcome{ (this.props.auth.google_prof) ? ", "+ this.props.auth.google_prof.name.givenName : ''}
                <IconButton  >
                  <AccountCircle />
                </IconButton>
                <a href="/api/user/logout" style={{color:'inherit',textDecoration:'none'}}>
                  <Button color="inherit">
                    Logout
                  </Button>
                </a>
              </div>
            ) }
        </div>)
		}
  };
  
  render(){
    const { classes } = this.props;
    // console.log(this.props);
    return (
      <div>
        <AppBar position="fixed" className={classes.root}>
          <SwipeableDrawer
            open={this.state.left}
            onClose={this.toggleDrawer('left', false)}
            onOpen={this.toggleDrawer('left', true)}
          >
            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('left', false)}
              onKeyDown={this.toggleDrawer('left', false)}
            >
              <SideBar />
            </div>
         </SwipeableDrawer>
          <Toolbar>
            <IconButton className={classes.menuButton} 
              color="inherit"
              aria-label="Menu"
              onClick={this.toggleDrawer('left', true)} >
                <MenuIcon />
            </IconButton>
            <Typography type="title" color="inherit" className={classes.flex}>
              <Link to="/"  style={{ textDecoration: 'none', color: 'inherit' }}>Envision Reboot</Link>
            </Typography>
            { this.renderLogin() }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


function mapStateToProps(state) {
  // console.log(state);
	return { auth: state.auth };
}

const styledApp = withStyles(styles)(Header);
export default connect(mapStateToProps)(styledApp);
