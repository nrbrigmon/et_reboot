import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { withStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
// import * as helper from '../utils/_helperMethods';

import NotFoundStyles from '../styles/NotFoundStyles';
const styles = theme => NotFoundStyles(theme);

/** NEED TO
 * REDO THIS PAGE
 * 
 * 
 * 
 * 
 * 
 * / */

 class NotFound404 extends Component {
    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
      };
    render() {
        // console.log(this.props.toast);
        let { classes } = this.props;
        return (
            <Grid
                container
                spacing={16}
                alignItems={this.state.alignItems}
                direction={this.state.direction}
                justify={this.state.justify}
            >
                <Grid item>
                   <div>
                    <Card className={classes.card}>
                        <CardContent>
                        <Typography className={classes.title}
                            color="textSecondary">
                            Page Not Found
                        </Typography>
                        <Typography className={classes.header} 
                            variant="headline" component="h2">
                            404
                        </Typography>
                        <Typography component="p">
                            Something went wrong here... :/
                        </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button 
                                variant="raised" color="primary" 
                                size="small"
                                onClick={()=>helper.navigateTo('', this.props)}
                                >Go To Homepage</Button> */}
                        </CardActions>
                    </Card>
                    </div>
                
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles)(NotFound404);
