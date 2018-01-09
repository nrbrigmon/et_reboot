import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CreateStart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageChoice: 'start',
			buildings: []
		};

		this.componentSelection = this.componentSelection.bind(this);
	}
	componentSelection(choice) {
		this.setState({
			pageChoice: choice
		});
	}

	componentDidMount() {
		axios.get('/api/buildings')
		  .then(res => {
			let tempList = []
			res.data.map(obj => tempList.push(obj) );
			this.setState({ buildings: tempList });
		  });
	  }
	renderLibrary(lib) {
		return lib.map((item, idx) => {
			return (
				<li className="collection-item" key={idx}>
					<div>
						<span className="title">{item.buildingname}</span>
						<a href="#!" className="secondary-content">
							<i className="material-icons">remove_circle</i>
						</a>
						<a href="#!" className="secondary-content">
							<i className="material-icons">edit</i>
						</a>
						<br />
						<span className="location">{item.sitelocation}</span>
					</div>
				</li>
			);
		});
	}

	render() {
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h2>Step One: Create Your Library</h2>
				</div>
				{/* COLUMN #1 */}
				<div className="col s8 m8">
					<ul className="collection with-header">
						<li className="collection-header">
							<h4>Your Library</h4>
						</li>
						{ /*
							the proper loading pattern is using a ternary operator like this:
							{ isEmpty ?
									(isFetchingData ? <p>getting data/loading</p> : "empty list")
									: <Building data={arrayData}/>
							}
						*/}
						{this.renderLibrary(this.state.buildings)}

						<li className="collection-item">
							<div />
						</li>
					</ul>
					<div className="center-align">
						<Link
							className="waves-effect waves-light btn"
							to="/create/dev-types">
							Step Two
						</Link>
					</div>
				</div>
				{/* COLUMN #2 */}
				<div className="col s4 m4">
					<div className="center-align step-one-choices">
						{/* if you click on either existing libary or building, it
						should open a modal window with a filterable table 
						to choose existing buildings and/or libraries.
						maybe they open a modal but you aview a different
						tab depending on the click?*/}
						<Link className="waves-effect waves-light btn" to="/create">
							Existing Library
							<i className="material-icons left">arrow_drop_down</i>
						</Link>

						<Link className="waves-effect waves-light btn" to="/create">
							Existing Building
							<i className="material-icons left">arrow_drop_down</i>
						</Link>

						<Link to="/create/edit" className="waves-effect waves-light btn">
							New Building <i className="material-icons left">add</i>
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default CreateStart;
