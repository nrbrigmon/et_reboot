import React, { Component } from 'react';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';

import Divider from 'material-ui/Divider';
import { withStyles } from 'material-ui/styles';
import { withRouter } from 'react-router-dom';
import sideBarActions from './SideBarActions';


const styles = ({
  listItem: {
    paddingTop: '7px',
    paddingBottom: '7px'
  },
  avatar: {
    height: '30px',
    width: '30px',
    marginRight: '7px'
  }
});

class SideBar extends Component {
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	render() {
    const { section1, section2 } = sideBarActions; 
		const { classes } = this.props;
    
    return(
      <div style={{width:'250px'}}>
        <h3  style={{margin:'25px'}}>Envision Reboot!</h3>
        <List>
          {
            section1.map( (elem, idx) => {
              return(

                <ListItem button className={classes.listItem} onClick={()=>this.handleNavigation(elem.navLink)} >
                <Avatar className={classes.avatar}>
                  {elem.component}
                </Avatar>
                <ListItemText primary={elem.text} />
              </ListItem>
              )
            })
          }
        </List>
        <Divider />
        <List>
          {
            section2.map( (elem, idx) => {
              return(

                <ListItem button className={classes.listItem} onClick={()=>this.handleNavigation(elem.navLink)} >
                <Avatar className={classes.avatar}>
                  {elem.component}
                </Avatar>
                <ListItemText primary={elem.text} />
              </ListItem>
              )
            })
          }
        </List>

      </div>
    );
  }
}

export default withStyles(styles)(withRouter(SideBar));