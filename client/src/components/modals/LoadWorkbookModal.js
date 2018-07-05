import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import * as helper from '../../utils/_helperMethods';
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
    loadWorkbook = (bldgs) =>{
        // console.log(this.state.selectedWorkbook);
        //load the workbook and all it's attributes
        this.props.loadSavedWorkbook(this.state.selectedWorkbook)
        //also, load the buildings that make up the workbook itself
        let selectedBldgs = helper.getBldgIdsFromWkbk(this.state.selectedWorkbook);
        console.log(selectedBldgs);
        this.props.loadSelectedBuildings(selectedBldgs, bldgs);
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
                            onClick={()=>this.loadWorkbook(this.props.availableBldgs)}>
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
        ,availableBldgs: state.availableBldgs
    };
}
export default withStyles(styles)(connect(mapStateToProps, actions)(LoadWorkbookModal));
