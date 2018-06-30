import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from 'material-ui/styles';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import AddBldgModalContents from './AddBldgModalContents';
import ModalContainer from './ModalContainer';
import _ModalStyles from './_ModalStyles';

const styles = theme => (_ModalStyles(theme));

class AddBldgModal extends Component {
    saveBuildings = () =>{
        this.props.addBuildingArrayToLibrary(this.props.modList, this.props.availableBldgs);
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'buildings' ? true : false}>
                    <h4>Select your buildings:</h4>

                    <AddBldgModalContents {...this.props}/>

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
const styledApp = withStyles(styles)(AddBldgModal);
export default connect(mapStateToProps, actions)(styledApp);