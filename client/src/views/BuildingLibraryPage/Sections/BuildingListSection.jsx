import React from "react";
import Grid from '@material-ui/core/Grid';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Tooltip from '@material-ui/core/Tooltip';
import Domain from '@material-ui/icons/Domain';
import Delete from '@material-ui/icons/Delete';
import * as helper from 'utils/_helperMethods';

class BuildingListSection extends React.Component {
    editItemInList = (selection) => {
		let _id = selection.uniqueId;
		helper.navigateTo('buildings/edit/'+_id+'/physical-form', this.props);
		this.props.editBuildingPrototype(true, selection);
	}

	removeItemFromList = (uniqueId) =>{
		this.props.removeBuildingFromLibrary(uniqueId);
    }
    
    renderLibraryBldgs = (props) => {
        let { library_bldgs } = props.devWorkbook.workbook_library;
		let { classes } = props;
		if (library_bldgs){
			return library_bldgs.map((item, idx) => {
				let name = item.physicalInfo.buildingName;
				let { siteLocation } = item.physicalInfo;
				let { uniqueId } = item;
				if (name === undefined){
					name = 'err';
				}
				if (siteLocation === undefined){
					siteLocation = 'err';
				}
				// console.log(item)
				return (
					<ListItem button divider key={idx} className={classes.libraryItem}
						onClick={()=>this.editItemInList(item)}>
						<ListItemIcon>
							<Domain />
						</ListItemIcon>
						<ListItemText primary={name} secondary={siteLocation}/>
						
						<ListItemSecondaryAction  onClick={()=>this.removeItemFromList(uniqueId)}>
							<Tooltip id="tooltip-icon" title="Delete">
									<ListItemIcon aria-label="Delete">
										<Delete />
									</ListItemIcon>
							</Tooltip>
						</ListItemSecondaryAction>
					</ListItem>
				);
			});
		} else {
			
		}
    }
    
  render() {
    const { classes } = this.props;
    return (
        <Grid item sm={8} xs={12} className={classes.column}>

            { /*
                the proper loading pattern is using a ternary operator like this:
                { isEmpty ?
                        (isFetchingData ? <p>getting data/loading</p> : "empty list")
                        : <Building data={arrayData}/>
                }
            */}
            <List className={classes.libraryWrapper}>
                {this.renderLibraryBldgs(this.props)}
            </List>

        </Grid>
                
    );
  }
}
export default BuildingListSection