import React, { Component } from 'react';
import { updateMathModule } from './_buildingMathModule';
 
class PhysicalFormComponent extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			localBP: this.props.attributes
		}
	}

	handleChange = e => {
		let buildingCopy = {};
		buildingCopy[e.target.name] = e.target.value;
		this.props.buildingUpdate(buildingCopy);
		updateMathModule(this.state.localBP);
	};

	changePage = e => {
		this.props.pageChange(e.target.value);
	};

	renderInputFields(obj){
		let fields = [{
			name: 'Building Name',
			attr: 'buildingName'
		},{
			name: 'Building Height',
			attr: 'buildingHeight'
		},{
			name: 'Site Area',
			attr: 'siteArea'
		},{
			name: 'Site Location',
			attr: 'siteLocation'
		},{
			name: 'Site net-to-gross ratio',
			attr: 'siteNetToGross'
		},{
			name: 'Landscaping %',
			attr: 'landscapingPerc'
		},{
			name: 'Underbuild %',
			attr: 'underbuildPerc'
		}];
		return fields.map((item, idx) => {
			return (
				<label key={idx}>
					{item.name}
					<input 	name={item.attr}
							onChange={event => this.handleChange(event)}
							value={obj[item.attr]}
						/>
				</label>
					
			);
		});
	}
	render() {
		let bldgAttr = this.props.attributes.physicalInfo;
		
		return (
			<div className="row">
				<div className="col s12 center-align">
					<h4>Physical Inputs</h4>
				</div>
				<div className="col s8 m6 left-align">
					<form>
						{ this.renderInputFields(bldgAttr) }
						
					
						<label>
							Select Residential Type (If Applicable):
							<select onChange={event => console.log(event.target.value)} value="Choose ">
								<option value="grapefruit">Grapefruit</option>
								<option value="lime">Lime</option>
								<option value="coconut">Coconut</option>
								<option value="mango">Mango</option>
							</select>
						</label>
						
						<label>
							Select Occupancy Type (If Applicable):
							<select onChange={event => console.log(event.target.value)} value="Choose ">
								<option value="renter">Renter</option>
								<option value="owner">Owner</option>
								<option value="none">None</option>
							</select>
						</label>
						<input placeholder="Retail %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Office %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Industrial %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Public %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Education %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Hotel/Motel %"
							onChange={event => console.log(event)}
						/>
						<input placeholder="Commercial Parking %"
							onChange={event => console.log(event)}
						/>
						<p>Building Check: xxx%</p>
						
					<p>Gross Area per Employee by Sector (Average)</p>
					
					<input placeholder="Residentail"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Retail"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Office"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Industrial"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Public"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Education"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Hotel/Motel"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Hotel/Motel"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Commercial Parking"
						onChange={event => console.log(event)}
					/>
					</form>
				</div>
				<div className="col s4 m6 center-align">
					<div style={{ border: '1px solid grey', height: '300px' }}>
						threeJS 3D component goes here...
					</div>
					
					<input placeholder="Avg. Residential Unit Size"
						onChange={event => console.log(event)}
					/>

					<p>Parking Spaces Per Dwelling Unit, Hotel Room or 1,000 sf of Commercial Area
</p>
					<input placeholder="Residentail"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Retail"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Office"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Industrial"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Public"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Education"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Hotel/Motel"
						onChange={event => console.log(event)}
					/>
					<p>Parking Type</p>
					<input placeholder="Surface Levels"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Internal Parking Levels"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Underground Parking Levels"
						onChange={event => console.log(event)}
					/>
					<input placeholder="Mechanical Parking?"
						onChange={event => console.log(event)}
					/>
					
					<label>
						Select Parking Layout (sq ft per space):
						<select onChange={event => console.log(event.target.value)} value="Choose ">
							<option value="renter">Suburban</option>
							<option value="owner">Urban</option>
							<option value="none">Structured</option>
							<option value="none">Mechanical</option>
							<option value="none">Custom</option>
						</select>
					</label>
				</div>
			</div>
		);
	}
}

export default PhysicalFormComponent;
