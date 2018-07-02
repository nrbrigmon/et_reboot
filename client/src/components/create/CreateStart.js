import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import CloudDownload from '@material-ui/icons/CloudDownload';
import AddCircle from '@material-ui/icons/AddCircle';
import Clear from '@material-ui/icons/Clear';
import Domain from '@material-ui/icons/Domain';
import Delete from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';

import AddBldgModal from '../modals/AddBldgModal';
import AddLibraryModal from '../modals/AddLibraryModal';
import SaveBldgLibraryModal from '../modals/SaveBldgLibraryModal';
import UpdateToast from '../modals/UpdateToast';
import Wrapper900 from '../wrappers/Wrapper900';
import * as helper from '../../utils/_helperMethods';

import CreateStyles from '../../styles/CreateStyles';
const styles = theme => CreateStyles(theme);

class CreateStart extends Component {
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
	
	newItemInList = (uniqueId) => {
		helper.navigateTo('create/new/'+uniqueId+'/physical-form', this.props);
		this.props.editBuildingPrototype(false);
	}
	editItemInList = (selection) => {
		let _id = selection.uniqueId;
		helper.navigateTo('create/edit/'+_id+'/physical-form', this.props);
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
					<h2>Create Your Library</h2>
					<Typography component="p">
						To build any development, we need structures on which to draw. This is called our <b>library</b>.
						<br/><br/>
					</Typography>
				</Grid>
				{/* COLUMN #1 */}
				<Grid item sm={8} xs={12} className={classes.column}>
					<Card className={classes.card}>
						<CardContent>
							
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
									<Button 
										className={classes.cardButton} 
										variant="raised" color="primary" 
										onClick={() => helper.navigateTo('create/dev-types/building-mix', this.props)} >
										Next: Development Types
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
							onClick={() => this.openSaveLibraryModal()}>
							<Save className={classes.leftIcon}/> Save Library To Database
						</Button>
						<Button variant="raised" color="primary" className={classes.button} 
							onClick={() => this.resetList()}>
							<Clear className={classes.leftIcon}/> Reset/Empty Library
						</Button>
					</Grid>
				</Grid>

				<AddBldgModal   />
				<AddLibraryModal   />
				<SaveBldgLibraryModal  />
				<UpdateToast {...this.props} /> 
			</Wrapper900>	
		);
	}
}

function mapStateToProps(state) {
	return { 
		uniqueId: state.randomId,
		myLibrary: state.myLibrary,
		availableBldgs: state.availableBldgs,
		toast: state.toast		
	};
}
  
const styledApp = withStyles(styles)(CreateStart);
export default connect(mapStateToProps, actions)(styledApp);