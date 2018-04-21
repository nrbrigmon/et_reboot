import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Wrapper900 from '../wrappers/Wrapper900';
import { withStyles } from 'material-ui/styles';

const styles = ({
  paper: {
	padding: '0px 20px 20px 20px',
	margin: '40px 20px 20px 20px',
	width: '80%'
  },
  leftIcon: {
	marginRight: '10px',
  },
  formInput: {
	width: '100%',
	margin: '12px'
  },
  button: {
	  margin: '0 auto',
	  maxWidth: '180px',
	  marginTop: '10px',
	  marginBottom: '10px'
  },
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
						<div>
						What to add to a profile page?0px Let's investigate..
						- Name
						- Location
						- Bio
						- Image Url
						- Fun Facts
						- Education
						</div>
						
					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}

export default withStyles(styles)(ProfileStart);