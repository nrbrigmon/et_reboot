import React, { Component } from 'react';
import Button from "components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
const styles = theme => ModalStyles(theme);

class SaveBldgLibraryModal extends Component {

    myHandleChange = (e) => {
        this.props.updateLibraryName(e.target.value);
    }
    confirmSave = (devWorkbook) => {
        let { workbook_library } = devWorkbook
        //save library in db & state
        this.props.saveBuildingLibrary(workbook_library);
        //send toast
        this.props.toastMessage("Library Saved!")
        //close modal
        this.props.closeModal()
    }
	render() {
        const { classes } = this.props;
		const { library_name } = this.props.devWorkbook.workbook_library
		console.log(library_name)
		return (
            <ModalContainer modal={this.props.modal === 'saveLibrary' ? true : false}>
                <div className={classes.paper}>
                    <Typography type="headline" component="h4">
                        Library Name:
                    </Typography>

                    <TextField
                        placeholder={'ex. D\'s Waco Library'}
                        value={library_name}
                        onChange={(e) => this.myHandleChange(e) }
                        margin="normal"
                    />
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.confirmSave(this.props.devWorkbook)}>
                        Confirm
                    </Button>	
                    
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.props.closeModal()}>
                        Cancel
                    </Button>
                </div>
            </ModalContainer>
        )
    };
                
}

function mapStateToProps(state) {
    return { 
        devWorkbook: state.devWorkbook
        ,modal: state.modal

     };
}
export default withStyles(styles)(connect(mapStateToProps, actions)(SaveBldgLibraryModal));