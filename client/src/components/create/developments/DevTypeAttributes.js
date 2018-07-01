import React, { Component } from 'react';
import { withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import columns from './inputs/attributeColumns';
import DevTypeAttributesTable from './DevTypeAttributesTable';

import _DevTypeStyles from '../../../styles/DevTypeStyles';

const styles = theme => _DevTypeStyles(theme);
  
class DevTypeAttributes extends Component {


	handleNavigation = (destination) => {
		this.props.history.push('/'+destination+'');
	}
	render() {
		const { classes } = this.props;
		const { section1,section2,section3 } = columns;

		return (
			<Grid item sm={12} >
				<h2>Create Development Type Attributes</h2>
				
                <Typography component="p">
                    This section is for defining the characteristics of these development types. Like block size or street size.
                    <br/><br/>
                </Typography>
					<Card >
					<CardContent>
						<Typography type="headline" component="h3">
							Block Size
						</Typography>
						<div className={classes.tableContainer}>
							<DevTypeAttributesTable { ...this.props} columns={section1}/>
						</div>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Street Characteristics
						</Typography>
						<div className={classes.tableContainer}>
							<DevTypeAttributesTable { ...this.props} columns={section2}/>
						</div>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Public Space Dedication
						</Typography>
						<div className={classes.tableContainer}>
							<DevTypeAttributesTable { ...this.props} columns={section3}/>
						</div>
						<br />
						<br />

						<CardActions>
							<div className={classes.cardAction}>
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('create/dev-types/building-mix')}>
									Back
								</Button>	
                                {/* <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('create/dev-types/review')}>
									Review 
								</Button>	 */}
                                <Button  className={classes.cardButton} variant="raised" color="primary" onClick={()=>this.handleNavigation('map')}>
                                    Next: Mapping
                                </Button>	
							</div>
						</CardActions>
					</CardContent>
				</Card>
			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		devWorkbook: state.devWorkbook
		};
}
  
const styledApp = withStyles(styles)(DevTypeAttributes);
export default withRouter(connect(mapStateToProps, actions)(styledApp));