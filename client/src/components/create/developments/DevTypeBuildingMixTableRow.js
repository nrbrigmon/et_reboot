import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import TextField from 'material-ui/TextField';

import PercentStatusCheck from '../../_PercentStatusCheck';

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
        console.log(cells);
        let sum = cells.reduce( (acc, curr, idx) => {
            // console.log(acc, curr, idx);
            if (idx === 1) {
                return Number(acc.percVal) + Number(curr.percVal);
            }
            return Number(acc) + Number(curr.percVal);
        });

        return [sum * 0.01]; //PercentStatusCheck requires an array, also we need percent values
    }

    render(){
        const { cellData } = this.props;
        const { uniqueId } = this.props;
        const { devTypeName } = this.props;
        // console.log(cellData);
        // console.log(this.props); 
        return (
            <TableRow>
                <TableCell style={{width:'300px'}}>
                    <TextField
                        id={uniqueId}
                        placeholder={"Development Type Name"}
                        value={devTypeName}
                        onChange={(e) => this.updateDevName(e, uniqueId) }
                        margin="dense"
                        padding="dense"
                    />
                </TableCell>
                <TableCell>
                
                   { PercentStatusCheck( this.getTotal(cellData)) }
                    
                
                </TableCell>
                {
                    cellData.map((cell, idx) => {
                        return (
                            <TableCell key={idx} numeric>
                                <TextField
                                    id={cell.bldgId}
                                    placeholder={"0%"}
                                    value={cell.percVal}
                                    onChange={(e) => this.handleChange(e, uniqueId) }
                                    margin="dense"
                                    padding="dense"                                    
                                />
                            </TableCell>
                        )
                    })
                }
            </TableRow>
        )
    }
}

function mapStateToProps(state) {  
    return { 
            // myLib: state.sample,
          devTypes: state.devTypes
       };
}

export default connect(mapStateToProps, actions)(DevTypeBuildingMixTableRow);