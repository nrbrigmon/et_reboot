import React from 'react';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import buildingList from '../create/buildings/examples/buildingList';

class LoadTemplateBldgModalContents extends React.Component {

  state = {
    selectedValue: 'a'
  };
  
  handleChange = item => {
    // console.log(item);
    this.setState({selectedValue: item.bldgName});
    this.props.localBuildingChoice(item);

  };

  renderTabContainer = (props) => {
    let { classes } = props;
    // console.log(bldgs); let err  = (bldgs === undefined || bldgs.code ===
    // 'ECONNREFUSED') ? true : false;

    return (
      <List className={classes.list}>
      {
        buildingList.map((item, idx) => {
          return (
            <ListItem
              key={idx}
              dense
              button
              onClick={() => this.handleChange(item)}>
              <Radio checked={this.state.selectedValue === item.bldgName}/>
              <ListItemText primary={item.bldgName} secondary={item.siteName + idx}/>

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
