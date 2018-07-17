import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';

import Button from '@material-ui/core/Button';
import FileUpload from '@material-ui/icons/FileUpload';
import LoadingComponent from '../global/LoadingComponent';
import { withStyles } from '@material-ui/core/styles';

import ModalStyles from '../../styles/ModalStyles';

const styles = theme => ModalStyles(theme);

class SaveLayerModal extends Component {
    myHandleChange = (e) => {
        // this function doesn't exist
        // this.props.updateBaseLayerProperty("layer_name", e.target.value);
    }
    confirmSave = (layer) => {
        //save layer in db & state
        // this function doesn't exist
        // this.props.uploadLayerToS3(layer);
        //send toast
        this.props.toastMessage("Layer Saved!");
        //close modal
        this.props.closeModal()
    }
	render() {
        // console.log(this.props);
        const { classes } = this.props;
        let { layer_name } = this.props.devWorkbook

		return (
            <ModalContainer modal={this.props.modal === 'saveLayer' ? true : false}>
                <div className={classes.paper}>
                    <Typography type="headline" component="h4">
                        Layer Name:
                    </Typography>
                    
                    <TextField
                        placeholder={'ex. The Grove Mixed-Use Development'}
                        value={layer_name}
                        onChange={(e) => this.myHandleChange(e) }
                        margin="normal"
                    />
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.confirmSave(this.props.baseMapLayer)}>
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
        baseMapLayer: state.baseMapLayer
        ,modal: state.modal
    };
}

export default withStyles(styles)(connect(mapStateToProps, actions)(SaveLayerModal));
