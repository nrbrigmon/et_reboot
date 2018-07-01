import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import Paper from '@material-ui/core/Paper';
import List, { ListItem } from 'material-ui/List';
import Wrapper900 from '../wrappers/Wrapper900';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import { Link } from 'react-router-dom';

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


class ContactStart extends Component {

	render() {
		const { classes } = this.props;
		return (
			<Wrapper900>
				<Paper className={classes.paper}>
					
					<Grid item xs={12}>
						<h2>Contact</h2>
					</Grid>

					<Grid item xs={12}>
						<div>
						Drop a line and let us know what you think.
						</div>
						<List>
							<ListItem>
								<TextField
									defaultValue=""
									label="Name"
									id="bootstrap-name"
									className={classes.formInput}

								/>
								
								<TextField
									defaultValue=""
									label="Email"
									id="bootstrap-email"
									className={classes.formInput}

								/>
							</ListItem>
							<ListItem>
								<TextField
									defaultValue=""								
									label="Message"
									id="bootstrap-msg"
									multiline
									rowsMax="20"
									className={classes.formInput}
								/>
							</ListItem>
							<ListItem>
								<Button variant="raised" color="primary" className={classes.button} 
									onClick={() =>console.log("HELLO")}>
									<Send  className={classes.leftIcon}/> Send
								</Button>
							</ListItem>
						</List>
					</Grid>
					<Grid item xs={12}>
						<Link className="waves-effect waves-light btn" to="/">
							Back to Homepage
						</Link>
					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}


export default withStyles(styles)(ContactStart);