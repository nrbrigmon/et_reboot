import React, { Component } from 'react';
import Button from "components/CustomButtons/Button.jsx";

import LoadExistingLibraryModalContents from './LoadExistingLibraryModalContents';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
const styles = theme => ModalStyles(theme);


class LoadExistingLibraryModal extends Component {
    saveBuildings = () =>{
        let tweak = this.props.modList[0];
        this.props.addBuildingArrayToLibrary(tweak, this.props.availableBldgs);
        this.props.closeModal()
    }
    
	render() {
        const { classes } = this.props;
        // console.log(this.props);
		return (
            <ModalContainer modal={this.props.modal === 'existingLibrary' ? true : false}>
                    <h4>Select a library:</h4>
                   
                    <LoadExistingLibraryModalContents {...this.props} />

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.saveBuildings()}>
                            Save
                        </Button>	
                        
                        <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.props.closeModal()}>
                            Cancel
                        </Button>
                    </div>
            </ModalContainer>)
    };
                
}

export default withStyles(styles)(LoadExistingLibraryModal);