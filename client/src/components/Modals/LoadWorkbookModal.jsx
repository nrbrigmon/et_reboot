import React, { Component } from 'react';
import Button from "components/CustomButtons/Button.jsx";

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
                        
                        <Button variant="raised" color="primary" className={classes.button} 
                            onClick={()=>this.props.closeModal()}>
                            Cancel
                        </Button>
                    </div>
            </ModalContainer>)
    };
                
}

export default withStyles(styles)(LoadWorkbookModal);
