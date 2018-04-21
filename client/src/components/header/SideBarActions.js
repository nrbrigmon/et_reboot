import React from 'react';
import AccountCircle from 'material-ui-icons/AccountCircle';
import MapIcon from 'material-ui-icons/Map';
import ImageIcon from 'material-ui-icons/Image';
import InfoIcon from 'material-ui-icons/Info';
import MailIcon from 'material-ui-icons/Mail';
import Domain from 'material-ui-icons/Domain';

const classes = {
    fontSize: '16px'
};

export default {
    section1: [{
        text: 'Profile',
        navLink: 'profile',
        component: <AccountCircle style={classes}/>
    },{
        text: 'Map',
        navLink: 'map',
        component: <MapIcon style={classes}/>
    },{
        text: 'Build',
        navLink: 'create',
        component: <Domain style={classes}/>
    },{
        text: 'Gallery',
        navLink: 'Gallery',
        component: <ImageIcon style={classes}/>
    }],
    section2:[{
        text: 'About',
        navLink: 'about',
        component: <InfoIcon style={classes}/>
    },{
        text: 'Contact',
        navLink: 'contact',
        component: <MailIcon style={classes}/>
    }]
}