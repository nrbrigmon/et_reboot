import React from 'react';
import axios from 'axios';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Tabs, { Tab } from 'material-ui/Tabs';

import List, { ListItem, ListItemText } from 'material-ui/List';
import Checkbox from 'material-ui/Checkbox';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  }
});

class AddBldgTabModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [],
      tab: 'bldg',
      availableBuildings: []
    };
		this.componentSelection = this.componentSelection.bind(this);
  
  }

  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked,
    });
    this.props.libSelection(newChecked);
  };

	componentSelection = (e, value) => {
    console.log(value)
		this.setState({
			tab: value
		});
  }
  
	renderTabContainer = (pg, classes) => {
    let bldgLib = this.state.availableBuildings;
		if (pg === 'bldg') {
			return (
        <List>
          {bldgLib.map( (item, idx) => (
            <ListItem
              key={idx}
              dense
              button
              onClick={this.handleToggle(item)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.indexOf(item) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={item.info.buildingName} secondary={item.info.siteLocation}/>
            </ListItem>
          ))}
        </List>
			);
		} else {
			return (
        <List>
          {[0, 1, 2, 3].map(value => (
            <ListItem
              key={value}
              dense
              button
              onClick={this.handleToggle(value)}
              className={classes.listItem}
            >
              <Checkbox
                checked={this.state.checked.indexOf(value) !== -1}
                tabIndex={-1}
                disableRipple
              />
              <ListItemText primary={`Line item ${value + 1}`} />
            </ListItem>
          ))}
        </List>
			);
		}
  }
  componentWillMount(){
    //determine the button choice of the user
    if (this.props.attr === 'lib'){
      this.setState({
        tab: 'lib'
      });
    }
    //load all available buildings to easy access array
		axios.get('/api/buildings/ids')
      .then(res => {
        // console.log(res);
        // let tempList = res["data"].map(obj => {return obj});
        this.setState({ 
          availableBuildings: res["data"].map(obj => {return obj})
        });
      });
  }
  componentWillUnmount(){
		this.setState({
			checked: [],
      availableBuildings: []
		});
  }
  render() {
    const { classes } = this.props;
    
    return (
      <Grid container
					className={classes.root}
					alignItems='center'
					direction='row'
					justify='center'>
          <Tabs
            value={this.state.tab}
            onChange={this.componentSelection}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
            centered
          >
            <Tab value="bldg" label="Select Buildings" />
            <Tab value="lib" label="Select Library" />
          </Tabs>
				
        	<Grid item xs={12}>
						{this.renderTabContainer(this.state.tab, classes)}
					</Grid>
				
			</Grid>

    );
  }
}

export default withStyles(styles)(AddBldgTabModal);