import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import { CssBaseline } from 'material-ui';

import Header from './Header';
import Welcome from './Welcome';
import CreateStart from './create/CreateStart';
import DevTypeStart from './create/developments/DevTypeStart';
import MapStart from './create/mapping/MapStart';
import MetricStart from './create/metrics/MetricStart';
import GalleryStart from './gallery/GalleryStart';
import ThePitch from './ThePitchComponent';
import BuildingPrototypeStart from './create/buildings/BuildingPrototypeStart';

class App extends Component {
	componentDidMount() {
		//fetchUser will get name, info, if exists
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
            	<CssBaseline /> 
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
						<Route path="/pitch" component={ThePitch} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null, actions)(App);