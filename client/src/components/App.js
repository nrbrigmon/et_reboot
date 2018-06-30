import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import CssBaseline from '@material-ui/core/CssBaseline';

//  {/*CssBaseline is like normalize in that it makes CSS equal across all browsers*/}

import Welcome from './splash/Welcome';
import Header from './header/Header';
import AboutStart from './about/AboutStart';
import CreateStart from './create/CreateStart';
import BuildingPrototypeStart from './create/buildings/BuildingPrototypeStart';
import DevTypeStart from './create/developments/DevTypeStart';
import MapStart from './mapping/MapStart';
import MetricStart from './metrics/MetricStart';
import GalleryStart from './gallery/GalleryStart';
import ContactStart from './contact/ContactStart';
import ProfileStart from './profile/ProfileStart';

class App extends Component {
	componentDidMount() {
		// console.log("baseline mounted")
		//fetchUser will get name, info, if exists
		this.props.fetchUser();
	}
	render() {
		return (
			<div>
				{/* inside app, w router */}
            	<CssBaseline /> 
				<BrowserRouter>
					<div>
						<Header />
						<Route exact path="/" component={Welcome} />
						<Route path="/about" component={AboutStart} />
						<Route exact path="/create" component={CreateStart} />
						<Route path="/create/new/:id" component={BuildingPrototypeStart} />
						<Route path="/create/edit/:id" component={BuildingPrototypeStart} />
						<Route path="/create/dev-types" component={DevTypeStart} />
						<Route path="/gallery" component={GalleryStart} />
						<Route path="/map" component={MapStart} />
						<Route path="/contact" component={ContactStart} />
						<Route path="/metrics" component={MetricStart} />
						<Route path="/profile" component={ProfileStart} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null, actions)(App);