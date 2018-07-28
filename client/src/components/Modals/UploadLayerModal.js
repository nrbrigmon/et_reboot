import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';

import Button from "components/CustomButtons/Button.jsx";
import FileUpload from '@material-ui/icons/FileUpload';
import LoadingComponent from 'components/LoadingComponent/LoadingComponent';
import UploadLayerModalDropdown from './UploadLayerModalDropdown';
import { withStyles } from '@material-ui/core/styles';

import ModalStyles from '../../styles/ModalStyles';

const styles = theme => ModalStyles(theme);

class UploadLayerModal extends Component {
    state = {
        isLoading: false
    }
    componentDidMount(){
        this.props.getAllLayersFromS3();
    }
    // componentDidUpdate(prevProps){
    //     //if the modal is closed, we turn off the animation
    //     //and restore the initialState
    //     if (this.props.modal === false) {
    //         this.updateState();        
    //     }
    // }
    
    updateState = () => {
        // console.log(this.state.isLoading);
        this.setState({
            isLoading: !this.state.isloading
        })
    }
    layerSelection = (e) =>{
        let bucketKey = e.target.value;
        this.props.getFileFromS3(bucketKey)
        this.updateState();
    }
    onDrop = (file) => {
        this.props.uploadFileToS3(file[0]);
        this.updateState();
        this.props.convertFileToLayer(file[0]);
    }

	render() {
        // console.log(this.props);
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'uploadLayer' ? true : false}>
                {
                    this.state.isLoading ? <LoadingComponent /> :
                    <span>
                        <h4>Upload an existing base layer:</h4>
                        <UploadLayerModalDropdown {...this} />
                        <h4>Upload a custom base layer</h4>
                        <div className="dropzone">
                            <Dropzone
                                multiple={false}
                                onDrop={(files) => this.onDrop(files)}
                                className={classes.dropzone} >
                                <p>Try dropping some files here, or click to select files to upload.</p>
                                <FileUpload />
                            </Dropzone>
                        </div>
                        <div className={classes.paper}>
                            <Button variant="raised" color="primary" className={classes.button} 
                                onClick={()=>this.props.closeModal()}>
                                Cancel
                            </Button>
                        </div>
                    </span>
                }
            </ ModalContainer>
            )
    };
                
}

function mapStateToProps(state) {
    return {
        availableS3Layers: state.availableS3Layers
        ,modal: state.modal
    };
}

export default withStyles(styles)(connect(mapStateToProps, actions)(UploadLayerModal));
