import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import Wrapper900 from '../wrappers/Wrapper900';
import { Link } from 'react-router-dom';

import GlobalStyles from '../../styles/GlobalStyles';

const styles = theme => GlobalStyles(theme);


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
									className={classes.fullFormInput}

								/>
								
								<TextField
									defaultValue=""
									label="Email"
									id="bootstrap-email"
									className={classes.fullFormInput}

								/>
							</ListItem>
							<ListItem>
								<TextField
									defaultValue=""								
									label="Message"
									id="bootstrap-msg"
									multiline
									rowsMax="20"
									className={classes.fullFormInput}
								/>
							</ListItem>
							<ListItem>
								<Button variant="raised" color="primary" className={classes.centerButton} 
									onClick={() =>alert("sorry this isn't set up yet, but you can email:\n\nnrbrigmon@gmail.com")}>
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