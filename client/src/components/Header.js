import React, { Component } from 'react';

let customStyle = {
	padding: '0px 15px'
};

class Header extends Component {
	renderContent() {
		// switch (this.props.auth) {
		// 	case null:
		// 		return;
		// 	case false:
		return (
			<li>
				<a href="/">Login to Google</a>
			</li>
		);
		// 	default:
		// 		return [
		// 			<li key="1">
		// 				<Payments />
		// 			</li>,
		// 			<li key="2" style={customStyle}>
		// 				Credits: {this.props.auth.credits}
		// 			</li>,
		// 			<li key="3">
		// 				<a href="/api/logout">Sign Out</a>
		// 			</li>
		// 		];
		// }
		// return <span>Welcome!</span>;
	}
	render() {
		return (
			<nav>
				<div className="nav-wrapper">
					<div className="col s12">
						<a href="" className="brand-logo" style={customStyle}>
							<i className="material-icons">business</i>Envision
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
							{this.renderContent()}
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
