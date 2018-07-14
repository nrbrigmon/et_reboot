import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import DevTypeBuildingMixTableRow from './DevTypeBuildingMixTableRow';

class DevTypeBuildingMixTable extends Component {

    render(){
        const { classes } = this.props;
        const { workbook_devtypes } = this.props.devWorkbook;	
        // console.log(this.props.devWorkbook)
        const { library_bldgs } = this.props.devWorkbook.workbook_library;
        return (
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Development Types</TableCell>
                    <TableCell className={classes.header} numeric>Mix Total</TableCell>
                    {
                        library_bldgs.map( (col, idx) => {
                            return <TableCell key={idx} className={classes.header} numeric >{ (col.physicalInfo) ? col.physicalInfo.buildingName : '0'}</TableCell>
                        })
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                    {
                        
                        workbook_devtypes.map( (row, idx) => {
                            return <DevTypeBuildingMixTableRow {...row} {...this.props} key={idx} rowId={idx}/>
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
  
export default DevTypeBuildingMixTable;