import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FileUpload from 'material-ui-icons/FileUpload';
import ModalContainer from './ModalContainer';
import _ModalStyles from './_ModalStyles';

const styles = theme => (_ModalStyles(theme));

class UploadLayerModal extends Component {
    saveBuildings = () =>{
        // this.props.addBuildingArrayToLibrary(this.props.modList, this.props.availableBldgs);
        this.props.closeModal();
    }
    onDrop = (file) => {
        // this.props.uploadFileToS3(file[0]);
        this.props.convertFileToLayer(file[0]);
        // add (and start) loading animation
    }
    cancelModal = () => {
        this.props.closeModal()
    }
	render() {
        const { classes } = this.props;
        // console.log(this.props);
		return (
            <ModalContainer modal={this.props.modal === 'uploadLayer' ? true : false}>
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
    };
}
const styledApp = withStyles(styles)(UploadLayerModal);
export default connect(mapStateToProps, actions)(styledApp);
