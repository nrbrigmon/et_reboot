import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import TextField from 'material-ui/TextField';

import './devCell.css';

class DevTypeBuildingMixTableRow extends Component {
    handleChange = (e, rowId) => {
        const value = e.target.value;
        const cellId = e.target.id;
        // console.log(targetValue, targetId);
        this.props.updateDevTypeRow(value, rowId, cellId);
    } 
    updateDevName = (e) => {
        const targetValue = e.target.value;
        const targetId = e.target.id;
        this.props.updateDevName(targetValue, targetId);
    }
    getTotal = (cells) => {
        let sum = cells.reduce( (acc, curr, idx) => {
            // console.log(acc, curr, idx);
            if (idx === 1) {
                return Number(acc.percVal) + Number(curr.percVal);
            }
            return Number(acc) + Number(curr.percVal);
        });
        return (<p>{sum}</p>);
    }

    render(){
        const { cellData } = this.props;
        const { uniqueId } = this.props;
        const { devTypeName } = this.props;
        // console.log(cellData);
        // console.log(this.props);
        return (
            <TableRow>
                <TableCell>
                    <TextField
                        id={uniqueId}
                        placeholder={"Development Type Name"}
                        value={devTypeName}
                        onChange={(e) => this.updateDevName(e) }
                        margin="dense"
                        
                    />
                </TableCell>
                <TableCell>
                
                   { this.getTotal(cellData) }
                    
                
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