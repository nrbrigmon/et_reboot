import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoadWorkbookModalContents from './LoadWorkbookModalContents';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
const styles = theme => ModalStyles(theme);


class LoadWorkbookModal extends Component {
    state = {
        selectedWorkbook: {}
    }
    queueSelection = (item) => {
        this.setState({
            selectedWorkbook: item
        })
        // console.log(item);
    }
    loadWorkbook = () =>{
        // console.log(this.state.selectedWorkbook);
        this.props.loadSavedWorkbook(this.state.selectedWorkbook)
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
        // console.log(this.props);
		return (
            <ModalContainer modal={this.props.modal === 'loadWorkbook' ? true : false}>
                    <h4>Load an Existing Workbook:</h4>

                    <LoadWorkbookModalContents {...this.props} 
                        localWorkbookChoice={this.queueSelection} />

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                            onClick={()=>this.loadWorkbook()}>
                            Load
                        </Button>	
                        
                        <Button variant="raised" color="secondary" className={classes.button} 
                            onClick={()=>this.props.closeModal()}>
                            Cancel
                        </Button>
                    </div>
            </ModalContainer>)
    };
                
}

function mapStateToProps(state) {
    return {
        modal: state.modal
        ,availableWkbks: state.availableWkbks
    };
}
export default withStyles(styles)(connect(mapStateToProps, actions)(LoadWorkbookModal));
