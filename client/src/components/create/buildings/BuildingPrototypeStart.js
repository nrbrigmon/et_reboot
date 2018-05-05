import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import Tabs, { Tab } from 'material-ui/Tabs';

import { Link, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import PhysicalFormComponent from './PhysicalFormComponent';
import BasicFinFormComponent from './BasicFinFormComponent';
import AdvancedFinFormComponent from './AdvancedFinFormComponent';
import BuildingFormReviewComponent from './BuildingFormReviewComponent';
import BuildingMenu from './menu/BuildingMenu';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin: 0,
		marginTop: '100px'
	},
	appbar: {
		top: '60px'
	},
	paper: {
	  	textAlign: 'center',
	},
	button: {
		margin: '10px 10px 10px 10px',
		width: '150px'
	},
	textField: {
		marginLeft: theme.spacing.unit,
		marginRight: theme.spacing.unit,
		width: '80%'
	},
	indicator: {
		margin: '40px',
		padding: '40px'		
	}
  });

  class BuildingPrototypeStart extends Component {
	constructor(props) {
		super(props);
		// if new building shortid.generate
		// else get shortid from exinput
		this.state = {
			tabValue: 0,
			editing: ( (props.match.path).indexOf("edit") >= 0 ? true : false), 
		};
		this.componentSelection = this.componentSelection.bind(this);
	}
	
	componentSelection = (e, value) => {
		this.setState({
			tabValue: value
		});
		window.scrollTo(0, 0)
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
	saveAsBuilding = () => {
		let editingState = false;
		let { bldgType } = this.props;
		bldgType["uniqueId"] = this.props.uniqueId; //update to NEW ID 

		//add building to available library modal list
		this.props.newAvailableBuilding(bldgType)
		//add building to my library
		this.props.addBuildingToLibrary(bldgType);
		
		//save overall library
		this.props.updateBuildingInLibrary(editingState, bldgType);
		this.props.updateAvailableBuildings(bldgType);
		this.props.saveBuildingToDb(editingState, bldgType);
		this.props.releaseBuildingPrototype();
		this.props.history.push('/create');
	}
	cancelBuilding = () => {
		this.props.history.push('/create');
		this.props.releaseBuildingPrototype();		
	}
	
	componentDidMount(){
		window.scrollTo(0, 0)
	}
	render() {
		// console.log(this.props);
		const { classes, match } = this.props;
		const { tabValue } = this.state;
		const buildingPrototype = this.props.bldgType;
		
		return (
			<Grid container
				className={classes.root}
				alignItems='center'
				direction='row'
				justify='center'>
				<AppBar position="fixed" color="default"
					className={classes.appbar}>
					<Tabs
						value={tabValue}
						onChange={this.componentSelection}
						indicatorColor="primary"
						textColor="primary"
						fullWidth
						centered
					>
						<Tab label="Physical Inputs" component={Link} to={`${match.url}/physical-form`} />
						<Tab label="Basic Financial" component={Link} to={`${match.url}/basic-financial`} />
						<Tab label="Advanced Financial" component={Link} to={`${match.url}/advanced-financial`} />
						<Tab label="Review" component={Link} to={`${match.url}/review`}/>
					</Tabs>
				</AppBar>
				
				<Grid item md={8} sm={12} className="myContainer">
					<BuildingMenu />
					<Route path={`${match.url}/physical-form`} render={()=> <PhysicalFormComponent attributes={buildingPrototype} {...this.props}/>}/>
					<Route path={`${match.url}/basic-financial`} render={()=> <BasicFinFormComponent attributes={buildingPrototype} {...this.props}/>}/>
					<Route path={`${match.url}/advanced-financial`} render={()=> <AdvancedFinFormComponent attributes={buildingPrototype} {...this.props}/>}/>
					<Route path={`${match.url}/review`} render={()=> <BuildingFormReviewComponent attributes={buildingPrototype} {...this.props}/>}/>

				</Grid>
				
				<Grid item className={classes.paper} xs={12}>
					<Button variant="raised" color="primary"  className={classes.button} 
						onClick={()=>this.saveBuilding()}>
						Save
					</Button>	
					
					<Button variant="raised" color="primary"  className={classes.button} 
						onClick={()=>this.saveAsBuilding()}>
						Save As
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
		uniqueId: state.randomId,
		bldgType: state.bldgType,
		availableBldgs: state.availableBldgs
	};
}

const styledApp = withStyles(styles)(BuildingPrototypeStart);
export default connect(mapStateToProps, actions)(styledApp);

