import React from "react";
import Grid from '@material-ui/core/Grid';

import * as helper from 'utils/_helperMethods';
import Button from '@material-ui/core/Button';

import CloudDownload from '@material-ui/icons/CloudDownload';
import AddCircle from '@material-ui/icons/AddCircle';
import Clear from '@material-ui/icons/Clear';

import Save from '@material-ui/icons/Save';

class BuildingActionSection extends React.Component {

	openSaveLibraryModal = () => {
		let { workbook_library } = this.props.devWorkbook;
		let arrayLength = workbook_library.library_bldgs.length;
		if (arrayLength > 1){
			this.props.openModal('saveLibrary')
		} else {
			alert("You need more than 1 building to save a library.");
		}
	}
	
	newItemInList = (uniqueId) => {
		helper.navigateTo('building/new/'+uniqueId+'/physical-form', this.props);
		this.props.editBuildingPrototype(false);
		// this.props.addBuildingToWorkbook(uniqueId);
	}

	
	resetList = () => {
		this.props.resetMyBuildingLibrary();
	}
	
  render() {
    const { classes } = this.props;
	const { uniqueId } = this.props;
    return (
        <Grid item sm={4} xs={12} className={classes.column}>
            <Grid container 
                alignItems='center'>
                {/* if you click on either existing libary or building, it
                should open a modal window with a filterable table 
                to choose existing buildings and/or libraries.
                maybe they open a modal but you aview a different
                tab depending on the click?*/}
                <Button variant="raised" color="primary" className={classes.button} 
                    onClick={() => this.props.openModal('existingLibrary')}>
                    <CloudDownload className={classes.leftIcon}/>  Load Existing Library
                </Button>
                <Button variant="raised" color="primary" className={classes.button} 
                    onClick={() => this.props.openModal('existingBuildings')}>
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
                
    );
  }
}
export default BuildingActionSection