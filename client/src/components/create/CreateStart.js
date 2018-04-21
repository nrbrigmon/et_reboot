import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withStyles } from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from 'material-ui/List';

import CloudDownload from 'material-ui-icons/CloudDownload';
import AddCircle from 'material-ui-icons/AddCircle';
import Clear from 'material-ui-icons/Clear';
import Domain from 'material-ui-icons/Domain';
import Delete from 'material-ui-icons/Delete';

import AddBldgModal from './buildings/modal/AddBldgModal';
import AddLibraryModal from './buildings/modal/AddLibraryModal';
import SaveBldgLibraryModal from './buildings/modal/SaveBldgLibraryModal';
import UpdateToast from '../UpdateToast';
import Wrapper900 from '../wrappers/Wrapper900';

const styles = theme => ({
	column: {
		margin: '0 auto'
	},
	button: {
		width: '100%',
		margin: '0 auto',
		maxWidth: '180px',
		marginTop: '10px',
		marginBottom: '10px'
	},
	leftIcon: {
	  marginRight: '10px',
	},
	libraryWrapper: {
		minHeight: '300px'
	},
	cardAction: {
		margin: '0 auto'
	},
	cardButton: {
		margin: '0 1px 0 1px'
	}
  });

class CreateStart extends Component {
	constructor(props) {
		super(props);
		this.handleNavigation = this.handleNavigation.bind(this);
		this.removeItemFromList = this.removeItemFromList.bind(this);
	}
	componentWillMount(){
		//load all available buildings in the database
		if (this.props.availableBldgs.length === 0) {
			this.props.fetchAllBuildings();
			this.props.fetchAllBuildingLibraries();
		}	
		this.props.fetchRandomId();
	}
	
	openSaveLibraryModal = () => {
		let arrayLength = this.props.myLibrary.selected_buildings.length;
		if (arrayLength > 1){
			this.props.openModal('saveLibrary')
		} else {
			alert("You need more than 1 building to save a library.");
		}
	}
	
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	newItemInList = (uniqueId) => {
		this.handleNavigation('create/new/'+uniqueId+'/physical-form');
		this.props.editBuildingPrototype(false);
	}
	editItemInList = (selection) => {
		let _id = selection.uniqueId;
		this.handleNavigation('create/edit/'+_id+'/physical-form')
		this.props.editBuildingPrototype(true, selection);
	}

	removeItemFromList = (bldgId) =>{
		this.props.removeBuildingFromLibrary(bldgId);
	}
	
	resetList = () => {
		this.props.resetMyBuildingLibrary();
	}
	
	renderMyLibrary = (selectedBldgs) => {

		return selectedBldgs.map((item, idx) => {
			let name = item.physicalInfo.buildingName;
			let siteLocation = item.physicalInfo.siteLocation;
			let bldgId = item.uniqueId;
			if (name === undefined){
			  name = 'err';
			}
			if (siteLocation === undefined){
			  siteLocation = 'err';
			}
			// console.log(item)
			return (
				<ListItem button divider key={idx} 
					onClick={()=>this.editItemInList(item)}>
					<ListItemIcon>
						<Domain />
					</ListItemIcon>
					<ListItemText primary={name} secondary={siteLocation}/>
					
					<ListItemSecondaryAction  onClick={()=>this.removeItemFromList(bldgId)}>
						<Tooltip id="tooltip-icon" title="Delete">
								<ListItemIcon aria-label="Delete">
									<Delete />
								</ListItemIcon>
						</Tooltip>
					</ListItemSecondaryAction>
				</ListItem>
			);
		});
	}

	render() {
		const { classes } = this.props;
		const { uniqueId } = this.props;
		return (
			<Wrapper900>
				<Grid item xs={12}>
					<h2>Step One: Create Your Library</h2>
				</Grid>
				{/* COLUMN #1 */}
				<Grid item sm={8} xs={12} className={classes.column}>
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
							<List className={classes.libraryWrapper}>
								{this.renderMyLibrary(this.props.myLibrary.selected_buildings)}
							</List>
							
							<CardActions >
								<div className={classes.cardAction}>
									<Button className={classes.cardButton} variant="raised" color="primary" onClick={() => this.openSaveLibraryModal()}>
										Save Library
									</Button>
									<Button className={classes.cardButton} variant="raised" color="primary" onClick={() => this.handleNavigation('create/dev-types')}>
										Move to Step Two
									</Button>	
								</div>
							</CardActions>
						</CardContent>
					</Card>
				</Grid>
				{/* COLUMN #2 */}
				<Grid item sm={4} xs={12} className={classes.column}>
					<Grid container 
						alignItems='center'>
						{/* if you click on either existing libary or building, it
						should open a modal window with a filterable table 
						to choose existing buildings and/or libraries.
						maybe they open a modal but you aview a different
						tab depending on the click?*/}
						
						<Button variant="raised" color="primary" className={classes.button} 
							onClick={() => this.props.openModal('library')}>
							<CloudDownload className={classes.leftIcon}/>  Load Existing Library
						</Button>
						<Button variant="raised" color="primary" className={classes.button} 
							onClick={() => this.props.openModal('buildings')}>
							<CloudDownload className={classes.leftIcon}/>  Add Existing Building
						</Button>
						<Button variant="raised" color="primary" className={classes.button} 
							onClick={() => this.newItemInList(uniqueId)}>
							<AddCircle className={classes.leftIcon}/> Create New Building
						</Button>
						<Button variant="raised" color="primary" className={classes.button} 
							onClick={() => this.resetList()}>
							<Clear className={classes.leftIcon}/> Reset/Empty List
						</Button>
					</Grid>
				</Grid>

				<AddBldgModal   />
				<AddLibraryModal   />
				<SaveBldgLibraryModal  />
				<UpdateToast />		
			</Wrapper900>	
		);
	}
}

function mapStateToProps(state) {
	return { 
		uniqueId: state.randomId,
		myLibrary: state.myLibrary,
		availableBldgs: state.availableBldgs
	};
}
  
const styledApp = withStyles(styles)(CreateStart);
export default connect(mapStateToProps, actions)(styledApp);