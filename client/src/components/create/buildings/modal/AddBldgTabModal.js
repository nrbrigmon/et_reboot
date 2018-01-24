import React from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

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
      tab: 'bldg'
    };
		this.componentSelection = this.componentSelection.bind(this);
  
  }
  handleToggle = value => () => {
    // console.log(value);
    this.props.toggleBuildingModalList(value);
  };

	componentSelection = (e, value) => {
    //change the tab between bldg and lib
		this.setState({
			tab: value
		});
  }
  
	renderTabContainer = (pg, classes) => {
    if (pg === 'bldg') {
      //duplicate component, should be destructured later --nate
      return (
        <List>
          {this.props.bldgLib.map( (item, idx) => {
              // console.log(item.attributes["physicalInfo"])
              let name = item.attributes.physicalInfo.buildingName;
              if (name === undefined){
                name = 'err';
              }
              let siteLocation = item.attributes.physicalInfo.siteLocation;
              if (siteLocation === undefined){
                siteLocation = 'err';
              }
              return (
                <ListItem
                  key={idx}
                  dense
                  button
                  onClick={this.handleToggle(item.attributes)}
                  className={classes.listItem}
                >
                  <Checkbox
                    checked={this.props.modList.indexOf(item.attributes) !== -1}
                    tabIndex={-1}
                    disableRipple
                  />
                  <ListItemText primary={name} secondary={siteLocation}/>
                </ListItem>
                )
              

            }
          
          )}
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
                checked={this.props.modList.indexOf(value) !== -1}
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
  }
  componentWillUnmount(){
		this.props.resetBuildingModalList();
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


function mapStateToProps(state) {
  // console.log(state);
  return { 
        bldgLib: state.bldgLib,
        modList: state.modList 
        };
}

const styledApp = withStyles(styles)(AddBldgTabModal);
export default connect(mapStateToProps, actions)(styledApp);
