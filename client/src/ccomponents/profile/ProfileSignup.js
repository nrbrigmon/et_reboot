import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import Wrapper900 from '../wrappers/Wrapper900';
// import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import Message from '@material-ui/icons/Message';
import Button from '@material-ui/core/Button';
// import Edit from '@material-ui/icons/Edit';
import ProfileStyles from '../../styles/ProfileStyles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ProfileStyles(theme);

class ProfileSignup extends Component {
	signUp = () => {
		this.props.signUpNewUser({username:"nate@aol.com", password: "bahbah"})
	}
	render() {
		const { classes } = this.props;
		/**  
		 * Need logic if not logged in show prompt or thing 
		 * 
		 * **/
		return (
			<Wrapper900>
				<Paper className={classes.paper}>
					
					<Grid item xs={12}>
						<h2>Welcome!</h2>
					</Grid>

					<Grid item xs={12}>
						<Avatar className={classes.avatar}>
							img
						</Avatar>
							<div>
								<TextField
								name="Name"
								label="Name" 
								margin="dense" 
								className={classes.formInputs}/> 
							</div>
							<div>
								<TextField
								name="E-mail"
								label="E-mail" 
								margin="dense" 
								className={classes.formInputs}/> 
							</div>
							<div>
								<TextField 
								name="Location"
								label="Location" 
								margin="dense" 
								className={classes.formInputs}/>
							</div>
							<div>
								<TextField 
								name="Bio" 
								label="Bio" 
								margin="dense" 
          						multiline 
								className={classes.formInputs}/>
							</div>
						
						{/* if this is your profile show edit ELSE message */ }
						{/* <Button variant="raised" color="primary" className={classes.button} 
									onClick={() =>console.log("HELLO")}>
							<Message  className={classes.leftIcon}/> Message
						</Button> */}
						<div>
							<Button variant="raised" 
								color="primary" className={classes.button} 
								onClick={() => this.signUp()}>
									Sign Up
							</Button>
							
							<Button variant="raised" 
								color="secondary" className={classes.button} 
								onClick={() =>console.log("HELLO")}>
									Cancel
							</Button>
						</div>
						<p>Stay tuned for updates as we make changes!</p>
					</Grid>

				</Paper>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(connect(null, actions)(ProfileSignup));