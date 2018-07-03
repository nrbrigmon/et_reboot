import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DevTypeBuildingMix from './DevTypeBuildingMix';
import DevTypeAttributes from './DevTypeAttributes';
import DevTypeReview from './DevTypeReview';
import Wrapper900 from '../../wrappers/Wrapper900';

import _DevTypeStyles from '../../../styles/DevTypeStyles';

const styles = theme => _DevTypeStyles(theme);

class DevTypeStart extends Component {
	state = {
		isExisting: false
	}
	componentDidMount(){
		this.props.startInitalizeWorkbook(this.props.myLibrary.selected_buildings);		
		//sample development type data until i can get some real stuff going
	}
	loadWorkbook = () => {
		this.props.openModal("loadWorkbook");
	}
	saveWorkbook = () => {
		this.props.openModal("saveWorbook")
	}
	render() {
		let pathHome = this.props.match.isExact;
		// console.log(pathHome);
		const { classes } = this.props;
		return (
			<Wrapper900>
				
				<Route path={`/create/dev-types/building-mix`} render={()=> <DevTypeBuildingMix  />}/>
				<Route path={`/create/dev-types/attributes`} render={()=> <DevTypeAttributes   />}/>
				<Route path={`/create/dev-types/review`} render={()=> <DevTypeReview   />}/>
				{
					(pathHome) ? <p>welcome home</p> : <span></span>
				}
				<div className={classes.cardAction}>
					<Button  
						className={classes.cardButton} 
						variant="raised" color="primary" 
						onClick={()=>this.loadWorkbook()}>
						Load Existing
					</Button>	
					<Button  
						className={classes.cardButton} 
						variant="raised" color="primary" 
						onClick={()=>this.saveWorkbook()}>
						Save Progress
					</Button>	
				</div>
			</Wrapper900>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
			myLibrary: state.myLibrary,
			devWorkbook: state.myLibrary,
			modal: state.modal
		 };
}
  
export default withStyles(styles)(connect(mapStateToProps, actions)(DevTypeStart));