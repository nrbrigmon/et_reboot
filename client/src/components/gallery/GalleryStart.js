import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import * as helper from '../../utils/_helperMethods';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Wrapper900 from '../wrappers/Wrapper900';

const sampleList = [0,1,2,3,4,5,6,7,8,9,10,11];

class GalleryStart extends Component {

	render() {
		return (
			<Wrapper900>
				<Grid item xs={12}>
					<h2>Welcome to the Gallery!</h2>
					<h4>***still under development***</h4>
				</Grid>
				
				<Grid item xs={12}>
					<div>
						<List>
							<ListItem button>
								<ListItemText primary="Explore Buildings" />
							</ListItem>
							<ListItem button>						
								<ListItemText primary="Explore Sites" />
							</ListItem>
							<ListItem button>						
								<ListItemText primary="Download Data" />
							</ListItem>
						</List>
					</div>
				</Grid>
				{
					sampleList.map(elem => {
						return <Grid item key={elem} style={{margin:'20px',padding:'20px'}} xs={3}><Paper style={{width:'100%',padding:'30px',height:'100%'}}>{elem} </Paper></Grid>
					})
				}

				<Grid item xs={12}>
					<Grid item xs={12}>
						<Button variant="raised" 
							color="primary" 
							onClick={()=>helper.navigateTo('', this.props)} >
							Back to Homepage
						</Button>
					</Grid>
				</Grid>	
			</Wrapper900>
		);
	}
}

export default GalleryStart;