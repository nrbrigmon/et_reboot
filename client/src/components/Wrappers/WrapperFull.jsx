import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
	root: {
		flexGrow: 1,
		// alignItems: 'center',
		marginTop: '60px',
		marginBottom: '30px',
		width: '100%',
		margin: '0px',
		background: 'white',
		backgroundColor: 'white',
		textAlign: 'center'
	}
  });

class WrapperFull extends Component {
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
                    
                    {children}

			</Grid>
		);
	}
}

export default withStyles(styles)(WrapperFull);