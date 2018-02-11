import React, { Component } from 'react';
import ThreeBuildingPrototypeScene from './three-building-prototype-scene';
// import * as THREE from 'three';

// Inline styles applied in the HTML you build here
class ThreeBuildingPrototype extends Component {
  constructor(props){
    super(props);
    this.state = {
      buildingName:"",
      cubeDim: {
        x: 5,
        y: 5,
        z: 1,
        siteArea: 1000,
        sqft: 250,
        landscaping: 50
      },
      changeCounter: 0
    }
    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    
  }
    
  nameChange(e){
    let val = e.target.value;
    this.setState({
      buildingName: val
    }); 
  }
  
  handleChange(e){
    let newDim = Object.assign( {}, this.state.cubeDim );
    let id = e.target.id;
    let val = e.target.value;
    if (id === 'sqft'){
      newDim['sqft'] = val; 
    } else if (id === 'z1' ){
      newDim['z'] = val;
    } else if (id === 'siteArea' ){
      newDim['siteArea'] = val;
    }else {
      newDim['landscaping'] = val;
    }
    //update the state based on the specific dimensions
    this.setState({
      cubeDim: newDim
    }); 
    this.setState({
      changeCounter: this.state.changeCounter + 1
    }); 
  }
  
  
  render() {
    let someVariable = this.state.changeCounter;
    let sqft = this.state.cubeDim.z * this.state.cubeDim.sqft;
    let name = this.state.buildingName;
    return (
      <div className="container" style={{marginTop: '30px'}}>
        
        <div className="row">
          <form className="col s6 item">
            
            
              <div className="input-field col s12">
                <input id="buildingName" type="text" className="validate"  value={this.state.value} onChange={this.nameChange} />
                <label for="buildingName">Building Name</label>
              </div>
            
              <div className="input-field col s12">
                <input id="siteArea" type="text" className="validate" placeholder="1000" value={this.state.value} onChange={this.handleChange} />
                <label for="siteArea">Site Area (sqft)</label>
              </div>
              
              <div className="input-field col s12">
                <input id="z1" type="text" className="validate" placeholder="1" value={this.state.value} onChange={this.handleChange} />
                <label for="z1">Building Height (Number of Floors)</label>
              </div>
              
              <div className="input-field col s12">
                <input id="sqft" type="text" className="validate" placeholder="250" value={this.state.value} onChange={this.handleChange} />
                <label for="sqft">Building Envelope Footprint (sqft)</label>
              </div>
              
              <div className="input-field col s12">
                <input id="landscaping" type="text" className="validate" placeholder={this.state.cubeDim.landscaping} value={this.state.value} onChange={this.handleChange} />
                <label for="landscaping">% Landscaping</label>
              </div>
            
          </form>
          <div className="col s6 item">
            
          <ThreeBuildingPrototypeScene key={ `foo-component-${someVariable}` } dimensions={this.state.cubeDim}/>
            <p>Building Name: {name}</p>
            <p>Total Building Sqft: {sqft}</p>
          </div>
        
        </div>
      </div>
    );
  }
};
export default ThreeBuildingPrototype;