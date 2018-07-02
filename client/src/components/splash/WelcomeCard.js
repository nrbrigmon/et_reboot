import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import _WelcomeStyles from '../../styles/WelcomeStyles';
import * as helper from '../../utils/_helperMethods';

const styles = theme => _WelcomeStyles(theme);

class WelcomeCard extends Component {

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
                        <Button size="small" color="primary" 
						onClick={()=>helper.navigateTo(this.props.actionDestination, this.props)} >
                            {this.props.actionText}
                        </Button>
                    </CardActions>
                </Card>
			</Grid>
		);
	}
}
  
export default withStyles(styles)( withRouter(WelcomeCard) );
