import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';

class UpdateToast extends React.Component {

    handleClose = (event, reason) => {
        // console.log(reason);
        if (reason === 'clickaway') {
            return;
        }
        this.props.closeToast();
    };

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
                autoHideDuration={3000}
                message={<span id="message-id">{this.props.toast.msg}</span>}
                />
                
            </div>
        );
    }
}

export default UpdateToast;