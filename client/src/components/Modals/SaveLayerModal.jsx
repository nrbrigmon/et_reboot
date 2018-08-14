import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';

import Button from "components/CustomButtons/Button.jsx";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import ModalStyles from '../../styles/ModalStyles';

const styles = theme => ModalStyles(theme);

class SaveLayerModal extends Component {
	state = {
		_name: ''
	}
    myHandleChange = (e) => {
        // this function doesn't exist
		// this.props.updateBaseLayerProperty("layer_name", e.target.value);
		this.setState({
			_name: e.target.value
		})
		// console.log(this.state._name)
    }
    confirmSave = (layer) => {
		//save layer in db & state
		layer.name = this.state._name
		// this function doesn't exist
		console.log(layer)
        this.props.saveBaseLayerToS3(layer);
        //send toast
        this.props.toastMessage("Layer Saved!");
        //close modal
        this.props.closeModal()
    }
	render() {
        // console.log(this.props);
        const { classes } = this.props;
        const { layer_name } = this.props.devWorkbook

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
        baseMapLayer: state.baseMapLayer
        ,modal: state.modal
    };
}

export default withStyles(styles)(connect(mapStateToProps, actions)(SaveLayerModal));
