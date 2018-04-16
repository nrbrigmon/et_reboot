
import React from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import MapIcon from 'material-ui-icons/Map';
import AccountCircle from 'material-ui-icons/AccountCircle';
import ImageIcon from 'material-ui-icons/Image';
import InfoIcon from 'material-ui-icons/Info';
import MailIcon from 'material-ui-icons/Mail';
import Divider from 'material-ui/Divider';

export const SideDrawer = () => (
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