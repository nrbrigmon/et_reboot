import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

import ModalStyles from '../../styles/ModalStyles';

const styles = theme => ModalStyles(theme);

class ModalContainer extends Component {

    cancelModal = () => {
        this.props.closeModal()
    }
	render() {
        const { children } = this.props;
        const { classes } = this.props;
        
		return (
			<Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modal}
                onClose={this.cancelModal}
                >
                <div className={classes.container} >
				    { children }
				</div>
            </Modal>)
	}
}


const styledApp = withStyles(styles)(ModalContainer);
export default connect(null, actions)(styledApp);