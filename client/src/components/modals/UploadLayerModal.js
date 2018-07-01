import React, { Component } from 'react';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import Moment from 'react-moment';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';

import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import FileUpload from '@material-ui/icons/FileUpload';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import _ModalStyles from '../../styles/ModalStyles';
import LoadingComponent from '../global/LoadingComponent';


const styles = theme => _ModalStyles(theme);

const addDate = (date) => {
    return (date ? <Moment format="MM-DD-YYYY">{ date }</Moment> : "N/A")
}
const ExistingLayersDropdown = (ctx) => {
    let { availableS3Layers } = ctx.props;
    let { formControl } = ctx.props;
    let { layerSelection } = ctx;
    console.log(ctx);
    return (
        <div>
            <FormControl className={formControl}>
                <Select
                    value={0}
                    onChange={layerSelection}
                >
                    <MenuItem value={0}>
                        <em>Select an Existing Layer</em>
                    </MenuItem>
                    {
                        availableS3Layers.map( (elem, idx) => {
                            return (
                                <MenuItem key={idx} value={elem.objectKey}>
                                    {elem.objectName} ({ addDate( elem.modifiedDate ) })
                                </MenuItem>
                            )
                        })
                    }
                </Select>
            </FormControl>
        </div>
    )
}
class UploadLayerModal extends Component {
    state = {
        isLoading: false
    }
    layerSelection = (e) =>{
        let bucketKey = e.target.value;
        this.setState({
            isLoading: true
        })
        this.props.getFileFromS3(bucketKey)
    }
    onDrop = (file) => {
        // this.props.uploadFileToS3(file[0]);
        this.setState({
            isLoading: true
        })
        this.props.convertFileToLayer(file[0]);
    }
    componentDidMount(){
        this.props.getAllLayersFromS3();
    }
    componentWillReceiveProps(nextProps){
        //if the modal is closed, we turn off the animation
        //and restore the initialState
        if (nextProps.modal === false) {
            this.setState({
                isLoading: false
            })
        }
    }
    
	render() {
        const { classes } = this.props;
        // console.log(this.props.availableS3Layers);
		return (
            <ModalContainer modal={this.props.modal === 'uploadLayer' ? true : false}>
                {
                    this.state.isLoading ? <LoadingComponent /> :
                    <span>
                        <h4>Upload an existing base layer:</h4>
                        <ExistingLayersDropdown {...this} />
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
                    </span>
                }
            </ ModalContainer>
            )
    };
                
}

function mapStateToProps(state) {
    return {
        modal: state.modal
        ,availableS3Layers: state.availableS3Layers
    };
}
const styledApp = withStyles(styles)(UploadLayerModal);
export default connect(mapStateToProps, actions)(styledApp);
