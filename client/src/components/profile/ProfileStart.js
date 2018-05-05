import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Wrapper900 from '../wrappers/Wrapper900';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Message from 'material-ui-icons/Message';
import Button from 'material-ui/Button';
import Edit from 'material-ui-icons/Edit';

const styles = ({
  paper: {
		padding: '0px 20px 20px 20px',
		margin: '40px 20px 20px 20px',
		width: '80%'
  },
  avatar: {
    height: '80px',
		width: '80px',
		margin: '0 auto',
		marginBottom: '20px'
  },
  bio: {
		margin: '20px',
		padding: '20px'
	},
  leftIcon: {
		marginRight: '10px',
  },
  button: {
	  margin: '0 auto',
	  maxWidth: '180px',
	  marginTop: '10px',
	  marginBottom: '10px'
  }
	
});


class ProfileStart extends Component {

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
						<h2>Profile</h2>
					</Grid>

					<Grid item xs={12}>
						<Avatar className={classes.avatar}>
							img
						</Avatar>
						<Typography className={classes.location} color="textSecondary">
							name | location
						</Typography>
						<Typography component="p" className={classes.bio}>In sit amet est nulla. Vestibulum 
							sollicitudin justo sit amet congue congue. Ut sit amet ligula non purus 
							aliquam sollicitudin. Ut ut congue lectus, eu tempus magna. 
						</Typography>
						
						{/* if this is your profile show edit ELSE message */ }
						<Button variant="raised" color="primary" className={classes.button} 
									onClick={() =>console.log("HELLO")}>
							<Message  className={classes.leftIcon}/> Message
						</Button>
						<Button variant="raised" color="primary" className={classes.button} 
									onClick={() =>console.log("HELLO")}>
							<Edit  className={classes.leftIcon}/> Edit Profile
						</Button>
					</Grid>

				</Paper>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(ProfileStart);