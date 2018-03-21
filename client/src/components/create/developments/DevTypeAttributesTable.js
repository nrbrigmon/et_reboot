import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';


import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';

import TextField from 'material-ui/TextField';


class DevTypeAttributesTable extends Component {

    myHandleChange(e, devId){
        // (value, rowId, attrId)
        this.props.updateDevTypeAttr(e.target.value, devId, e.target.id);
        // editDevelopmentTypeAttr
    }

    render(){
        const { classes } = this.props;
        const devTypes = this.props.devWorkbook.workbook_devtypes;
        const { columns } = this.props;
        return (
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                    <TableCell>Development Types</TableCell>
                    { 					
                        ( 
                            !(columns) ? '' :
                            columns.map( (col, idx) => {
                                // console.log(col);
                                return <TableCell style={{textAlign:'right'}} key={idx}> {col.name}</TableCell>
                            })
                        )
                    }			
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    devTypes.map( (row, idx) => {
                        return (
                            <TableRow key={idx}>
                                <TableCell>
                                    { 
                                        ( !(row.devTypeName) ? '---' : row.devTypeName )
                                    }
                                </TableCell>
                            { 					
                                ( !(columns) ? '' :
                                columns.map( (col, idx) => {
                                    //   console.log(col);
                                    return (	
                                        <TableCell key={idx} numeric>
                                            <TextField
                                                id={col.attr}
                                                placeholder={col.placeholder}
                                                value={row[col.attr]}
                                                onChange={(e) => this.myHandleChange(e, row.uniqueId) }
                                                margin="normal"
                                            />
                                        </TableCell>
                                    )
                                })
                                )
                            }
                            </TableRow>
                        )
                    })
                }
            </TableBody>
            </Table>
        );
    }
}

function mapStateToProps(state) {  
    return { 
          devWorkbook: state.devWorkbook
       };
}

export default connect(mapStateToProps, actions)(DevTypeAttributesTable);