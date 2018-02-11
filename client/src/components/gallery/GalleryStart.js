import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	  width: '100%',
	  backgroundColor: theme.palette.background.paper
	},
	paper: {
	  padding: '0px 20px 20px 20px',
	  margin: '40px 20px 20px 20px',
	  width: '80%'
	}
  });

class GalleryStart extends Component {
	render() {
		const { classes } = this.props;
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>
				<Paper className={classes.paper}>
					<Grid item xs={12}>
						<h2>Welcome to the Gallery!</h2>
					</Grid>
					
					<Grid item xs={12}>
						<div>
							<List>
								<ListItem>
									<ListItemText primary="Explore Buildings" />
								</ListItem>
								<ListItem>						
									<ListItemText primary="Explore Sites" />
								</ListItem>
								<ListItem>						
									<ListItemText primary="Download Data" />
								</ListItem>
							</List>
						</div>
					</Grid>

					<Grid item xs={12}>
						<Link className="waves-effect waves-light btn" to="/">
							Back
						</Link>
					</Grid>
				</Paper>
			</Grid>
		);
	}
}

const styledApp = withStyles(styles)(GalleryStart);
export default styledApp;