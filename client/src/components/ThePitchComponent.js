import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Grid from 'material-ui/Grid';

import Card, { CardContent } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Wrapper900 from './wrappers/Wrapper900';

const styles = theme => ({
	paper: {
	  padding: '0px 20px 20px 20px',
	  margin: '40px 20px 20px 20px',
	  width: '80%'
	}
  });

const TARGET_AUDIENCES = (
	<div>
		I am a very simple card. I am good at containing small bits of information.
		I am convenient because I require little markup to use effectively. I am
		similar to what is called a panel in other frameworks.
	</div>
);
const ORGANIZATION = <div>the envision app group</div>;
const PRODUCTS = <div>products</div>;
const ADVANTAGE = <div>advantage</div>;
const BENEFITS = <div>benefits</div>;

class ThePitch extends Component {
	constructor() {
		super();
		this.state = {
			selection: ''
		};
	}

	textTemplate(text) {
		return (
			<div>
				<div className="card-panel teal">
					<span className="white-text">{text}</span>
				</div>
			</div>
		);
	}

	renderContentSelection(choice) {
		if (choice === 'target') {
			return this.textTemplate(TARGET_AUDIENCES);
		} else if (choice === 'org') {
			return this.textTemplate(ORGANIZATION);
		} else if (choice === 'products') {
			return this.textTemplate(PRODUCTS);
		} else if (choice === 'advantage') {
			return this.textTemplate(ADVANTAGE);
		} else if (choice === 'bene') {
			return this.textTemplate(BENEFITS);
		} else {
			return '';
		}
	}

	handleClick = e => {
		this.setState({
			selection: e
		});
	};

	render() {
		const { classes } = this.props;
		return (
			<Wrapper900>
				<Paper className={classes.paper}>
					
					<Grid item xs={12}>
						<h2>Why this app?</h2>
					</Grid>
					
					<Grid item xs={12}>
						<Card>
							<CardContent>
								<p>
									For{' '}
									<a onClick={() => this.handleClick('target')}>
										[TARGET AUDIENCES]
									</a>,{' '}
									<a onClick={() => this.handleClick('org')}>[ORGANIZATION]</a>{' '}
									offers{' '}
									<a onClick={() => this.handleClick('products')}>
										[WHAT PRODUCTS/SERVICES]
									</a>{' '}
									that{' '}
									<a onClick={() => this.handleClick('advantage')}>
										[DISTINCTIVE ADVANTAGE]
									</a>{' '}
									to achieve{' '}
									<a onClick={() => this.handleClick('bene')}>[END BENEFITS]</a>.
								</p>
							</CardContent>
						</Card>
					</Grid>
					
					<Grid item xs={12}>
						{this.renderContentSelection(this.state.selection)}
					</Grid>
							
			

					<Grid item xs={12}>
						<h5>
							What are the issues with the current Scenario Planning Software?
						</h5>
						<List>
							<ListItem>
								<ListItemText 
									primary="Overly complicated spreadsheets and files" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Lack of visualizations (espcially three-dimensional)" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Requirement of private, desktop software" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="De-centralized; isolated data collection" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Difficult to share results" />
							</ListItem>
						</List>
						<h5>What are the solutions offered by this application?</h5>
						<List>
							<ListItem>
								<ListItemText 
									primary="Centralized database" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Web-application with simple UI" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="3D visuals" />
							</ListItem>
							<ListItem>						
								<ListItemText 
									primary="Shareable and interactive results" />
							</ListItem>
						</List>
					</Grid>

					<Grid item xs={12}>
						<Link className="waves-effect waves-light btn" to="/">
							Back to Homepage
						</Link>
					</Grid>
				</Paper>
			</Wrapper900>
		);
	}
}


const styledApp = withStyles(styles)(ThePitch);
export default styledApp;
