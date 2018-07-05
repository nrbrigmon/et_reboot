import React from 'react';

import Radio from '@material-ui/core/Radio';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import * as helper from '../../utils/_helperMethods';

class LoadWorkbookModalContents extends React.Component {

  state = {
    selectedValue: 'a'
  };

  handleChange = item => {
    // console.log(item);
    this.setState({selectedValue: item.workbook_name});
    this.props.localWorkbookChoice(item);

  };

  renderTabContainer = (props) => {
    console.log(props);
    let { availableWkbks, classes } = props;
    let err = helper.checkDbError(availableWkbks);
    // console.log(availableWkbks); 

    return (
      <List className={classes.list}>
        {
           !err ? availableWkbks.map( (item, idx) => {
            return (
              <ListItem
                key={idx}
                dense
                button
                onClick={() => this.handleChange(item)}>
                <Radio checked={this.state.selectedValue === item.workbook_name}/>
                <ListItemText primary={item.workbook_name} secondary={"Created by user: "+idx}/>

              </ListItem>
              )
            }) : <ListItem dense>Failed to connect to database</ListItem>
          }
      </List>
    )
  }
  componentWillUnmount() {
    // this.props.resetBuildingModalList();
  }

  render() {
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

export default LoadWorkbookModalContents;
