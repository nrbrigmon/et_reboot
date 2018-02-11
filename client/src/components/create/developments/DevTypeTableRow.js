import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import TextField from 'material-ui/TextField';

import './devCell.css';

class DevTypeTableRow extends Component {
    handleChange = (e, devTypeId) => {
        const targetValue = e.target.value;
        const targetId = e.target.id;
        fetch(this.props.updateDevTypeRow(targetValue, devTypeId, targetId)).then( ()=>{
            console.log('then...')
            this.props.fetchDevTypeTotals(this.props.devTypes);
        });
    } 
    updateDevName = (e) => {
        const targetValue = e.target.value;
        const targetId = e.target.id;
        this.props.updateDevName(targetValue, targetId);
    }
    render(){
        const { cellData } = this.props;
        const { devTypeId } = this.props;
        const { devTypeName } = this.props;
        // const { myLib } = this.props;
        // console.log(cellData)
        // console.log('current props ',this.props);
        return (
            <TableRow>
                <TableCell>
                    <TextField
                        id={devTypeId}
                        placeholder={"Development Type Name"}
                        value={devTypeName}
                        onChange={(e) => this.updateDevName(e) }
                        margin="normal"
                    />
                </TableCell>
                {
                    cellData.map((cell, idx) => {
                        return (
                            <TableCell key={idx} numeric>
                                <TextField
                                    id={cell.bldgId}
                                    placeholder={"0 (%)"}
                                    value={cell.percVal}
                                    onChange={(e) => this.handleChange(e, devTypeId) }
                                    margin="normal"
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

export default connect(mapStateToProps, actions)(DevTypeTableRow);