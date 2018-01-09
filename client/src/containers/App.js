import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';
import Welcome from '../components/Welcome';
import CreateStart from './CreateStart';
import DevTypeStart from './DevTypeStart';
import MapStart from './MapStart';
import MetricStart from './MetricStart';
import GalleryStart from './GalleryStart';
import BusinessCase from '../components/thePitchComponent';
import StartBuildingPrototype from '../components/create/buildings/startBuildingPrototype';

class App extends Component {
	render() {
		return (
			<div className="container">
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Welcome} />
						<Route exact path="/create" component={CreateStart} />
						<Route path="/create/edit" component={StartBuildingPrototype} />
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
