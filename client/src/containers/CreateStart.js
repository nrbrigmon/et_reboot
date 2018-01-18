import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';

import AddBldgFromLibraryModal from '../components/create/buildings/modal/AddBldgFromLibraryModal';

import * as shortid from 'shortid';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	},
	paper: {
	  textAlign: 'center',
	},
	button: {
		width: '100%',
		margin: '10px 0 10px 0',
		maxWidth: '180px'
	},
	leftIcon: {
	  marginRight: theme.spacing.unit,
	},
  });

class CreateStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageChoice: 'start',
			myLibrary: [],
			modalOptions: {
				modalOpen: false,
				tab: 'bldg'
			},
			uniqueId: shortid.generate()
		};

		this.handleNavigation = this.handleNavigation.bind(this);
		this.removeItemFromList = this.removeItemFromList.bind(this);
	}

	addBuildingToMyLibrary = (newBldgs) => {
		console.log(newBldgs);

		let oldLib = this.state.myLibrary;
		let newLib = oldLib.concat(newBldgs);
		this.setState({
			myLibrary: newLib,
			modalOptions: {modalOpen: false} 
		})
	}
	
	openBldgLibraryModal = (tabChoice) => {
		console.log(tabChoice);
		this.setState({ 
			modalOptions: 
			{
				modalOpen: true,
				tab: tabChoice
			} 
		});
	};

	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	  
	removeItemFromList = (id) =>{
		let newState = this.state.myLibrary.filter( elem => elem.id !== id )
		this.setState({
			myLibrary: newState
		})
	}
	
	resetList(){
		this.setState({
			myLibrary: []
		})
	}
	
	renderMyLibrary = (lib) => {
		return lib.map((item, idx) => {
			return (
					<ListItem button divider key={idx} onClick={()=>this.handleNavigation('create/edit/'+item.id+'')}>
						<ListItemIcon>
							<Icon >domain</Icon>
						</ListItemIcon>
						<ListItemText primary={item.info.buildingName} secondary={item.info.siteLocation} />
						
						<ListItemSecondaryAction  onClick={()=>this.removeItemFromList(item.id)}>
							<Tooltip id="tooltip-icon" title="Delete">
									<ListItemIcon aria-label="Delete">
									<Icon >delete</Icon>
									</ListItemIcon>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
			);
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
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
								{this.renderMyLibrary(this.state.myLibrary)}
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
				<Grid item sm={2}>
					<div className={classes.button}>
						{/* if you click on either existing libary or building, it
						should open a modal window with a filterable table 
						to choose existing buildings and/or libraries.
						maybe they open a modal but you aview a different
						tab depending on the click?*/}
						
						<Button raised color="primary" className={classes.button} onClick={() => this.openBldgLibraryModal('lib')}>
							<Icon className={classes.leftIcon}>cloud_download</Icon> Load Existing Library
						</Button>
						<Button raised color="primary" className={classes.button} onClick={() => this.openBldgLibraryModal('bldg')}>
							<Icon className={classes.leftIcon}>cloud_download</Icon> Add Existing Building
						</Button>
						<Button raised color="primary" className={classes.button} onClick={()=>this.handleNavigation('create/new/'+this.state.uniqueId+'')}>
							<Icon className={classes.leftIcon}>add_circle</Icon> Create New Building
						</Button>
						<Button raised color="primary" className={classes.button} onClick={()=>this.resetList()}>
							<Icon className={classes.leftIcon}>clear</Icon> Reset/Empty List
						</Button>
					</div>
				</Grid>
				<AddBldgFromLibraryModal 
					buildingSelection={this.addBuildingToMyLibrary}
					modalState={this.state.modalOptions} />
				
			</Grid>
		);
	}
}

export default  withStyles(styles)(CreateStart);
