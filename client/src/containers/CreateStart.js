import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import IconButton from 'material-ui/IconButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';


const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	},
	card: {
		// margin: '10px'
	},
	button: {
		width: '100%',
		margin: '10px 0 10px 0'
	}
  });

class CreateStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageChoice: 'start',
			buildings: []
		};

		this.componentSelection = this.componentSelection.bind(this);
	}
	componentSelection(choice) {
		this.setState({
			pageChoice: choice
		});
	}

	componentDidMount() {
		axios.get('/api/buildings')
		  .then(res => {
			let tempList = []
			res.data.map(obj => tempList.push(obj) );
			this.setState({ buildings: tempList });
		  });
	  }
	renderLibrary(lib) {
		return lib.map((item, idx) => {
			return (
					<ListItem button divider key={idx}>
						<ListItemIcon>
							<Icon >domain</Icon>
						</ListItemIcon>
						<ListItemText primary={item.buildingname} secondary={item.sitelocation} />
					</ListItem>
			);
		});
	}
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	render() {
		const { classes } = this.props;
		return (
			<Grid container
				className={classes.root}
				alignItems='center'
				direction='row'
				justify='center'>
					
				<Grid item xs={12} className={classes.paper}>
					<h2>Step One: Create Your Library</h2>
				</Grid>
				{/* COLUMN #1 */}
				<Grid item sm={8} className={classes.card}>
					<Card className={classes.card}>
						<CardContent>
							<Typography type="headline" component="h3">
								Your Library
							</Typography>
							{ /*
								the proper loading pattern is using a ternary operator like this:
								{ isEmpty ?
										(isFetchingData ? <p>getting data/loading</p> : "empty list")
										: <Building data={arrayData}/>
								}
							*/}
							<List>
								{this.renderLibrary(this.state.buildings)}
							</List>
							
							<CardActions>
								<Button dense color="primary" onClick={()=>this.handleNavigation('create/dev-types')}>
									Move to Step Two
								</Button>	
							</CardActions>
						</CardContent>
					</Card>
				</Grid>
				{/* COLUMN #2 */}
				<Grid item sm={2} 
					className={classes.card}>
					<div className={classes.button}>
						{/* if you click on either existing libary or building, it
						should open a modal window with a filterable table 
						to choose existing buildings and/or libraries.
						maybe they open a modal but you aview a different
						tab depending on the click?*/}
						
						<Button raised color="primary" className={classes.button} onClick={()=>this.handleNavigation('create')}>
							<Icon>add_circle</Icon> Existing Library
						</Button>
						<Button raised color="primary" className={classes.button} onClick={()=>this.handleNavigation('create')}>
							<Icon>add_circle</Icon> Existing Building
						</Button>
						<Button raised color="primary" className={classes.button} onClick={()=>this.handleNavigation('create/edit')}>
							<Icon>add_circle</Icon> NewNew Building
						</Button>
					</div>
				</Grid>
			</Grid>
		);
	}
}

export default  withStyles(styles)(CreateStart);
