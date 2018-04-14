import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import SwipeableDrawer from 'material-ui/SwipeableDrawer';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MapIcon from 'material-ui-icons/Map';
import AccountCircle from 'material-ui-icons/AccountCircle';
import ImageIcon from 'material-ui-icons/Image';
import InfoIcon from 'material-ui-icons/Info';
import MailIcon from 'material-ui-icons/Mail';
import Divider from 'material-ui/Divider';

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

const sideList = (
  <div style={{width:'250px'}}>
  <h3  style={{margin:'25px'}}>Envision Reboot!</h3>
    <List>
        <ListItem button>
          <Avatar>
            <AccountCircle />
          </Avatar>
          <ListItemText primary="Profile" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <ImageIcon />
          </Avatar>
          <ListItemText primary="Gallery" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <MapIcon />
          </Avatar>
          <ListItemText primary="Map" secondary="July 20, 2014" />
        </ListItem>
      </List>
    <Divider />
    <List>
        <ListItem button>
          <Avatar>
            <InfoIcon />
          </Avatar>
          <ListItemText primary="About" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem button>
          <Avatar>
            <MailIcon />
          </Avatar>
          <ListItemText primary="Contact" secondary="Jan 7, 2014" />
        </ListItem>
      </List>
  </div>
);

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
            <a href="/auth/google" style={{color:'inherit',textDecoration:'none'}}>Login
            </a>
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
    console.log(this.props);
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
              {sideList}
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
