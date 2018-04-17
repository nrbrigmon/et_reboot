import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

const styles = theme => ({
	root: {
		flexGrow: 1,
		// alignItems: 'center',
		width: '100%',
		margin: '0px'
	},
	wrapper: {
		maxWidth: '900px',
		background: 'white',
		backgroundColor: 'white'
	},
	sectionHeader: {
		marginTop: '60px',
		marginBottom: '30px',
		textAlign: 'center'
	}
  });

class Wrapper900 extends Component {
	componentDidMount(){
		window.scrollTo(0, 0)
	}
	render() {
		const { classes, children } = this.props;
		return (
			<Grid 
				container
				justify="center"
				className={classes.root}
				spacing={16}>
				<Grid item xs={12} className={classes.wrapper}>
					<Grid 
						container
						className={classes.sectionHeader}
						justify="center">
							{children}
					</Grid>
				</Grid>
			</Grid>
		);
	}
}

const styledApp = withStyles(styles)(Wrapper900);
export default styledApp;