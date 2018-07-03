import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';

import _ModalStyles from '../../styles/ModalStyles';

const styles = theme => _ModalStyles(theme);

class SaveWorkbookModal extends Component {

    myHandleChange = (e) => {
        this.props.updateWorkbookName(e.target.value);
    }
	render() {
        const { classes } = this.props;
        const { library_name } = this.props.myLibrary
		return (
            <ModalContainer modal={this.props.modal === 'saveWorkbook' ? true : false}>
                <div className={classes.paper}>
                    <Typography type="headline" component="h4">
                        Workbook Name:
                    </Typography>

                    <TextField
                        placeholder={'ex. D\'s Waco Library'}
                        value={library_name}
                        onChange={(e) => this.myHandleChange(e) }
                        margin="normal"
                    />
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.props.closeModal()}>
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

const styledApp = withStyles(styles)(SaveWorkbookModal);
export default connect(null, actions)(styledApp);