import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

class UpdateToast extends React.Component {

    handleClose = (event, reason) => {
        // console.log(reason);
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };
        //TESTING
        // componentDidMount(){
        //     this.props.toastMessage("HELLO BRAVE WORLD!")
        // }
    render() {;
        return (
            <div>
                {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
                
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.toast.open}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    autoHideDuration={2000}
                    message={<span id="message-id">{this.props.toast.msg}</span>}
                    action={[
                      <IconButton
                        key="close"
                        aria-label="Close"
                        color="inherit"
                        onClick={this.handleClose}
                      >
                        <CloseIcon />
                      </IconButton>,
                    ]}
                />
                
            </div>
        );
    }
}

export default UpdateToast;