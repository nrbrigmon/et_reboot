import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from 'actions';
import { withStyles } from '@material-ui/core/styles';
import Button from "components/CustomButtons/Button.jsx";

import BuildingMixSection from './Sections/BuildingMixSection';
import AttributeSection from './Sections/AttributeSection';
import DevelopmentTypeReview from './Sections/DevelopmentTypeReview';
import Wrapper900 from "components/Wrappers/Wrapper900"
import LoadWorkbookModal from 'components/Modals/LoadWorkbookModal';
import SaveWorkbookModal from 'components/Modals/SaveWorkbookModal';
import DevTypeStyles from 'styles/DevTypeStyles';
import UpdateToast from 'components/Modals/UpdateToast';

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
	createNewWorkbook = () => {
		this.props.initializeNewWorkbook();
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
				<Route path={`/dev-types/building-mix`} render={()=> <BuildingMixSection  {...this.props} />} />
				<Route path={`/dev-types/attributes`} render={()=> <AttributeSection {...this.props}  />} />
				<Route path={`/dev-types/review`} render={()=> <DevelopmentTypeReview  {...this.props}  />}/>
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
					<Button  
						className={classes.cardButton} 
						variant="raised" color="primary" 
						onClick={()=>this.createNewWorkbook()}>
						Create New Workbook
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