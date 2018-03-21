import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { withStyles } from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from 'material-ui/Button';
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
	}
  });

class DevTypeBuildingMix extends Component {
    
    handleNavigation = val => {
		this.props.changePage(val);
    }

	render() {
		const { classes } = this.props;
		
		// console.log(this.props);
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>

				<Grid item xs={12} className={classes.card}>
                    <h2>Step Two: Create Development Type Mix</h2>
                    <Card className={classes.card}>
                        <CardContent>
                            <Typography type="headline" component="h3">
                                Development Types
                            </Typography>
                            
                            <DevTypeBuildingMixTable />
                            
                            <CardActions>
                                <div className={classes.cardAction}>
                                    <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('back')}>
                                        Go Back
                                    </Button>	
                                    <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.props.addNewDevTypeRow(this.props.myLibrary.selected_buildings)}>
                                        Add Row
                                    </Button>	
                                    <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>alert("saved!... later...")}>
                                        Save Progress
                                    </Button>	
                                    <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('attributes')}>
                                        Move to Step Three
                                    </Button>	
                                </div>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
			</Grid>
        );
    }
}
                
function mapStateToProps(state) {  
    return { 
            myLibrary: state.myLibrary,
            devTypes: state.devTypes
       };
}

const styledApp = withStyles(styles)(DevTypeBuildingMix);
export default connect(mapStateToProps, actions)(styledApp);