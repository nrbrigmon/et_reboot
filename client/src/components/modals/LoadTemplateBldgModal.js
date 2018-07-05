import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoadTemplateBldgModalContents from './LoadTemplateBldgModalContents';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
import buildingHandler from '../create/buildings/examples/buildingHandler';

const styles = theme => ModalStyles(theme);

class LoadTemplateBldgModal extends Component {
    state = {
        selectedBuilding: ''
    }
    queueSelection = (item) => {
        this.setState({
            selectedBuilding: item.key
        })
        console.log(item);
    }
    loadBuildingAttributes = () =>{
        // console.log("LOADING>>>")
        // this.props.editBuildingPrototype(true, selection)    
        let selection = buildingHandler(this.state.selectedBuilding)
        this.props.editBuildingPrototype(true, selection)
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'templateBuildings' ? true : false}>
                    <h4>Load an Existing Template:</h4>

                    <LoadTemplateBldgModalContents {...this.props} 
                        localBuildingChoice={this.queueSelection}/>

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
        modal: state.modal
    };
}
export default withStyles(styles)(connect(mapStateToProps, actions)(LoadTemplateBldgModal));
