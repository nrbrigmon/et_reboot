import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AddLibraryModalContents from './AddLibraryModalContents';
import ModalContainer from './ModalContainer';

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

class AddLibraryModal extends Component {
    saveBuildings = () =>{
        let tweak = this.props.modList[0];
        this.props.addBuildingArrayToLibrary(tweak, this.props.availableBldgs);
        this.props.closeModal()
    }
    
	render() {
        const { classes } = this.props;
        console.log(this.props);
		return (
            <ModalContainer modal={this.props.modal === 'library' ? true : false}>
                    <h4>Select a library:</h4>
                   
                    <AddLibraryModalContents {...this.props} />

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
            </ModalContainer>)
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