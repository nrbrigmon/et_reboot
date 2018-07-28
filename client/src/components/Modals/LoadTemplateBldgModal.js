import React, { Component } from 'react';
import Button from "components/CustomButtons/Button.jsx";

import { connect } from 'react-redux';
import * as actions from '../../actions';

import LoadTemplateBldgModalContents from './LoadTemplateBldgModalContents';
import TextField from '@material-ui/core/TextField';
import ModalContainer from './ModalContainer';
import { withStyles } from '@material-ui/core/styles';  
import ModalStyles from '../../styles/ModalStyles';  
import _buildingHandler from 'constants/sampleBuildings/_buildingHandler';


const styles = theme => ModalStyles(theme);

class LoadTemplateBldgModal extends Component {
    state = {
        selectedBuilding: ''
        ,textSearch: ''
    }
    queueSelection = (item) => {
        this.setState({
            selectedBuilding: item.key
        })
    }
    componentDidMount(){
        this.props.fetchBldgTemplates()
    }
	handleChange = event => {
        let textSearch = event.target.value;
        this.setState({
            textSearch
        })
	};
    loadBuildingAttributes = () =>{
        // this.props.editBuildingPrototype(true, selection)    
        let selection = _buildingHandler(this.state.selectedBuilding)
        this.props.editBuildingPrototype(true, selection)
        this.props.closeModal();
    }

	render() {
        const { classes } = this.props;
		return (
            <ModalContainer modal={this.props.modal === 'templateBuildings' ? true : false}>
                    <h4>Load an Existing Template:</h4>
                    <div>
                        <TextField
							label={"Filter list by..."}
							placeholder={"e.g. Apartment"}
							value={this.state.textSearch}
							onChange={ this.handleChange }
							margin="dense"
						/>
                    </div>
                    <LoadTemplateBldgModalContents 
                        {...this.props} {...this.state} 
                        localBuildingChoice={this.queueSelection}/>

                    <div className={classes.paper}>
                        <Button variant="raised" color="primary" className={classes.button} 
                            onClick={()=>this.loadBuildingAttributes()}>
                            Load
                        </Button>	
                        
                        <Button variant="raised" color="primary" className={classes.button} 
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
        ,bldgTemplates: state.bldgTemplates
    };
}
export default withStyles(styles)(connect(mapStateToProps, actions)(LoadTemplateBldgModal));
