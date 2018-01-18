import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Welcome from './Welcome';
import CreateStart from './CreateStart';
import DevTypeStart from './DevTypeStart';
import MapStart from './MapStart';
import MetricStart from './MetricStart';
import GalleryStart from './GalleryStart';
import BusinessCase from '../components/ThePitchComponent';
import BuildingPrototypeStart from '../components/create/buildings/BuildingPrototypeStart';

class App extends Component {
	render() {
		return (
			<div>
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

export default App;
