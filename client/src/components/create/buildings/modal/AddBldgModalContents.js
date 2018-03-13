import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';

import List, { ListItem, ListItemText } from 'material-ui/List';

class AddBldgModalContents extends React.Component {

  handleToggle = id => () => {
    // console.log(id);
    this.props.toggleBuildingModalList(id);
  };

	renderTabContainer = (bldgs, modList) => {
    // console.log(bldgs);
    return (
      <List>
        {
          bldgs.map( (item, idx) => {
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
          })
        }
      </List>
    )
  }
  componentWillUnmount(){
		this.props.resetBuildingModalList();
  }

  render() {  
    return (
      <Grid container
					alignItems='center'
					direction='row'
					justify='center'>
          
        	<Grid item xs={12}>
						{ this.renderTabContainer(this.props.availableBldgs, this.props.modList) }
					</Grid>
				
			</Grid>

    );
  }
}


function mapStateToProps(state) {
  return { 
    availableBldgs: state.availableBldgs,
    modList: state.modList 
  };
}

export default connect(mapStateToProps, actions)(AddBldgModalContents);
