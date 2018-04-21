import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import Paper from 'material-ui/Paper';
import List, { ListItem } from 'material-ui/List';
import Wrapper900 from '../wrappers/Wrapper900';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Send from 'material-ui-icons/Send';

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
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere quam 
						sed pharetra malesuada. Cras non tincidunt erat. Sed scelerisque maximus 
						velit, eu pulvinar diam condimentum id. In sit amet est nulla. Vestibulum 
						sollicitudin justo sit amet congue congue. Ut sit amet ligula non purus 
						aliquam sollicitudin. Ut ut congue lectus, eu tempus magna. 
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
				</Paper>
			</Wrapper900>
		);
	}
}


const styledApp = withStyles(styles)(ContactStart);
export default styledApp;
