import React, { Component } from 'react';
import { withRouter } from 'react-router';
import ModalContainer from './ModalContainer';
import Button from "components/CustomButtons/Button.jsx";
import UserLoginModalContents from './UserLoginModalContents';
import { withStyles } from '@material-ui/core/styles';
import LoadingComponent from 'components/LoadingComponent/LoadingComponent';
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

	render() {
        const { classes } = this.props;
        // console.log(this)
		return (
            <ModalContainer
                modal={this.props.modal === 'userLogin' ? true : false}>
                {
                    this.props.modal !== false ? <LoadingComponent /> :
                    <span className={classes.loginForm}>
                        <h4 className={classes.title}>Sign Up To Save Your Data</h4>
                        <UserLoginModalContents {...this.props} loginSelection={this.handleLogin}/>
                        <h4>You Can Also Proceed As Anonymous</h4>
                        <div className={classes.paper}>
                            <Button variant="raised" color="primary" className={classes.button} 
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

export default withRouter(withStyles(styles)(UserLoginModal));
