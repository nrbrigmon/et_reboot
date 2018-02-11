import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';

import Table, { TableBody, TableCell, TableHead, TableFooter, TableRow } from 'material-ui/Table';
import Card, { CardActions, CardContent } from 'material-ui/Card';

import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import DevTypeTableRow from './DevTypeTableRow';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		marginTop: theme.spacing.unit * 3,
		overflowX: 'auto',
		padding: '20px'
	},
	table: {
	  minWidth: 700,
	},
	card: {
		padding: '20px'
	}
  });


function BasicTable(props) {
	const { classes } = props;
	const { myLib } = props;
	const { devTypes } = props;
	const { devPercTotals } = props;
	// console.log(devPercTotals);
	console.log('basic table dev totals: ',devPercTotals);
	return (
		<Table className={classes.table}>
		  <TableHead>
			<TableRow>
				<TableCell>Development Types</TableCell>
				{
					myLib.map( (col, idx) => {
				
						return <TableCell key={idx} numeric> { (col.physicalInfo) ? col.physicalInfo.buildingName : '0'} </TableCell>
					})
				}
			</TableRow>
		  </TableHead>
		  <TableBody>
				{
					
					devTypes.map( (row, idx) => {
						return <DevTypeTableRow {...row} key={idx} rowId={idx}/>
					})
				}
			  	
		  </TableBody>
		  <TableFooter>
			  	<TableRow>
					<TableCell>Totals</TableCell>
					{
						devPercTotals.map((n, idx) => {
							// console.log(n);
							return <TableCell key={idx} numeric> {n.totals} </TableCell>
						})
					}
				</TableRow>
		  </TableFooter>
		</Table>
	);
  }
  ///sampledata
class DevTypeStart extends Component {

	componentWillMount(){
		this.props.fetchSampleDevStuff();
		// this.props.fetchDevTypeTotals();
	}
	shouldComponentUpdate(nextProps, nextState) {
		// console.log('update');
		if (nextProps.myLib.length !== this.props.myLib.length){
			//initialize app with dev type row
			this.props.fetchDevTypeInit(1, nextProps.myLib);
			//set up totals row
		} else if (nextProps.devTypes.length !== this.props.devTypes.length){
			this.props.fetchDevTypeTotals(nextProps.devTypes);
			this.forceUpdate();
			// return false;
		} else {		}
		return true;
	}
		
	addDevTypeRow(){
		// console.log('add row')
		this.props.addNewDevTypeRow(this.props.myLib);
	}
	render() {
		const { classes } = this.props;
		
		// console.log(this.props);
		return (
			<Grid container
				className={classes.root}
				alignItems='flex-start'
				direction='row'
				justify='center'>
				
				<Grid item xs={12} className={classes.card}>
					<h2>Step Two: Create Developments Type Mix</h2>
				</Grid>
				<Grid item sm={12} className={classes.card}>
					<Card className={classes.card}>
					<CardContent>
						<Typography type="headline" component="h3">
						Development Types
						</Typography>
						
						<BasicTable { ...this.props} />
						
						<CardActions>
							<Button dense color="primary" onClick={()=>this.addDevTypeRow()}>
								Add Row
							</Button>	
							<Button dense color="primary" onClick={()=>this.handleNavigation('create/dev-types')}>
								Move to Step Three
							</Button>	
							<Button dense color="primary" onClick={()=>alert("saved!... later...")}>
								Save
							</Button>	
							<Button dense color="primary" onClick={()=>this.props.history.push('/create')}>
								Go Back
							</Button>	
						</CardActions>
					</CardContent>
				</Card>
				</Grid>
			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	  return { 
		  	myLib: state.sample,
			devTypes: state.devTypes,
			devPercTotals: state.devPercTotals
		 };
}
  
const styledApp = withStyles(styles)(DevTypeStart);
export default connect(mapStateToProps, actions)(styledApp);