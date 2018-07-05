import React, { Component } from 'react';
import ThreeBuildingPrototype from './three-building-prototype';
import Grid from '@material-ui/core/Grid';

// Inline styles applied in the HTML you build here
class ThreeBuildingPrototypeScene extends Component {
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
  
  // componentDidUpdate(prevProps){
  //   this.handleChange('update');
  // this.props === prevProps
  // }
  render() {
    let someVariable = this.state.changeCounter;
    // let sqft = this.props.cubeDim.z * this.props.cubeDim.sqft;
    // console.log(this.props); 
    return (
			<Grid >
          <ThreeBuildingPrototype 
            key={`foo-component-${someVariable}`} 
            rotate={true}
            dimensions={this.props.cubeDim}/>
      </Grid>
    );
  }
};
export default ThreeBuildingPrototypeScene;