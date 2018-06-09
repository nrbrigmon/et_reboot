import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoadBldgAttrModalContents from './LoadBldgAttrModalContents';
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

class LoadBldgAttrModal extends Component {
    loadBuildingAttributes = () =>{
        console.log("LOADING>>>")
        // this.props.editBuildingPrototype(true, selection)
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'loadAttributes' ? true : false}>
                    <h4>Load an Existing Template:</h4>

                    <LoadBldgAttrModalContents {...this.props} />

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                            onClick={()=>this.loadBuildingAttributes()}>
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
        modal: state.modal,
    };
}
const styledApp = withStyles(styles)(LoadBldgAttrModal);
export default connect(mapStateToProps, actions)(styledApp);
