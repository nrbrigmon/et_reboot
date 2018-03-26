import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

const styles = theme => ({
	paper: {
        textAlign: 'center',
      },
      button: {
          width: '40%',
          margin: '0 10px 0 10px',
          maxWidth: '180px'
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
                    <h4>Select your file:</h4>

                    <p>This window is for uploading a layer from your computer....
                    (geojson or KML preferably... we may expand)</p>

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
