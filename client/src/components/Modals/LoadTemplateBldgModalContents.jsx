import React from 'react';
import * as _ from 'lodash';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';


class LoadTemplateBldgModalContents extends React.Component {

  
  handleChange = item => {
    // console.log(item);
    this.props.localBuildingChoice(item);

  };

  renderTabContainer = (props) => {
    let { classes } = props;
    let buildingKey = props.selectedBuilding
    let filteredList =  _.filter(props.bldgTemplates, item => {
      return item.bldgName.indexOf(props.textSearch)>-1;
    })
    return (
      <List className={classes.list}>
      {
        filteredList.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              dense
              button
              onClick={() => this.handleChange(item)}>
              <Radio checked={buildingKey === item.key}/>
              <ListItemText primary={item.bldgName} secondary={item.siteName}/>

            </ListItem>
          )
        })
      }
      </List>
    )
  }
  
  componentWillUnmount() {
    // this.props.resetBuildingModalList();
  }

  render() {
    // console.log("rendering ttemplate blg mdoal")
    // console.log(this.props);
    return (
      <Grid container alignItems='center' direction='row' justify='center'>

        <Grid item xs={12}>
          {this.renderTabContainer(this.props)}
        </Grid>

      </Grid>

    );
  }
}

export default LoadTemplateBldgModalContents;
