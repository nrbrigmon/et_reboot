import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import AppBar from '@material-ui/core/AppBar';

const MenuItemOptions = (ctx) => {
  console.log(ctx);
  return (
    <span>
      <MenuItem 
        onClick={()=> {ctx.props.onSave(); ctx.handleClose()} }>
        Save...</MenuItem>
      <MenuItem 
        onClick={()=> {ctx.props.onSaveAs(); ctx.handleClose()} }>
        Save As...</MenuItem>
      <MenuItem 
        onClick={() => {ctx.props.openModal('loadAttributes'); ctx.handleClose()} }>
        Load Attributes...</MenuItem>
      <MenuItem 
        onClick={ctx.handleClose}>
        Export As...</MenuItem>
      <MenuItem 
        onClick={ctx.handleClose}>
        Print...</MenuItem>
      <MenuItem 
        onClick={()=> {ctx.props.onCancel(); ctx.handleClose()} }>
        Cancel</MenuItem>
    </span>
  )
}

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
              <MenuItemOptions {...this}  />
              
            </Menu>
          </AppBar>
        );
      }
}

export default connect(null, actions)(BuildingMenu);
