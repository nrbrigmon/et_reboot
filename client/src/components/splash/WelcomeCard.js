import React, { Component } from 'react';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from '@material-ui/core/Button';
import Typography from 'material-ui/Typography';
import { withRouter} from 'react-router-dom';
import _WelcomeStyles from './_WelcomeStyles';

const styles = theme => (_WelcomeStyles(theme));

class WelcomeCard extends Component {
	handleNavigation = (destination) => {
        // console.log(destination);
		this.props.history.push('/'+destination+'');
	}
	render() {
        const { classes } = this.props;
        // console.log(classes);
		return (
            <Grid item md={4} sm={6} xs={12}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="headline" component="h2">
                            {this.props.headline}
                        </Typography>
                        <Typography component="p">
                            {this.props.content}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="primary" onClick={()=>this.handleNavigation(this.props.actionDestination)}>
                            {this.props.actionText}
                        </Button>
                    </CardActions>
                </Card>
			</Grid>
		);
	}
}
  
export default withStyles(styles)( withRouter(WelcomeCard) );
