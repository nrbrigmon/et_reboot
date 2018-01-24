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
import BuildingPrintSummary from './BuildingPrintSummary';
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
		// console.log(shortid.generate());
		// if new building shortid.generate
		// else get shortid from exinput
	
		this.state = {
			tabValue: 'phys',
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
	componentDidMount = () => {
		console.log(this.props.bldgType)
		let { physicalInfo, basicFinInfo, advFinInfo } = this.props.bldgType;
		this.setState({
			BP: {
				uniqueId: this.props.match.params.id,
				physicalInfo,
				basicFinInfo,
				advFinInfo
			}
		});
		if (this.props.bldgType.length === 0 ){
			console.log('no props, getting new ones')
			let _id = this.props.match.params.id
			let status = this.state.editing;
			fetch(this.props.fetchBuildingPrototypeAttributes(status, _id))
				.then(res => {
					// console.log('post featch ', res)
					let { physicalInfo, basicFinInfo, advFinInfo } = this.props.bldgType;
					this.setState({
						BP: {
							uniqueId: _id,
							physicalInfo,
							basicFinInfo,
							advFinInfo
						}
					});
			});
		}
		
		// console.log(this.props.bldgType);
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
	}

	saveBuilding = () => {	
		let status = this.state.editing;
		// let _id = this.state.BP.uniqueId;
		this.props.saveBuilding(status, this.state.BP);
        this.props.addBuildingToLibrary([this.state.BP]);
		this.props.history.push('/create');
	}

	renderChildContent = (pg, newState) => {
		// console.log('newstate', newState["physicalInfo"].buildingName);
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
		} else if (pg === 'print') {
			return <BuildingPrintSummary />;
		} else {
			return (
				<BuildingFormReviewComponent
					pageChange={this.changePage}
					attributes={this.state.forDevType}
				/>
			);
		}
	}
	render() {
		const { classes } = this.props;
		const { tabValue } = this.state;
		// console.log('render props ',this.props.bldgType);
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
							<Tab value="rev" label="Review" />
							<Tab value="print" label="Print" />
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
						{this.renderChildContent(this.state.tabValue, this.state.BP)}
					</Grid>
			</Grid>
		);
	}
}

function mapStateToProps(state) {
		// console.log(state.bldgType);
	  return { bldgType: state.bldgType };
}

const styledApp = withStyles(styles)(BuildingPrototypeStart);
export default connect(mapStateToProps, actions)(styledApp);

