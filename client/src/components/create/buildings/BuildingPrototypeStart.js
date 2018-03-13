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
import * as devFunc from './_updateForDevType';

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
			tabValue: 'review',
			editing: ( (props.match.path).indexOf("edit") >= 0 ? true : false), 
			BP: {
				uniqueId: '',
				physicalInfo: {},
				basicFinInfo: {},
				advFinInfo: {}
			},
			forDevType: {	}
		};
		this.componentSelection = this.componentSelection.bind(this);
		this.updatePrototypePhys = this.updatePrototypePhys.bind(this);
		this.updateBasicFinInfo = this.updateBasicFinInfo.bind(this);
		this.updateAdvFinInfo = this.updateAdvFinInfo.bind(this);
		this.updateForDevType = this.updateForDevType.bind(this);
		
		//decide whether we are here to edit or not. if not
		//we load default attributes
	}

	componentDidMount(){
		console.log('mounted...')
		let { physicalInfo, basicFinInfo, advFinInfo } = this.props.bldgType;
		this.setState({
			BP: {
				uniqueId: this.props.match.params.id,
				physicalInfo,
				basicFinInfo,
				advFinInfo
			}
		});
		this.updateForDevType(this.props.bldgType);
		if (this.props.bldgType.length === 0 ){
			console.log('no props, getting new ones')
			let _id = this.props.match.params.id
			let status = this.state.editing;
			fetch(this.props.fetchBuildingPrototypeAttributes(status, _id))
				.then(res => {
					console.log('then pt 1...')
					let { physicalInfo, basicFinInfo, advFinInfo } = this.props.bldgType;
					// console.log(this.props);
					this.setState({
						BP: {
							uniqueId: _id,
							physicalInfo,
							basicFinInfo,
							advFinInfo
						}
					});
					// console.log(this.state.BP);
				console.log('fetched...')
					
			}).then( () => {
				console.log('then pt 2...')				
				this.updateForDevType(...this.state.BP);
			});
		}
		console.log(this.state.BP.forDevType);
	}
	
	updatePrototypePhys(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.physicalInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}

	updateBasicFinInfo(newState) {
		console.log(newState);
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.basicFinInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}

	updateAdvFinInfo(newState) {
		let buildingCopy = {
			...this.state.BP
		};
		let key = Object.keys(newState)[0];
		let val = Object.values(newState)[0];
		buildingCopy.advFinInfo[key] = val;
		this.setState(buildingCopy);
		this.updateForDevType(buildingCopy);
	}
	
	componentSelection = (e, value) => {
		this.setState({
			tabValue: value
		});
	}
	
	updateForDevType(buildingCopy){
		this.setState({
			forDevType: devFunc.main(buildingCopy) 
		});
		console.log('update for dev type func');
	}

	saveBuilding = () => {	
		let editing = this.state.editing;
		//if it is new tale the following actions
		if (editing === false){
			//add building to available library modal list
			this.props.newAvailableBuilding(this.state.BP)
			//add building to my library
			this.props.addBuildingToLibrary(this.state.BP);
		}
		this.props.updateBuildingInLibrary(editing, this.state.BP);
		this.props.saveBuildingToDb(editing, this.state.BP);
		this.props.history.push('/create');
	}

	renderChildContent = (pg, newState, forDevType) => {
		// console.log('newstate', newState["physicalInfo"].buildingName);
		// console.log(newState);
		if (pg === 'phys') {
			return (
				<PhysicalFormComponent
					buildingUpdate={this.updatePrototypePhys}
					attributes={newState}
				/>
			);
		} else if (pg === 'fin1') {
			return (
				<BasicFinFormComponent
					buildingUpdate={this.updateBasicFinInfo}
					attributes={newState}
				/>
			);
		} else if (pg === 'fin2') {
			return (
				<AdvancedFinFormComponent
					buildingUpdate={this.updateAdvFinInfo}
					attributes={newState}
				/>
			);
		} else {
			return (
				<BuildingFormReviewComponent
					pageChange={this.changePage}
					attributes={forDevType}
				/>
			);
		}
	}
	render() {
		const { classes } = this.props;
		const { tabValue } = this.state;
		const { BP } = this.state;
		const { forDevType } = this.state;
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
					<Button raised color="primary"  className={classes.button} 
						onClick={()=>this.saveBuilding()}>
						Save
					</Button>	
					
					<Button raised color="accent"  className={classes.button} 
						onClick={()=>this.props.history.push('/create')}>
						Cancel
					</Button>	
				</Grid>

				<Grid item md={8} sm={12}>
					{this.renderChildContent(this.state.tabValue, BP, forDevType)}
				</Grid>
				
				<Grid item className={classes.paper} xs={12}>
					<Button raised color="primary"  className={classes.button} 
						onClick={()=>this.saveBuilding()}>
						Save
					</Button>	
					
					<Button raised color="accent"  className={classes.button} 
						onClick={()=>this.props.history.push('/create')}>
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

