import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import * as actions from '../actions';

import CssBaseline from '@material-ui/core/CssBaseline';
//  {/*CssBaseline is like normalize in that it makes CSS equal across all browsers*/}

import Welcome from './splash/Welcome';
import Header from './header/Header';
import AboutStart from './about/AboutStart';
import DemoContainer from './_demo/DemoContainer';
import CreateStart from './create/CreateStart';
import BuildingPrototypeStart from './create/buildings/BuildingPrototypeStart';
import DevTypeStart from './create/developments/DevTypeStart';
import MapContainer from './mapping/MapContainer';
import MetricStart from './metrics/MetricStart';
import GalleryStart from './gallery/GalleryStart';
import ContactStart from './contact/ContactStart';
import ProfileStart from './profile/ProfileStart';
import NotFound404 from './global/NotFound404';

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
						<Switch>
						<Route exact path="/" component={Welcome} />
						<Route path="/about" component={AboutStart} />
						<Route path="/demo" component={DemoContainer} />
						<Route exact path="/create" component={CreateStart} />
						<Route path="/create/new/:id" component={BuildingPrototypeStart} />
						<Route path="/create/edit/:id" component={BuildingPrototypeStart} />
						<Route path="/create/dev-types" component={DevTypeStart} />
						<Route path="/gallery" component={GalleryStart} />
						<Route path="/map" component={MapContainer} />
						<Route path="/contact" component={ContactStart} />
						<Route path="/metrics" component={MetricStart} />
						<Route path="/profile" component={ProfileStart} />
						<Route component={NotFound404} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null, actions)(App);