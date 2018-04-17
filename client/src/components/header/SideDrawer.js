
import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MapIcon from 'material-ui-icons/Map';
import AccountCircle from 'material-ui-icons/AccountCircle';
import ImageIcon from 'material-ui-icons/Image';
import InfoIcon from 'material-ui-icons/Info';
import MailIcon from 'material-ui-icons/Mail';
import Divider from 'material-ui/Divider';
import { withRouter } from 'react-router-dom';


class SideDrawer extends Component {
	handleNavigation = (destination) => {
		alert("\n\n\nSTILL IN DEVELOPMENT!!!!!\n\n\n")
	}
	render() {
    return(
      <div style={{width:'250px'}}>
        <h3  style={{margin:'25px'}}>Envision Reboot!</h3>
        <List>
            <ListItem button onClick={()=>this.handleNavigation('profile')} >
              <Avatar>
                <AccountCircle />
              </Avatar>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button onClick={()=>this.handleNavigation('gallery')} >
              <Avatar>
                <ImageIcon />
              </Avatar>
              <ListItemText primary="Gallery" />
            </ListItem>
            <ListItem button onClick={()=>this.handleNavigation('map')} >
              <Avatar>
                <MapIcon />
              </Avatar>
              <ListItemText primary="Map"  />
            </ListItem>
          </List>
        <Divider />
        <List>
            <ListItem button onClick={()=>this.handleNavigation('about')} >
              <Avatar>
                <InfoIcon />
              </Avatar>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={()=>this.handleNavigation('contact')} >
              <Avatar>
                <MailIcon />
              </Avatar>
              <ListItemText primary="Contact" />
            </ListItem>
          </List>
      </div>
    );
  }
}

export default withRouter(SideDrawer);