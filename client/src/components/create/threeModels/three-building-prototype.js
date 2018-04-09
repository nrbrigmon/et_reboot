import React, { Component } from 'react';
import ThreeBuildingPrototypeScene from './three-building-prototype-scene';
import Grid from 'material-ui/Grid';

// Inline styles applied in the HTML you build here
class ThreeBuildingPrototype extends Component {
  constructor(props){
    super(props);
    this.state = {
      changeCounter: 0
    }
    
    // This binding is necessary to make `this` work in the callback
    this.handleChange = this.handleChange.bind(this);
    
  }
  
  handleChange(e){
    this.setState({
      changeCounter: this.state.changeCounter + 1
    }); 
  }
  
  componentWillReceiveProps(props){
    this.handleChange('update');
  }
  render() {
    let someVariable = this.state.changeCounter;
    // let sqft = this.props.cubeDim.z * this.props.cubeDim.sqft;
    // console.log(this.props); 
    return (
			<Grid >
          <ThreeBuildingPrototypeScene 
            key={`foo-component-${someVariable}`} 
            rotate={true}
            dimensions={this.props.cubeDim}/>
      </Grid>
    );
  }
};
export default ThreeBuildingPrototype;