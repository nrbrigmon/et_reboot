import React, { Component } from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import BuildingMixTableRow from './BuildingMixTableRow';

class BuildingMixTable extends Component {

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
                            return <BuildingMixTableRow {...row} {...this.props} key={idx} rowId={idx}/>
                        })
                    }
                    
            </TableBody>
            </Table>
        );
    }
    
}
  
export default BuildingMixTable;