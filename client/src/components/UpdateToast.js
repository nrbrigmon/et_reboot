import React from 'react';
import { withStyles } from 'material-ui/styles';
// import Button from 'material-ui/Button';
import Snackbar from 'material-ui/Snackbar';
// import IconButton from 'material-ui/IconButton';
// import CloseIcon from 'material-ui-icons/Close';

import { connect } from 'react-redux';
import * as actions from '../actions';

const styles = theme => ({
  close: {
    width: theme.spacing.unit * 4,
    height: theme.spacing.unit * 4,
  },
});

class UpdateToast extends React.Component {

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };

    render() {
        // console.log(this.props);
        return (
            <div>
                {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.toast}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">Building Saved!</span>}
                //   action={[
                //     <Button key="undo" color="inherit" size="small" onClick={this.handleClose}>
                //       UNDO
                //     </Button>,
                //         <IconButton
                //         key="close"
                //         aria-label="Close"
                //         color="inherit"
                //         onClick={this.handleClose}
                //         >
                //       <CloseIcon />
                //     </IconButton>,
                //   ]}
                />
            </div>
        );
    }
}


function mapStateToProps(state) {
	return { 
		toast: state.toast
	};
}
  
const styledApp = withStyles(styles)(UpdateToast);
export default connect(mapStateToProps, actions)(styledApp);