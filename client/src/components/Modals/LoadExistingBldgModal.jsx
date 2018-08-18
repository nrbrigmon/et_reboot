import React, { Component } from 'react';
import Button from "components/CustomButtons/Button.jsx";

import LoadExistingBldgModalContents from './LoadExistingBldgModalContents';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
const styles = theme => ModalStyles(theme);

class LoadExistingBldgModal extends Component {
    saveBuildings = () =>{
        this.props.addBuildingArrayToLibrary(this.props.modList, this.props.availableBldgs);
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'existingBuildings' ? true : false}>
                    <h4>Select your buildings:</h4>

                    <LoadExistingBldgModalContents {...this.props}/>

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


export default withStyles(styles)(LoadExistingBldgModal);
