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

class SaveWorkbookModal extends Component {

    myHandleChange = (e) => {
        this.props.updateWorkbookProperty("workbook_name", e.target.value);
    }
    confirmSave = (wkbk) => {
        //save library in db & state
        this.props.saveWorkbook(wkbk);
        //send toast
        this.props.toastMessage("Workbook Saved!");
        //close modal
        this.props.closeModal()
    }
	render() {
        let { classes } = this.props;
        // console.log(this.props);
        let { workbook_name } = this.props.devWorkbook
		return (
            <ModalContainer modal={this.props.modal === 'saveWorkbook' ? true : false}>
                <div className={classes.paper}>
                    <Typography type="headline" component="h4">
                        Workbook Name:
                    </Typography>
                    
                    <TextField
                        placeholder={'ex. D\'s Waco Workbook'}
                        value={workbook_name}
                        onChange={(e) => this.myHandleChange(e) }
                        margin="normal"
                    />
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.confirmSave(this.props.devWorkbook)}>
                        Confirm
                    </Button>	
                    
                    <Button variant="raised" color="secondary" className={classes.button} 
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
export default withStyles(styles)(connect(mapStateToProps, actions)(SaveWorkbookModal));