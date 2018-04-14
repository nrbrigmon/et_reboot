
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import Grid from 'material-ui/Grid';
import Checkbox from 'material-ui/Checkbox';

import List, { ListItem, ListItemText } from 'material-ui/List';


class AddLibraryModalContents extends React.Component {

  handleToggle = bldgs => () => {
    // console.log(bldgs);
    // this.props.toggleDevModalList(id);
    this.props.toggleBuildingModalList(bldgs);
  };

	renderTabContainer = (libraries, modList) => {
      // console.log(modList);
      console.log(libraries);
      let err  = libraries.code === 'ECONNREFUSED' || libraries === undefined ? true : false;
      // console.log(err);
			return (
        <List style={{overflow: 'auto',position: 'relative', maxHeight: 400}}>
          {
            !err ? libraries.map( (item, idx) => {
              // let id = item.library_id;
              let name = item.library_name;
              let bldgs = item.building_library_ids;
              // console.log(item);
              return (
                <ListItem
                  key={idx}
                  dense
                  button
                  onClick={this.handleToggle(bldgs)}
                  >
                  <Checkbox
                    checked={modList.indexOf(bldgs) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={name} />
                  
                </ListItem>
                  
                )
              }
            ) : <ListItem dense>Failed to connect to database</ListItem>
          }
        </List>
			);
		
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
						{this.renderTabContainer(this.props.availableLibs, this.props.modList)}
					</Grid>
				
			</Grid>

    );
  }
}


function mapStateToProps(state) {
  return { 
    availableLibs: state.availableLibs,
    modList: state.modList 
  };
}

export default connect(mapStateToProps, actions)(AddLibraryModalContents);
