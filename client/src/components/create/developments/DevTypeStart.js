import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import DevTypeBuildingMix from './DevTypeBuildingMix';
import DevTypeAttributes from './DevTypeAttributes';
import DevTypeReview from './DevTypeReview';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		// marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		padding: '20px'
	},
	card: {
		padding: '20px'
	}
  });


  
class DevTypeStart extends Component {
	constructor(props){
		super(props);
		this.state = {
			devPage: 'mix'
		}
		this.handleChange = this.handleChange.bind(this);

	}
	componentDidMount(){
		//loop through this list of ids in library
		if (this.props.devTypes.length < 1){
			let selectedBldgs = this.props.myLibrary.selected_buildings;
			// console.log(selectedBldgs)
			this.props.fetchDevTypeInit(1, selectedBldgs);		
		}
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
		const { classes } = this.props;
		let devPage = this.state.devPage;
		// console.log(this.props);
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>

					{ this.renderDevPage(devPage) }

			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
			myLibrary: state.myLibrary,
			devTypes: state.devTypes
		 };
}
  
const styledApp = withStyles(styles)(DevTypeStart);
export default connect(mapStateToProps, actions)(styledApp);