import React, { Component } from 'react';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
// import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import AppBar from 'material-ui/AppBar';

class BuildingMenu extends Component {
      state = {
        anchorEl: null,
      };
    
      handleClick = event => {
        this.setState({ anchorEl: event.currentTarget });
      };
    
      handleClose = () => {
        // console.log("JUST FOR SHOW RIGHT NOW")
        this.setState({ anchorEl: null });
      };
    
      render() {
        const { anchorEl } = this.state;
        // console.log(this.props);
        return (
          <AppBar position="static" color="default" style={{border:'1px #ccc solid'}} elevation={0}>
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
              <MenuItem 
                onClick={()=> {this.props.onSave(); this.handleClose()} }>Save...</MenuItem>
              <MenuItem 
                onClick={()=> {this.props.onSaveAs(); this.handleClose()} }>Save As...</MenuItem>
              <MenuItem 
							  onClick={() => {this.props.openModal('loadAttributes'); this.handleClose()} }>Load Attributes...</MenuItem>
              <MenuItem onClick={this.handleClose}>Export As...</MenuItem>
              <MenuItem onClick={this.handleClose}>Print...</MenuItem>
              <MenuItem 
                onClick={()=> {this.props.onCancel(); this.handleClose()} }>Cancel</MenuItem>
            </Menu>
          </AppBar>
        );
      }
}

export default connect(null, actions)(BuildingMenu);
