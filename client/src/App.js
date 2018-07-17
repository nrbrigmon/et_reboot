import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import { Router, Route, Switch } from "react-router";
// import { createBrowserHistory } from "history";

import { connect } from 'react-redux';
import * as actions from './actions';
import indexRoutes from './routes/indexRoutes';

import CssBaseline from '@material-ui/core/CssBaseline';
//  {/*CssBaseline is like normalize in that it makes CSS equal across all browsers*/}



class App extends Component {
	componentDidMount() {
		// console.log("baseline mounted")
		//fetchUser will get name, info, if exists
		this.props.fetchUser();
	}
	render() {
		// let hist = createBrowserHistory();
		
		return (
			<div>
				{/* inside app, w router */}
            	<CssBaseline /> 
				<BrowserRouter >
				{/* <Router history={hist}> */}
						<Switch>
						{indexRoutes.map((prop, key) => {
							if (prop.path){
								return <Route path={prop.path} key={key} exact={prop.exact} component={prop.component} {...this.props} />;
							} else {
								return <Route key={key} component={prop.component} />
							}
						})}
						</Switch>
				</BrowserRouter>
			</div>
		);
	}
}


export default connect(null, actions)(App);




