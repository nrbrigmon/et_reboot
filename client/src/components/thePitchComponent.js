import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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

class Welcome extends Component {
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
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Why this app?</h2>
				</div>

				<div className="row">
					<div className="col s6 offset-s3">
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
					</div>
				</div>

				<div className="row">
					<div className="col s6 offset-s3">
						{this.renderContentSelection(this.state.selection)}
					</div>
				</div>

				<div className="col s12 center-align">
					<h5>
						What are the issues with the current Scenario Planning Software?
					</h5>
					<div className="row">
						<div className="col s6 offset-s3 left-align">
							<ul>
								<li>Overly complicated spreadsheets and files</li>
								<li>Lack of visualizations (espcially three-dimensional)</li>
								<li>Requirement of private, desktop software</li>
								<li>De-centralized; isolated data collection</li>
								<li>Difficult to share results</li>
							</ul>
						</div>
					</div>

					<h5>What are the solutions offered by this application?</h5>
					<div className="row">
						<div className="col s6 offset-s3 left-align">
							<ul>
								<li>Centralized database</li>
								<li>Web-application with simple UI</li>
								<li>3D visuals</li>
								<li>Shareable and interactive results</li>
							</ul>
						</div>
					</div>
				</div>

				<Link className="waves-effect waves-light btn" to="/">
					Back to Homepage
				</Link>
			</div>
		);
	}
}

export default Welcome;
