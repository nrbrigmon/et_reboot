import React, { Component } from 'react';
import ModalContainer from './ModalContainer';

import LoadingComponent from 'components/LoadingComponent/LoadingComponent';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	container: {
		textAlign: 'center'
	},
	title: {
		marginTop: '0px',
		marginBottom: '0px'
	}
};

class AnimationModal extends Component {
	// componentWillUnmount(){
	// 	console.log("unmounting")
	// 	debugger;
	// }
	render() {    
		let { classes } = this.props;
		// console.log(classes)
		return (
            <ModalContainer modal={this.props.isLoading ? true : false}>
				<span className={classes.container}>
					<h4 className={classes.title}>{this.props.message}...</h4>
					<LoadingComponent />
				</span>
            </ ModalContainer>
            )
    };
                
}

export default withStyles(styles)(AnimationModal);
