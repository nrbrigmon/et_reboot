import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import PhysicalFormComponent from './PhysicalFormComponent';
import BasicFinFormComponent from './BasicFinFormComponent';
import AdvancedFinFormComponent from './AdvancedFinFormComponent';
import BuildingFormReviewComponent from './BuildingFormReviewComponent';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin:0
	},
	paper: {
	  textAlign: 'center',
	},
	button: {
		margin: '10px 10px 10px 10px',
		width: '150px'
	}
  });
  
  class BuildingPrototypeStart extends Component {
	constructor(props) {
		super(props);
		// if new building shortid.generate
		// else get shortid from exinput
		this.state = {
			tabValue: 'phys',
			editing: ( (props.match.path).indexOf("edit") >= 0 ? true : false), 
		};
		this.componentSelection = this.componentSelection.bind(this);
	}
	
	componentSelection = (e, value) => {
		this.setState({
			tabValue: value
		});
	}
	saveBuilding = () => {	
		let { editing } = this.state;
		let { bldgType } = this.props;
		//if it is new tale the following actions
		if (editing === false){
			//add building to available library modal list
			this.props.newAvailableBuilding(bldgType)
			//add building to my library
			this.props.addBuildingToLibrary(bldgType);
		}
		//save overall library
		this.props.updateBuildingInLibrary(editing, bldgType);
		this.props.updateAvailableBuildings(bldgType);
		this.props.saveBuildingToDb(editing, bldgType);
		this.props.releaseBuildingPrototype();
		this.props.history.push('/create');
	}
	
	cancelBuilding = () => {
		this.props.history.push('/create');
		this.props.releaseBuildingPrototype();		
	}

	renderChildContent = (pg, buildingPrototype) => {
		// console.log(newState);
		if (pg === 'phys') {
			return (
				<PhysicalFormComponent
					attributes={buildingPrototype}
				/>
			);
		} else if (pg === 'fin1') {
			return (
				<BasicFinFormComponent
					attributes={buildingPrototype}
				/>
			);
		} else if (pg === 'fin2') {
			return (
				<AdvancedFinFormComponent
					attributes={buildingPrototype}
				/>
			);
		} else {
			return (
				<BuildingFormReviewComponent
					pageChange={this.changePage}
					attributes={buildingPrototype}
				/>
			);
		}
	}
	render() {
		const { classes } = this.props;
		const { tabValue } = this.state;
		const buildingPrototype = this.props.bldgType;
		
		// console.log(buildingPrototype);
		// console.log('render props ',this.props.bldgType);
		// console.log(forDevType);
		return (
			<Grid container
				className={classes.root}
				alignItems='center'
				direction='row'
				justify='center'>
				<AppBar position="static" color="default">
					<Tabs
						value={tabValue}
						onChange={this.componentSelection}
						indicatorColor="primary"
						textColor="primary"
						fullWidth
						centered
					>
						<Tab value="phys" label="Physical Inputs" />
						<Tab value="fin1" label="Basic Financial" />
						<Tab value="fin2" label="Advanced Financial" />
						<Tab value="review" label="Review" />
					</Tabs>
				</AppBar>
				
				<Grid item className={classes.paper} xs={12}>
					<Button variant="raised" color="primary"  className={classes.button} 
						onClick={()=>this.saveBuilding()}>
						Save
					</Button>	
					
					<Button variant="raised" color="secondary"  className={classes.button} 
						onClick={()=>this.cancelBuilding()}>
						Cancel
					</Button>	
				</Grid>

				<Grid item md={8} sm={12}>
					{this.renderChildContent(this.state.tabValue, buildingPrototype)}
				</Grid>
				
				<Grid item className={classes.paper} xs={12}>
					<Button variant="raised" color="primary"  className={classes.button} 
						onClick={()=>this.saveBuilding()}>
						Save
					</Button>	
					
					<Button variant="raised" color="secondary"  className={classes.button} 
						onClick={()=>this.cancelBuilding()}>
						Cancel
					</Button>	
				</Grid>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
	return { 
		bldgType: state.bldgType,
		availableBldgs: state.availableBldgs
	};
}

const styledApp = withStyles(styles)(BuildingPrototypeStart);
export default connect(mapStateToProps, actions)(styledApp);

