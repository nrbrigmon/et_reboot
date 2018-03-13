import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

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

class SaveBldgLibraryModal extends Component {

    myHandleChange = (e) => {
        this.props.updateLibraryName(e.target.value);
    }

    saveLibrary= () => {
        console.log(this.props.myLibrary);
        // this.props.saveBuildingLibrary(saveObj, false);
        // this.props.buildingLibSelection(null);
        this.props.closeModal()
    }

    cancelModal = () => {
        this.props.closeModal()
    }

	render() {
        const { classes } = this.props;
        const { library_name } = this.props.myLibrary
		return (
            <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modal === 'saveLibrary'}
                onClose={this.cancelModal}
                >
                <div style={getModalStyle()}>
                    <div className={classes.paper}>
                        <Typography type="headline" component="h4">
                            Library Name:
                        </Typography>

                        <TextField
                            placeholder={'ex. D\'s Waco Library'}
                            value={library_name}
                            onChange={(e) => this.myHandleChange(e) }
                            margin="normal"
                        />
                        <Button raised color="primary" className={classes.button} 
                            onClick={()=>this.saveLibrary()}>
                            Confirm
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
    return { 
        myLibrary: state.myLibrary,
        modal: state.modal
     };
}
const styledApp = withStyles(styles)(SaveBldgLibraryModal);
export default connect(mapStateToProps, actions)(styledApp);