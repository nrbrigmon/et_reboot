import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
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
	componentDidUpdate(prevProps){
		if (prevProps.baseMapLayer.length !== this.props.baseMapLayer.length){
			this.setState({
				isLoading: false
			})
			// console.log("State set")
		} else {
			return
		}
	}

    layerSelection = (e) =>{
		this.setState({
			isLoading: true
		})
        let bucketKey = e.target.value;
        this.props.getFileFromS3(bucketKey)
    }
    onDrop = (file) => {
		this.setState({
			isLoading: true
		})
        this.props.uploadFileToS3(file[0]);
        this.props.convertFileToLayer(file[0]);
    }

	render() {    
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
                                <p>Try dropping a zipped shapefile here.</p>
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

export default withStyles(styles)(UploadLayerModal);
