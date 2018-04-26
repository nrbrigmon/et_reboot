import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import * as actions from '../../actions';
import FileUpload from 'material-ui-icons/FileUpload';
import ModalContainer from './ModalContainer';


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
            <ModalContainer modal={this.props.modal === 'uploadLayer' ? true : false}>
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
