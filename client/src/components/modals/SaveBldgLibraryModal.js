import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import { connect } from 'react-redux';
import * as actions from '../../actions';
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

class SaveBldgLibraryModal extends Component {

    myHandleChange = (e) => {
        this.props.updateLibraryName(e.target.value);
    }
	render() {
        const { classes } = this.props;
        const { library_name } = this.props.myLibrary
		return (
            <ModalContainer modal={this.props.modal === 'saveLibrary' ? true : false}>
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
                    <Button variant="raised" color="primary" className={classes.button} 
                        onClick={()=>this.props.closeModal()}>
                        Confirm
                    </Button>	
                    
                    <Button variant="raised" color="secondary" className={classes.button} 
                        onClick={()=>this.props.closeModal()}>
                        Cancel
                    </Button>
                </div>
            </ModalContainer>
        )
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