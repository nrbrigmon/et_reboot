import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from "components/CustomButtons/Button.jsx";
import Typography from '@material-ui/core/Typography';

import columns from 'constants/_developmentAttributeColumns';
import AttributeTable from './AttributeTable';
import * as helper from 'utils/_helperMethods';

  
class AttributeSection extends Component {

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
							<AttributeTable { ...this.props} columns={section1}/>
						</div>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Street Characteristics
						</Typography>
						<div className={classes.tableContainer}>
							<AttributeTable { ...this.props} columns={section2}/>
						</div>
						<br />
						<br />

						<Typography type="headline" component="h3">
							Public Space Dedication
						</Typography>
						<div className={classes.tableContainer}>
							<AttributeTable { ...this.props} columns={section3}/>
						</div>
						<br />
						<br />

						<CardActions>
							<div className={classes.cardAction}>
								<Button 
									className={classes.cardButton} 
									variant="raised" color="primary" 
									onClick={()=>helper.navigateTo('dev-types/building-mix', this.props)} >
									Back
								</Button>	
								<Button 
									className={classes.cardButton} 
									variant="raised" color="primary" 
									onClick={()=>helper.navigateTo('mapping', this.props)} >
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

export default AttributeSection;