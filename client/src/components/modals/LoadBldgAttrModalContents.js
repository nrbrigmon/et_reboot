import React from 'react';

import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';

import Grid from 'material-ui/Grid';

import hotel5 from '../create/buildings/examples/hotelFiveStory';

import List, {ListItem, ListItemText} from 'material-ui/List';

const blgSampleList = [
  {
    bldgName: "Hotel 5 Story",
    siteName: "Site "
  }, {
    bldgName: "MU 1 01 MU Res Owner 30",
    siteName: "Site "
  }, {
    bldgName: "MU 1 02 MU Res Owner 15",
    siteName: "Site "
  }, {
    bldgName: "MU 1 03 MU Res Owner 5",
    siteName: "Site "
  }, {
    bldgName: "MU 1 04 MU Res Renter 30",
    siteName: "Site "
  }, {
    bldgName: "MU 1 05 MU Res Renter 15",
    siteName: "Site "
  }, {
    bldgName: "MU 1 06 MU Res Renter 5",
    siteName: "Site "
  }, {
    bldgName: "CON 1 07 Condo 15",
    siteName: "Site "
  }, {
    bldgName: "CON 1 08 Condo 8",
    siteName: "Site "
  }, {
    bldgName: "CON 1 09 Condo 5",
    siteName: "Site "
  }, {
    bldgName: "CON 1 10 Condo 3",
    siteName: "Site "
  }, {
    bldgName: "APA 1 11 Apartment 8",
    siteName: "Site "
  }, {
    bldgName: "APA 1 12 Apartment 5",
    siteName: "Site "
  }, {
    bldgName: "APA 1 13 Apartment Wrapped Parking 5",
    siteName: "Site "
  }, {
    bldgName: "APA 1 14 Apartment Wrapped Parking 4",
    siteName: "Site "
  }, {
    bldgName: "Apartment 3",
    siteName: "Site "
  }, {
    bldgName: "Garden Apartment 2",
    siteName: "Site "
  }, {
    bldgName: "Suburban Apartment Complex",
    siteName: "Site "
  }, {
    bldgName: "Townhomes High",
    siteName: "Site "
  }, {
    bldgName: "Townhomes Medium",
    siteName: "Site "
  }, {
    bldgName: "Cottage Homes",
    siteName: "Site "
  }, {
    bldgName: "Skinny Lot Single Family 2500",
    siteName: "Site "
  }, {
    bldgName: "Small Lot Single Family 4000",
    siteName: "Site "
  }, {
    bldgName: "Single Family 6000",
    siteName: "Site "
  }, {
    bldgName: "Single Family 8000",
    siteName: "Site "
  }, {
    bldgName: "Single Family 10000",
    siteName: "Site "
  }, {
    bldgName: "Large Lot Single Family 20000",
    siteName: "Site "
  }, {
    bldgName: "Large Lot Single Family 40000",
    siteName: "Site "
  }, {
    bldgName: "Executive Estate Single Family 90000",
    siteName: "Site "
  }, {
    bldgName: "Rural Single Family",
    siteName: "Site "
  }, {
    bldgName: "MU Office 30",
    siteName: "Site "
  }, {
    bldgName: "MU Office 15",
    siteName: "Site "
  }, {
    bldgName: "MU Office 5",
    siteName: "Site "
  }, {
    bldgName: "Office 5",
    siteName: "Site "
  }, {
    bldgName: "Office 3",
    siteName: "Site "
  }, {
    bldgName: "Office 1",
    siteName: "Site "
  }, {
    bldgName: "Suburban Office 1",
    siteName: "Site "
  }, {
    bldgName: "Flex Tech Office 1",
    siteName: "Site "
  }, {
    bldgName: "Light Ind Warehousing 1",
    siteName: "Site "
  }, {
    bldgName: "Heavy Ind 1",
    siteName: "Site "
  }, {
    bldgName: "Regional Retail Mall",
    siteName: "Site "
  }, {
    bldgName: "Lifestyle Retail Suburban Main Street",
    siteName: "Site "
  }, {
    bldgName: "Arterial Commercial",
    siteName: "Site "
  }, {
    bldgName: "Traditional Main Street Retail",
    siteName: "Site "
  }, {
    bldgName: "Hotel 15",
    siteName: "Site "
  }, {
    bldgName: "Hotel 5",
    siteName: "Site "
  }, {
    bldgName: "Hotel 3",
    siteName: "Site "
  }, {
    bldgName: "Hotel 1",
    siteName: "Site "
  }, {
    bldgName: "Commercial Parking 5",
    siteName: "Site "
  }, {
    bldgName: "Commercial Parking 3",
    siteName: "Site "
  }, {
    bldgName: "Commercial Parking 1 Surface",
    siteName: "Site "
  }
];

class LoadBldgAttrModalContents extends React.Component {

  state = {
    selectedValue: 'a'
  };

  handleChange = id => {
    // console.log(event);
    this.setState({selectedValue: id});
    this
      .props
      .editBuildingPrototype(true, hotel5)

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

export default LoadBldgAttrModalContents;
