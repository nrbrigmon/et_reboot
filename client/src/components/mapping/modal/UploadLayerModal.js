import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import * as actions from '../../../actions';
import FileUpload from 'material-ui-icons/FileUpload';

const styles = theme => ({
	paper: {
        textAlign: 'center',
      },
      button: {
          width: '40%',
          margin: '0 10px 0 10px',
          maxWidth: '180px'
      },
      dropzone: {
        width: "100%",
        height: '160px',
        padding: '10px',
        margin: '20px 0px',
        backgroundColor: '#eeeeee',
        background: "#eeeeee",
        borderWidth: '2px',
        borderColor: 'rgb(102, 102, 102)',
        borderStyle: 'dashed',
        borderRadius: '5px',
        opacity: '0.7',
        textAlign: 'center'
      }
  });

function getModalStyle() {
    const top = 50; // + Math.floor(Math.random() * 20) - 10;
    const left = 50; // + Math.floor(Math.random() * 20) - 10;

    return {
        position: 'absolute',
        width: 8 * 50,
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        border: '1px solid #e5e5e5',
        backgroundColor: '#fff',
        boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
        padding: 8 * 4,
    };
}

class UploadLayerModal extends Component {
    saveBuildings = () =>{
        // this.props.addBuildingArrayToLibrary(this.props.modList, this.props.availableBldgs);
        this.props.closeModal();
    }

    cancelModal = () => {
        this.props.closeModal()
    }
	render() {
        const { classes } = this.props;
		return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modal === 'uploadLayer'}
                onClose={this.cancelModal}
                >
                <div style={getModalStyle()}>
                    <h4>Upload a custom base layer</h4>
                    <div className="dropzone">
                        <Dropzone className={classes.dropzone} >
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
                </div>
                
            </Modal>)
    };
                
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}
const styledApp = withStyles(styles)(UploadLayerModal);
export default connect(mapStateToProps, actions)(styledApp);
