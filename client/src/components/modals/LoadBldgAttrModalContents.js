import React from 'react';

import Radio from '@material-ui/core/Radio';
// import RadioGroup from '@material-ui/core/RadioGroup';

import Grid from 'material-ui/Grid';

// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormControl from '@material-ui/core/FormControl';
// import FormLabel from '@material-ui/core/FormLabel';

import List, { ListItem, ListItemText } from 'material-ui/List';


class LoadBldgAttrModalContents extends React.Component {

  state = {
    selectedValue: 'a',
  };

  handleChange = id => {
    // console.log(event);
    this.setState({ selectedValue: id });
  };

	renderTabContainer = ( ) => {
    // console.log(bldgs);
    // let err  = (bldgs === undefined || bldgs.code === 'ECONNREFUSED') ? true : false;
    
    return (
        <List style={{overflow: 'auto',position: 'relative', maxHeight: 400}}>
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
            } */}
              <ListItem
                key={1}
                dense
                button
                onClick={()=>this.handleChange("SF")}
              >
                <Radio
                  checked={this.state.selectedValue === 'SF'}
                />
                <ListItemText primary={'Single Family'} secondary={'siteLocation1'} />
                
              </ListItem>

              
              <ListItem
                key={2}
                dense
                button
                onClick={()=>this.handleChange("Duplex")}
              >
                <Radio
                  checked={this.state.selectedValue === 'Duplex'}
                />
                <ListItemText primary={'Duplex'} secondary={'siteLocation2'} />
                
              </ListItem>
            {/* )
          }) : <ListItem dense>Failed to connect to database</ListItem>
        } */}
      </List>
    )
  }
  componentWillUnmount(){
		// this.props.resetBuildingModalList();
  }

  render() {  
    return (
      <Grid container
					alignItems='center'
					direction='row'
					justify='center'>
          
        	<Grid item xs={12}>
						{ this.renderTabContainer() }
					</Grid>
				
			</Grid>

    );
  }
}

export default LoadBldgAttrModalContents;
