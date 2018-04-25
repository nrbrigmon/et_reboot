import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

import TextField from 'material-ui/TextField';
import PercentStatusCheck from '../../_PercentStatusCheck';

import { InputAdornment } from 'material-ui/Input';
import IconButton from 'material-ui/IconButton';
import Delete from 'material-ui-icons/Delete';
import './devCell.css';

class DevTypeBuildingMixTableRow extends Component {
    handleChange = (e, rowId) => {
        const value = e.target.value;
        const cellId = e.target.id;
        // console.log(targetValue, targetId);
        this.props.updateDevTypeRow(value, rowId, cellId);
    } 
    updateDevName = (e, uniqueId) => {
        // const targetValue = e.target.value;
        // const targetId = e.target.id;
        // this.props.updateDevName(targetValue, targetId);
        // console.log(e);
        this.props.updateDevTypeAttr(e.target.value, e.target.id, "devTypeName");
    }
    getTotal = (cells) => {
        // console.log(cells);
        let sum = cells.reduce( (acc, curr, idx) => {
            // console.log(acc, curr, idx);
            if (idx === 1) {
                return Number(acc.percVal) + Number(curr.percVal);
            }
            return Number(acc) + Number(curr.percVal);
        });

        return [sum * 0.01]; //PercentStatusCheck requires an array, also we need percent values
    }
	removeDevType = (devTypeId) =>{
		this.props.removeDevTypeFromWorkbook(devTypeId);
	}
    render(){
        const { cellData } = this.props;
        const { uniqueId } = this.props;
        const { devTypeName } = this.props;
        const { classes } = this.props
        let err  = cellData.length === 0 || cellData === undefined ? true : false;

        return (
            <TableRow>
                <TableCell className={classes.devTypes}>
                    <TextField
                        id={uniqueId}
                        placeholder={"Development Type Name"}
                        value={devTypeName}
                        onChange={(e) => this.updateDevName(e, uniqueId) }
                        margin="dense"
                        padding="dense"
                        className={classes.cell}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton className={classes.delete} onClick={()=>this.removeDevType(uniqueId)} aria-label="Delete">
                                    <Delete />
                                </IconButton>
                              </InputAdornment>
                            )}}
                    />
                </TableCell>
                <TableCell  className={classes.cell}>
                
                   { !err ? PercentStatusCheck( this.getTotal(cellData)) : <p></p> }
                    
                
                </TableCell>
                {
                    !err ? cellData.map((cell, idx) => {
                        return (
                            <TableCell key={idx} numeric className={classes.cell}>
                                <TextField
                                    id={cell.bldgId}
                                    placeholder={"0%"}
                                    value={cell.percVal}
                                    onChange={(e) => this.handleChange(e, uniqueId) }
                                    margin="dense"
                                    padding="dense"     
                                    className={classes.field}                            
                                />
                            </TableCell>
                        )
                    }) : <td><p></p></td>
                }
            </TableRow>
        )
    }
}

export default DevTypeBuildingMixTableRow;