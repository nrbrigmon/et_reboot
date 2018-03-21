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
import AccountCircle from 'material-ui-icons/AccountCircle';

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
  links: {
    color: 'inherit',
    textDecoration: 'none'
  }
};

class Header extends Component {

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
      // console.log(this.props.auth.google_prof);
				return (
          <div>
            {this.props.auth && (
              <div>
                Welcome{ (this.props.auth.google_prof) ? ", "+ this.props.auth.google_prof.name.givenName : ''}
                <IconButton
                  color="inherit"
                >
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
    // console.log(this.props)
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
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
