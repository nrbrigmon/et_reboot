import React, { Component } from 'react';
import Spinner from 'react-spinkit';

import Grid from '@material-ui/core/Grid';
class LoadingComponent extends Component {
    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
      };
    render() {
        // console.log(this.props.toast);
        return (
            <Grid
                container
                spacing={16}
                alignItems={this.state.alignItems}
                direction={this.state.direction}
                justify={this.state.justify}
            >
                <Grid item style={{'marginTop': '60px'}}>
                    <Spinner name="ball-spin-fade-loader" fadeIn="none" color="steelblue" />
                </Grid>
            </Grid>
        );
    }
}

export default LoadingComponent;
