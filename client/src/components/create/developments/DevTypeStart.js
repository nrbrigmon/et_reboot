import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import DevTypeBuildingMix from './DevTypeBuildingMix';
import DevTypeAttributes from './DevTypeAttributes';
import DevTypeReview from './DevTypeReview';
import Wrapper900 from '../../wrappers/Wrapper900';


class DevTypeStart extends Component {
	constructor(props){
		super(props);
		this.state = {
			devPage: 'mix'
		}
		this.handleChange = this.handleChange.bind(this);

	}
	componentDidMount(){
		this.props.startInitalizeWorkbook(this.props.myLibrary.selected_buildings);		
		//sample development type data until i can get some real stuff going
	}
	
	handleChange = val => {
		// console.log(val);
		this.setState({
			devPage: val
		});
	}
	renderDevPage(choice){
		if (choice === 'mix'){
			return <DevTypeBuildingMix changePage={this.handleChange} />
		} else if (choice === 'attributes') {
			return <DevTypeAttributes changePage={this.handleChange} />
		} else if (choice === 'review') {
			return <DevTypeReview changePage={this.handleChange} />
		} else {
			this.props.history.push('/create')
		}
	}
	render() {
		// const { classes } = this.props;
		let devPage = this.state.devPage;
		// console.log(this.props);
		return (
			<Wrapper900>

					{ this.renderDevPage(devPage) }

			</Wrapper900>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
			myLibrary: state.myLibrary
		 };
}
  
export default connect(mapStateToProps, actions)(DevTypeStart);