import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import DevTypeBuildingMixTableRow from './DevTypeBuildingMixTableRow';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		padding: '20px'
	},
	table: {
	  minWidth: 700,
	},
	card: {
		padding: '20px'
	},
	cardAction: {
		margin: '0 auto'
	}
  });

class DevTypeBuildingMixTable extends Component {

    render(){

        const { classes } = this.props;
        const devTypes = this.props.devWorkbook.workbook_devtypes;	
        const selectedBldgs = this.props.myLibrary.selected_buildings;
        return (
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Development Types</TableCell>
                    <TableCell>Mix Total</TableCell>
                    {
                        selectedBldgs.map( (col, idx) => {
                    
                            return <TableCell key={idx} numeric> { (col.physicalInfo) ? col.physicalInfo.buildingName : '0'} </TableCell>
                        })
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        
                        devTypes.map( (row, idx) => {
                            return <DevTypeBuildingMixTableRow {...row} key={idx} rowId={idx}/>
                        })
                    }
                    
            </TableBody>
            {/* <TableFooter>
                    <TableRow>
                        <TableCell>Totals</TableCell>
                        {
                            devPercTotals.map((n, idx) => {
                                // console.log(n);
                                return <TableCell key={idx} numeric> {n.totals} </TableCell>
                            })
                        }
                    </TableRow>
            </TableFooter> */}
            </Table>
        );
    }
    
}
  

function mapStateToProps(state) {  
    return { 
            // myLib: state.myLib,
            devWorkbook: state.devWorkbook,
			myLibrary: state.myLibrary
            // devPercTotals: state.devPercTotals
       };
}

const styledApp = withStyles(styles)(DevTypeBuildingMixTable);
export default connect(mapStateToProps, actions)(styledApp);