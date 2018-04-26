import React from 'react';
import Snackbar from 'material-ui/Snackbar';

class UpdateToast extends React.Component {

    handleClose = (event, reason) => {
        // console.log(reason);
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };

    render() {;
        // console.log(this.props.toast);
        return (
            <div>
                {/* <Button onClick={this.handleClick}>Open simple snackbar</Button> */}
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.props.toast.open}
                    autoHideDuration={2000}
                    onClose={this.handleClose}
                    SnackbarContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.props.toast.msg}</span>}
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

export default UpdateToast;