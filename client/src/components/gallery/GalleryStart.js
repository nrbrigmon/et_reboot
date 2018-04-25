import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';

import Paper from 'material-ui/Paper';
import List, { ListItem, ListItemText } from 'material-ui/List';
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
					<Link className="waves-effect waves-light btn" to="/">
						Back
					</Link>
					
				</Grid>	
			</Wrapper900>
		);
	}
}

export default GalleryStart;