
import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../../actions';

import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as helper from '../../utils/_helperMethods';

class LoadExistingLibraryModalContents extends React.Component {

  handleToggle = bldgs => () => {
    // console.log(bldgs);
    // this.props.toggleDevModalList(id);
    this.props.toggleBuildingModalList(bldgs);
  };

	renderTabContainer = (props) => {
      let { availableLibs, modList, classes } = props;
    let err  = helper.checkDbError(availableLibs);
      // console.log(err);
			return (
        <List className={classes.list}>
          {
            !err ? availableLibs.map( (item, idx) => {
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
    // console.log(this.props)
    return (
      <Grid container
					alignItems='center'
					direction='row'
					justify='center'>
				
        	<Grid item xs={12}>
						{this.renderTabContainer(this.props)}
					</Grid>
				
			</Grid>

    );
  }
}

export default LoadExistingLibraryModalContents;
