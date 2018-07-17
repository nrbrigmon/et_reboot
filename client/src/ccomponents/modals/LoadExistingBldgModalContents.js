import React from 'react';

// import { connect } from 'react-redux';
// import * as actions from '../../actions';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import * as helper from '../../utils/_helperMethods';

class LoadExistingBldgModalContents extends React.Component {

  handleToggle = id => () => {
    // console.log(id);
    this.props.toggleBuildingModalList(id);
  };

	renderTabContainer = (props) => {

    let { availableBldgs, modList, classes } = props;
    let err  = helper.checkDbError(availableBldgs);
    
    return (
        <List className={classes.list}>
        {
           !err ? availableBldgs.map( (item, idx) => {
            // console.log(item.attributes["physicalInfo"])
            let name = item.physicalInfo.buildingName;
            let id = item.uniqueId;
            let siteLocation = item.physicalInfo.siteLocation;

            if (name === undefined){
              name = 'err';
            }
            if (siteLocation === undefined){
              siteLocation = 'err';
            }
            return (
              <ListItem
                key={idx}
                dense
                button
                onClick={this.handleToggle(id)}
              >
                <Checkbox
                  checked={modList.indexOf(id) !== -1}
                  tabIndex={-1}
                  disableRipple
                />
                <ListItemText primary={name} secondary={siteLocation} />
                
              </ListItem>
            )
          }) : <ListItem dense>Failed to connect to database</ListItem>
        }
      </List>
    )
  }
  componentWillUnmount(){
		this.props.resetBuildingModalList();
  }

  render() {  
    // console.log(this.props.modList);

    return (
      <Grid container
					alignItems='center'
					direction='row'
					justify='center'>
          
        	<Grid item xs={12}>
						{ this.renderTabContainer(this.props) }
					</Grid>
				
			</Grid>

    );
  }
}

export default LoadExistingBldgModalContents;
