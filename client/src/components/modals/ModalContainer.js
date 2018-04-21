import React, { Component } from 'react';
import Modal from 'material-ui/Modal';
import { connect } from 'react-redux';
import * as actions from '../../actions';

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

class ModalContainer extends Component {

    cancelModal = () => {
        this.props.closeModal()
    }
	render() {
		const { children } = this.props;
		return (
			<Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.props.modal}
                onClose={this.cancelModal}
                >
                <div style={getModalStyle()}>
					{children}
				</div>
            </Modal>)
	}
}


export default connect(null, actions)(ModalContainer);