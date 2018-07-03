import React from 'react';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import hotel5 from '../create/buildings/examples/hotelFiveStory';
import blgSampleList from './_sampleBuildings';

class LoadWorkbookModalContents extends React.Component {

  state = {
    selectedValue: 'a'
  };

  handleChange = id => {
    // console.log(event);
    this.setState({selectedValue: id});
    this.props.editBuildingPrototype(true, hotel5)

  };

  renderTabContainer = () => {
    // console.log(bldgs); let err  = (bldgs === undefined || bldgs.code ===
    // 'ECONNREFUSED') ? true : false;

    return (
      <List
        style={{
        overflow: 'auto',
        position: 'relative',
        maxHeight: 400
      }}>
        {/* {
           !err ? bldgs.map( (item, idx) => {
            // console.log(item.attributes["physicalInfo"])
            // let name = item.physicalInfo.buildingName;
            // let id = item.uniqueId;
            // let siteLocation = item.physicalInfo.siteLocation;

            if (name === undefined){
              name = 'err';
            }
            if (siteLocation === undefined){
              siteLocation = 'err';
            return (
            } */
        blgSampleList.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              dense
              button
              onClick={() => this.handleChange(item.bldgName)}>
              <Radio checked={this.state.selectedValue === item.bldgName}/>
              <ListItemText primary={item.bldgName} secondary={item.siteName + idx}/>

            </ListItem>
          )
        })
        /* )
            }) : <ListItem dense>Failed to connect to database</ListItem>
          } */
}
      </List>
    )
  }
  componentWillUnmount() {
    // this.props.resetBuildingModalList();
  }

  render() {
    return (
      <Grid container alignItems='center' direction='row' justify='center'>

        <Grid item xs={12}>
          {this.renderTabContainer()}
        </Grid>

      </Grid>

    );
  }
}

export default LoadWorkbookModalContents;
