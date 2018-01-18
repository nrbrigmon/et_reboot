import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';
import Button from 'material-ui/Button';

import axios from 'axios';
import PhysicalFormComponent from './PhysicalFormComponent';
import BasicFinFormComponent from './BasicFinFormComponent';
import AdvancedFinFormComponent from './AdvancedFinFormComponent';
import BuildingFormReviewComponent from './BuildingFormReviewComponent';
import BuildingPrintSummary from './BuildingPrintSummary';
import * as devFunc from './_updateForDevType';
import sampleFields from './inputs/sampleBuildingInput';

const styles = theme => ({
	root: {
	  flexGrow: 1,
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
				uniqueId: props.match.params.id,
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
		if (this.state.editing){
			//load attributes
			// console.log(this.state.BP);
			axios.get('/api/buildings/'+this.state.BP.uniqueId).then( (res) => {
				// console.log(res);
				let { physicalInfo, basicFinInfo, advFinInfo } = res["data"][0].attributes;
				// console.log(res["data"][0].attributes)
				this.setState({
					BP: {
						uniqueId: this.state.BP.uniqueId,
						physicalInfo,
						basicFinInfo,
						advFinInfo
					}
				});
			});

		} else { 
			// console.log('this is new')
			//load default attributes for new building type
			let { physicalInfo, basicFinInfo, advFinInfo } = sampleFields;
			this.setState({
				BP: {
					uniqueId: this.state.BP.uniqueId,
					physicalInfo,
					basicFinInfo,
					advFinInfo
				}
			});
		}
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
		if (this.state.editing){
			axios.put('/api/buildings/'+this.state.BP.uniqueId+'', this.state.BP).then( (res) => {
				// alert('new row added...');
				console.log(res.data.name);
				// create "saved! animation, unobstrusive and passive"
			});
			this.props.history.push('/create');
		} else {
			axios.post('/api/buildings', this.state.BP).then( (res) => {
				// alert('new row added...');
				console.log(res);
				// create "saved! animation, unobstrusive and passive"
			});
			this.props.history.push('/create');
		}
	}

	renderChildContent = (pg) => {
		if (pg === 'phys') {
			return (
				<PhysicalFormComponent
					buildingUpdate={this.updatePrototypePhys}
					attributes={this.state.BP}
				/>
			);
		} else if (pg === 'fin1') {
			return (
				<BasicFinFormComponent
					buildingUpdate={this.updateBasicFinInfo}
					attributes={this.state.BP}
				/>
			);
		} else if (pg === 'fin2') {
			return (
				<AdvancedFinFormComponent
					buildingUpdate={this.updateAdvFinInfo}
					attributes={this.state.BP}
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
					<Grid item md={8} sm={12}>
						{this.renderChildContent(this.state.tabValue)}
					</Grid>
					<Grid item className={classes.paper} xs={12}>
						<Button raised color="primary"  className={classes.button} onClick={()=>this.saveBuilding()}>
							Save
						</Button>	
						
						<Button raised color="accent"  className={classes.button} onClick={()=>this.props.history.push('/create')}>
							Cancel
						</Button>	
				</Grid>
			</Grid>
		);
	}
}
export default withStyles(styles)(BuildingPrototypeStart);
