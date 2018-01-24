import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { Reboot } from 'material-ui';

import Header from './Header';
import Welcome from '../containers/Welcome';
import CreateStart from '../containers/CreateStart';
import DevTypeStart from '../containers/DevTypeStart';
import MapStart from '../containers/MapStart';
import MetricStart from '../containers/MetricStart';
import GalleryStart from '../containers/GalleryStart';
import BusinessCase from './ThePitchComponent';
import BuildingPrototypeStart from './create/buildings/BuildingPrototypeStart';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
            	<Reboot /> 
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Welcome} />
						<Route exact path="/create" component={CreateStart} />
						<Route path="/create/new/:id" component={BuildingPrototypeStart} />
						<Route path="/create/edit/:id" component={BuildingPrototypeStart} />
						<Route path="/create/dev-types" component={DevTypeStart} />
						<Route path="/map" component={MapStart} />
						<Route path="/metrics" component={MetricStart} />
						<Route path="/gallery" component={GalleryStart} />
						<Route path="/pitch" component={BusinessCase} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null, actions)(App);;
