import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import TextField from '@material-ui/core/TextField';
import Delete from '@material-ui/icons/Delete';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import PercentStatusCheck from 'utils/_PercentStatusCheck';
import 'styles/devCell.css';

class BuildingMixTableRow extends Component {
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
        // console.log(cells)
        if (cells.length === 1){
            return [Number(cells[0].percVal) * 0.01]
        } else {
            let sum = cells.reduce( (acc, curr, idx) => {
                // console.log(acc, curr, idx);
                if (idx === 1) {
                    return Number(acc.percVal) + Number(curr.percVal);
                }
                return Number(acc) + Number(curr.percVal);
            });
    
            return [sum * 0.01]; //PercentStatusCheck requires an array, also we need percent values
        }
    }
	removeDevType = (devTypeId) =>{
		this.props.removeDevTypeFromWorkbook(devTypeId);
	}
    render(){
        let { cellData, uniqueId, devTypeName, classes } = this.props;
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
                        className={classes.cell}
                        InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <IconButton 
                                    className={classes.delete} 
                                    onClick={()=>this.removeDevType(uniqueId)} 
                                    aria-label="Delete">
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

export default BuildingMixTableRow;