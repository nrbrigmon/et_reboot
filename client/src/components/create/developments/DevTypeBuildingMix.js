import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from '@material-ui/core/Button';
import Typography from 'material-ui/Typography';

import DevTypeBuildingMixTable from './DevTypeBuildingMixTable';


const styles = theme => ({
	card: {
		padding: '20px'
	},
	cardAction: {
		margin: '0 auto'
	},
	cardButton: {
		margin: '0 1px 0 1px'
    },
    tableContainer: {
        overflowY: 'hidden'
    },
	table: {
	  minWidth: 700,
	},
    header: {
        textAlign: 'right',
        padding: '5px'
    },
    cell: {
      padding: '5px 8px',
    },
    field: {
        width: '90px'
    },
    devTypes: {
        width: '300px',
        padding: '5px'
    },
    delete: {
        margin: '0px 5px 5px 0px'
    }
  });

class DevTypeBuildingMix extends Component {
    
	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}

	render() {
		const { classes } = this.props;
		
		// console.log(this.props);
		return (
            <Grid item xs={12}  >
                <h2>Create Development Type Mix</h2>
                
                <Typography component="p">
                    The next step is to mix those buildings from our library into <b>Development Types</b>. It's kind of like creating new zoning standards by defining what buildings are permitted.
                    <br/><br/>
                </Typography>
                <Card>
                    <CardContent>
                        <Typography type="headline" component="h3">
                            Development Types
                        </Typography>
                        <div className={classes.tableContainer}>
                            <DevTypeBuildingMixTable {...this.props} />
                        </div>
                        <CardActions>
                            <div className={classes.cardAction}>
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.props.addNewDevTypeRow(this.props.myLibrary.selected_buildings)}>
                                    Add Row
                                </Button>	
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('create')}>
                                    Back
                                </Button>	
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('create/dev-types/attributes')}>
                                    Next: Create Attributes
                                </Button>	
                                {/* <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('create/dev-types/review')}>
                                    Review
                                </Button>	
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('map')}>
                                    Map
                                </Button>	 */}
                            </div>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
                
function mapStateToProps(state) {  
    return { 
            myLibrary: state.myLibrary,
            devTypes: state.devTypes,
            devWorkbook: state.devWorkbook
       };
}

const styledApp = withStyles(styles)(DevTypeBuildingMix);
export default withRouter(connect(mapStateToProps, actions)(styledApp));