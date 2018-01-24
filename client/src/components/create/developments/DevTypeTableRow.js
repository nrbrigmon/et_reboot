import React, { Component } from 'react';
import { TableCell, TableRow } from 'material-ui/Table';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

class DevTypeTableRow extends Component {
    handleChange = (e, row) => {
        const value = e.target.value;
        const cell = e.target.id;
        fetch(this.props.updateDevTypeRow(value, row, cell)).then( ()=>{
            console.log('then...')
            this.props.fetchDevTypeTotals(this.props.devTypes);
        });
    } 
    render(){
        const { myLib } = this.props;
        const { cellData } = this.props;
        const { devTypeId } = this.props;
        // console.log(cellData)
        // console.log(this.props.devTypes);
        return (
            <TableRow>
                <TableCell>Input a name </TableCell>
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
            myLib: state.sample,
          devTypes: state.devTypes
       };
}

export default connect(mapStateToProps, actions)(DevTypeTableRow);