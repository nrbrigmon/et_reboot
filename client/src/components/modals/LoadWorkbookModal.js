import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoadWorkbookModalContents from './LoadWorkbookModalContents';
import ModalContainer from './ModalContainer';

import _ModalStyles from '../../styles/ModalStyles';

const styles = theme => _ModalStyles(theme);

class LoadWorkbookModal extends Component {
    loadWorkbook = () =>{
        // this.props.editBuildingPrototype(true, selection)
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'loadWorkbook' ? true : false}>
                    <h4>Load an Existing Workbook:</h4>

                    <LoadWorkbookModalContents {...this.props} />

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                            onClick={()=>this.loadWorkbook()}>
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
const styledApp = withStyles(styles)(LoadWorkbookModal);
export default connect(mapStateToProps, actions)(styledApp);
