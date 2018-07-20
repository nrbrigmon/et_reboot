import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

import BuildingMixTable from './BuildingMixTable';
import * as helper from 'utils/_helperMethods';

class BuildingMixSection extends Component {
	render() {
        const { classes } = this.props;
        const { library_bldgs } = this.props.devWorkbook.workbook_library;
        // console.log(this.props.devWorkbook);
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
                            <BuildingMixTable {...this.props} />
                        </div>
                        <CardActions>
                            <div className={classes.cardAction}>
                                <Button 
                                    className={classes.cardButton} variant="raised" 
                                    color="primary" 
                                    onClick={()=>this.props.addNewDevTypeRow(library_bldgs)} >
                                    Add Row
                                </Button>	
                                <Button 
                                    className={classes.cardButton} variant="raised" 
                                    color="primary" 
                                    onClick={()=>helper.navigateTo('buildings', this.props)} >
                                    Back
                                </Button>	
                                <Button 
                                    className={classes.cardButton} variant="raised" 
                                    color="primary" 
                                    onClick={()=>helper.navigateTo('dev-types/attributes', this.props)} >
                                    Next: Create Attributes
                                </Button>	
                            </div>
                        </CardActions>
                    </CardContent>
                </Card>
            </Grid>
        );
    }
}
                
export default BuildingMixSection;