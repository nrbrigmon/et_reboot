import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
// import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';

class BuildingMenu extends Component {
    state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        alert("JUST FOR SHOW RIGHT NOW")
        this.setState({ anchorEl: null });
      };
    
      render() {
        const { anchorEl } = this.state;
    
        return (
          <AppBar position="static" color="default" elevation={0}>
            <Button
              aria-owns={anchorEl ? 'simple-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              Menu Options
            </Button>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Save...</MenuItem>
              <MenuItem onClick={this.handleClose}>Save As...</MenuItem>
              <MenuItem onClick={this.handleClose}>Print...</MenuItem>
              <MenuItem onClick={this.handleClose}>Export As...</MenuItem>
              <MenuItem onClick={this.handleClose}>Load Attributes...</MenuItem>
            </Menu>
          </AppBar>
        );
      }
}
export default BuildingMenu;
