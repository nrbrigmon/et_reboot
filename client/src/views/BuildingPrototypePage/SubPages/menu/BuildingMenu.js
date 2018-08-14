import React, { Component } from 'react';

import Button from "components/CustomButtons/Button.jsx";
import Menu from '@material-ui/core/Menu';
import AppBar from '@material-ui/core/AppBar';

import BuildingMenuOptions from './BuildingMenuOptions';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';


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
              <BuildingMenuOptions {...this}  />
              
            </Menu>
          </AppBar>
        );
      }
}

export default connect(null, actions)(BuildingMenu);
