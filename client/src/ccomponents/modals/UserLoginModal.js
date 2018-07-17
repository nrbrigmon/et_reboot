import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import ModalContainer from './ModalContainer';
import Button from '@material-ui/core/Button';
import UserLoginModalContents from './UserLoginModalContents';
import { withStyles } from '@material-ui/core/styles';
import LoadingComponent from '../global/LoadingComponent';
import * as helper from '../../utils/_helperMethods';

import ModalStyles from '../../styles/ModalStyles';

const styles = theme => ModalStyles(theme);

class UserLoginModal extends Component {
    state = {
        isLoading: false
    }
    
    handleLogin = (selection) => {
        if (selection === "google"){
            this.setState({
                isLoading: true
            })
            window.location = '/auth/'+selection;
        } else {
            helper.navigateTo(selection, this.props);
        }
        this.props.closeModal()
    }
    componentDidMount(){
        if (this.props.modal === false){
            this.setState({
                isLoading: false
            })
        }
    }
	render() {
        const { classes } = this.props;
        // console.log(this)
		return (
            <ModalContainer
                modal={this.props.modal === 'userLogin' ? true : false}>
                {
                    this.state.isLoading ? <LoadingComponent /> :
                    <span className={classes.loginForm}>
                        <h4 className={classes.title}>Sign Up To Save Your Data</h4>
                        <UserLoginModalContents {...this.props} loginSelection={this.handleLogin}/>
                        <h4>You Can Also Proceed As Anonymous</h4>
                        <div className={classes.paper}>
                            <Button variant="raised" color="secondary" className={classes.button} 
                                onClick={()=>this.props.closeModal()}>
                                Cancel
                            </Button>
                        </div>
                    </span>
                }
            </ ModalContainer>
            )
    };
                
}

function mapStateToProps(state) {
    return {
        modal: state.modal
    };
}

export default withRouter(withStyles(styles)(connect(mapStateToProps, actions)(UserLoginModal)));
