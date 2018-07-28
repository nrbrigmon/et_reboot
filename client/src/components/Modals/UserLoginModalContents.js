import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from "components/CustomButtons/Button.jsx";
import classnames from 'classnames';

class UserLoginModalContents extends React.Component {

  render() {
	const { classes } = this.props;
	// console.log(this.props);
    return (
	  <Grid 
			container 
			alignItems='center' 
			direction='row' 
		  	justify='center'>
        <Grid item xs={12} className={classes.loginPaper}>
          <TextField
				label="Username"
				// onChange={ this.handleChange }
				margin="dense"
			/>
          <TextField
            label="Password"
            // onChange={ this.handleChange }
            margin="dense"
          />
		  <Button
			  variant="raised" 
			  color="inherit" 
			  className={classnames(classes.loginSignup, classes.cssButtonRoot)}
			  onClick={()=>this.props.loginSelection("profile/sign-up")} >
			  Sign Up
		  </Button>
        </Grid>
        <h4>Login With Social Media</h4>
        <Grid item xs={12} className={classes.loginPaper}>
			<Button
				variant="raised" 
				color="primary" 
				className={classnames(classes.loginGoogle, classes.cssButtonRoot)}
				onClick={()=>this.props.loginSelection("google")} >
				Google
			</Button>
			<Button
				variant="raised"
				color="primary" 
				disabled={true}
				className={classnames(classes.loginTwitter, classes.cssButtonRoot)}
				onClick={()=>this.props.loginSelection("twitter")} >
				Twitter
			</Button>
        </Grid>

      </Grid>

    );
  }
}

export default UserLoginModalContents;
