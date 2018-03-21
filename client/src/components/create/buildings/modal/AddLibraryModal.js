import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../../../actions';

import AddLibraryModalContents from './AddLibraryModalContents';

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

class AddLibraryModal extends Component {
    saveBuildings = () =>{
        let tweak = this.props.modList[0];
        this.props.addBuildingArrayToLibrary(tweak, this.props.availableBldgs);
        this.props.closeModal()
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
                open={this.props.modal === 'library'}
                onClose={this.cancelModal}
                >
                <div style={getModalStyle()}>
                    <h4>Select a library:</h4>
                   
                    <AddLibraryModalContents  />

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.saveBuildings()}>
                            Save
                        </Button>	
                        
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
        modList: state.modList,
        modal: state.modal,
        availableBldgs: state.availableBldgs
    };
}
const styledApp = withStyles(styles)(AddLibraryModal);
export default connect(mapStateToProps, actions)(styledApp);