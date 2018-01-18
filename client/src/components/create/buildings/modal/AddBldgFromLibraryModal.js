import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import AddBldgTabModal from './AddBldgTabModal';
import { withStyles } from 'material-ui/styles';


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
	constructor(props) {
        super(props);
        
		this.state = {
            allBuildings: []
        }
        
		this.libraryUpdate = this.libraryUpdate.bind(this);
    }
    handleClose = (e) => {
        ///building selection will send the results back to the parent component
        
    }
    saveBuilding = () =>{
        this.props.buildingSelection(this.state.allBuildings);
        this.setState({
            allBuildings: []
        });
    }
    libraryUpdate = (selection) => {
        console.log(selection);
        this.setState({
            allBuildings: selection
        });
    }
    cancelModal = () => {
        this.props.buildingSelection(null)
        this.setState({
            allBuildings: []
        });
    }
	render() {
        const { modalOpen } = this.props.modalState;
        const { tab } = this.props.modalState;
        const { classes } = this.props;
		return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={modalOpen}
                onClose={this.handleClose}
                >
                <div style={getModalStyle()}>
                    <AddBldgTabModal attr={tab} libSelection={this.libraryUpdate} />
                    <div className={classes.paper}>
                        <Button raised color="primary" className={classes.button} onClick={()=>this.saveBuilding()}>
                            Save
                        </Button>	
                        
                        <Button raised color="accent" className={classes.button} onClick={()=>this.cancelModal()}>
                            Cancel
                        </Button>
                    </div>
                </div>
                
                
            </Modal>)
    };
                
}

export default withStyles(styles)(AddBldgFromLibraryModal);