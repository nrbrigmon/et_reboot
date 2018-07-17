import React from 'react';
import MapIcon from '@material-ui/icons/Map';
import InfoIcon from '@material-ui/icons/Info';
import Domain from '@material-ui/icons/Domain';
import Home from '@material-ui/icons/Home';
import InsertChart from '@material-ui/icons/InsertChart';

// import ImageIcon from '@material-ui/icons/Image';
// import MailIcon from '@material-ui/icons/Mail';
// import AccountCircle from '@material-ui/icons/AccountCircle';

const classes = {
    fontSize: '16px'
};

export default {
    section2: [
        // {
        //     text: 'Profile',
        //     navLink: 'profile',
        //     component: <AccountCircle style={classes}/>
        // }
        //,
        {
            text: 'Build',
            navLink: 'create',
            component: <Domain style={classes}/>
        }
        ,{
            text: 'Map',
            navLink: 'map',
            component: <MapIcon style={classes}/>
        }
        
        ,{
            text: 'Metrics',
            navLink: 'metrics',
            component: <InsertChart style={classes}/>
        }
    ],
    section1:[
        {
            text: 'About',
            navLink: 'about',
            component: <InfoIcon style={classes}/>
        }
        ,{
            text: 'Home',
            navLink: '',
            component: <Home style={classes}/>
        }
        
    ]
}