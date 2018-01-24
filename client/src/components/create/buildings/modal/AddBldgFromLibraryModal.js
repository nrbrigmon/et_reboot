import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import AddBldgTabModal from './AddBldgTabModal';
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

class AddBldgFromLibraryModal extends Component {
    saveBuildings = () =>{
        this.props.addBuildingToLibrary(this.props.modList);
        this.props.buildingSelection(null);
    }

    cancelModal = () => {
        this.props.buildingSelection(null)
    }

	render() {
        const { modalOpen } = this.props.modalState;
        const { tab } = this.props.modalState;
        const { classes } = this.props;
        // console.log(this.props);
		return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modalOpen}
                >
                <div style={getModalStyle()}>
                    <AddBldgTabModal attr={tab} libSelection={this.libraryUpdate} />
                    <div className={classes.paper}>
                        <Button raised color="primary" className={classes.button} 
                        onClick={()=>this.saveBuildings()}>
                            Save
                        </Button>	
                        
                        <Button raised color="accent" className={classes.button} 
                        onClick={()=>this.cancelModal()}>
                            Cancel
                        </Button>
                    </div>
                </div>
                
            </Modal>)
    };
                
}

function mapStateToProps(state) {
    return { modList: state.modList  };
}
const styledApp = withStyles(styles)(AddBldgFromLibraryModal);
export default connect(mapStateToProps, actions)(styledApp);