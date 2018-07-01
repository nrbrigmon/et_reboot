import React from 'react';
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import Domain from '@material-ui/icons/Domain';
// import ImageIcon from '@material-ui/icons/Image';
// import MailIcon from '@material-ui/icons/Mail';
// import AccountCircle from '@material-ui/icons/AccountCircle';

const classes = {
    fontSize: '16px'
};

export default {
    section1: [
        // {
        //     text: 'Profile',
        //     navLink: 'profile',
        //     component: <AccountCircle style={classes}/>
        // }
        //,
        {
            text: 'Map',
            navLink: 'map',
            component: <MapIcon style={classes}/>
        },{
            text: 'Build',
            navLink: 'create',
            component: <Domain style={classes}/>
        }
        // ,{
        //     text: 'Gallery',
        //     navLink: 'Gallery',
        //     component: <ImageIcon style={classes}/>
        // }
    ],
    section2:[
        {
            text: 'About',
            navLink: 'about',
            component: <InfoIcon style={classes}/>
        }
        // ,{
        //     text: 'Contact',
        //     navLink: 'contact',
        //     component: <MailIcon style={classes}/>
        // }
    ]
}