import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from 'actions';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import DevTypeBuildingMix from 'ccomponents/create/developments/DevTypeBuildingMix';
import DevTypeAttributes from 'ccomponents/create/developments/DevTypeAttributes';
import DevTypeReview from 'ccomponents/create/developments/DevTypeReview';
import Wrapper900 from 'ccomponents/wrappers/Wrapper900';
import LoadWorkbookModal from 'ccomponents/modals/LoadWorkbookModal';
import SaveWorkbookModal from 'ccomponents/modals/SaveWorkbookModal';
import DevTypeStyles from 'styles/DevTypeStyles';
import UpdateToast from 'ccomponents/modals/UpdateToast';

// core components
import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import Footer from "components/Footer/Footer.jsx";

const styles = theme => DevTypeStyles(theme);

class DevelopmentTypePage extends Component {
	state = {
		isExisting: false
	}
	componentDidMount(){
		//sample development type data until i can get some real stuff going
		if (this.props.availableWkbks.length === 0) {
			this.props.fetchAllDevWorkbooks();
		}
	}
	loadWorkbook = () => {
		this.props.openModal("loadWorkbook");
	}
	saveWorkbook = () => {
		this.props.openModal("saveWorkbook")
	}
	render() {
		// console.log(this.props.devWorkbook);
		let pathHome = this.props.match.isExact;
		// console.log(pathHome);
		const { classes, ...rest } = this.props;
		return (
			<div>
			  <Header
				color="white"
				rightLinks={<HeaderLinks splash={false} {...rest} />}
				fixed
				{...rest}
			  />
			  
			  <div className={classes.container}>
			<Wrapper900>
				<Route path={`/dev-types/building-mix`} render={()=> <DevTypeBuildingMix  />}/>
				<Route path={`/dev-types/attributes`} render={()=> <DevTypeAttributes   />}/>
				<Route path={`/dev-types/review`} render={()=> <DevTypeReview   />}/>
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
					<LoadWorkbookModal />
					<SaveWorkbookModal />
					<UpdateToast {...this.props} />
				</div>
				
				</Wrapper900>
				<Footer />
			</div>
		</div>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
			availableWkbks: state.availableWkbks
			,availableBldgs: state.availableBldgs
			,devWorkbook: state.devWorkbook
			,modal: state.modal
			,toast: state.toast		
		 };
}
  
export default withStyles(styles)(connect(mapStateToProps, actions)(DevelopmentTypePage));