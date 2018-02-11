import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Icon from 'material-ui/Icon';
import List, { ListItem, ListItemIcon, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Tooltip from 'material-ui/Tooltip';

import AddBldgFromLibraryModal from './buildings/modal/AddBldgFromLibraryModal';

import * as shortid from 'shortid';

const styles = theme => ({
	root: {
	  flexGrow: 1,
	  width: '100%'
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
			modalOptions: {
				modalOpen: false,
				tab: 'bldg'
			},
			uniqueId: shortid.generate()
		};

		this.handleNavigation = this.handleNavigation.bind(this);
		this.removeItemFromList = this.removeItemFromList.bind(this);
	}
	componentDidMount(){
		//load all available buildings in the database
		this.props.fetchAllBuildings();
	}
	addBuildingToMyLibrary = (a) => {
		// console.log('dummy: ', a);
		this.setState({
			modalOptions: {modalOpen: false} 
		})
	}
	
	openBldgLibraryModal = (tabChoice) => {
		// console.log(tabChoice);
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
	
	editItemInList = (selection) => {
		let _id = selection.uniqueId;
		this.handleNavigation('create/edit/'+_id+'')
		this.props.editBuildingPrototype(true, selection);
	}
	removeItemFromList = (selection) =>{
		this.props.removeBuildingFromLibrary(selection);
	}
	
	resetList(){
		this.props.resetMyBuildingLibrary();
	}
	
	renderMyLibrary = (lib) => {
		// console.log('lib ',lib);
		return lib.map((item, idx) => {
			let name = item.physicalInfo.buildingName;
			if (name === undefined){
			  name = 'err';
			}
			let siteLocation = item.physicalInfo.siteLocation;
			if (siteLocation === undefined){
			  siteLocation = 'err';
			}
			// console.log(item)
			return (
					<ListItem button divider key={idx} 
						onClick={()=>this.editItemInList(item)}>
						<ListItemIcon>
							<Icon >domain</Icon>
						</ListItemIcon>
						<ListItemText primary={name} secondary={siteLocation}/>
						
						<ListItemSecondaryAction  onClick={()=>this.removeItemFromList(item)}>
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
		const { myLib } = this.props;
		// console.log( myLib );
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
								{this.renderMyLibrary(myLib)}
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
						
						<Button raised color="primary" className={classes.button} 
							onClick={() => this.openBldgLibraryModal('lib')}>
							<Icon className={classes.leftIcon}>cloud_download</Icon> Load Existing Library
						</Button>
						<Button raised color="primary" className={classes.button} 
							onClick={() => this.openBldgLibraryModal('bldg')}>
							<Icon className={classes.leftIcon}>cloud_download</Icon> Add Existing Building
						</Button>
						<Button raised color="primary" className={classes.button} 
							onClick={()=>this.handleNavigation('create/new/'+this.state.uniqueId+'')}>
							<Icon className={classes.leftIcon}>add_circle</Icon> Create New Building
						</Button>
						<Button raised color="primary" className={classes.button} 
							onClick={()=>this.resetList()}>
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

function mapStateToProps(state) {
	  return { myLib: state.myLib };
}
  
const styledApp = withStyles(styles)(CreateStart);
export default connect(mapStateToProps, actions)(styledApp);