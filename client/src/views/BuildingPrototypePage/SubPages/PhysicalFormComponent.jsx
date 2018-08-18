import React, { Component } from "react";

import Grid from "@material-ui/core/Grid";

// import { connect } from 'react-redux';
// import * as actions from '../../../actions';

import inputFields from "constants/_physicalInputs";
import InputFieldsComponent from "./inputs/InputFieldsComponent";
import PercentStatusCheck from "utils/_PercentStatusCheck";
import ThreeBuildingPrototypeScene from "components/ThreeJsModels/three-building-prototype-scene";

class PhysicalFormComponent extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, valueSub) => {
    let updateCopy = {};
    if (valueSub) {
      updateCopy[e.target.id] = Number(valueSub);
    } else {
      updateCopy[e.target.id] = e.target.value;
    }
    this.props.updateBuildingPrototypeField("physicalInfo", updateCopy);
  };

  render() {
    const { classes } = this.props;
    const {
      section1,
      section2,
      section3,
      section4,
      section5,
      section6
    } = inputFields;
    let bldgAttr = this.props.attributes.physicalInfo;
    let {
      residentialUsePerc,
      retailUsePerc,
      officeUsePerc,
      industrialUsePerc,
      publicUsePerc,
      educationUsePerc,
      hotelUsePerc,
      parkingUsePerc
    } = bldgAttr;
    let propArea = bldgAttr.siteArea * 0.1;
    let bldgFootprint =
      (this.props.attributes.forDevType.rTotalSf / bldgAttr.buildingHeight) *
      0.1;
    // console.log(bldgAttr)
    return (
      <Grid container>
        <Grid item xs={6}>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section1 }}
          />
        </Grid>
        <Grid item xs={6}>
          <ThreeBuildingPrototypeScene
            cubeDim={{
              x: 5,
              y: 5,
              z: bldgAttr.buildingHeight,
              siteArea: propArea,
              sqft: bldgFootprint,
              landscaping: bldgAttr.landscapingPerc
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <hr />
        </Grid>
        <Grid item xs={6}>
          <h5>Building Use</h5>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section2 }}
          />
          <p>
            {PercentStatusCheck(
              [
                residentialUsePerc,
                retailUsePerc,
                officeUsePerc,
                industrialUsePerc,
                publicUsePerc,
                educationUsePerc,
                hotelUsePerc,
                parkingUsePerc
              ],
              "Building Check: "
            )}
          </p>
        </Grid>
        <Grid item xs={6}>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section3 }}
          />

          <h5>Gross Area per Employee by Sector (Average)</h5>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section4 }}
          />
        </Grid>

        <Grid item xs={12}>
          <hr />
        </Grid>

        <Grid item xs={6}>
          <h5>Parking Requirements</h5>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section5 }}
          />
        </Grid>

        <Grid item xs={6}>
          <h5>Parking Layout</h5>
          <InputFieldsComponent
            inputUpdate={this.handleChange}
            attributes={{ bldgAttr, classes, section: section6 }}
          />
        </Grid>
      </Grid>
    );
  }
}

export default PhysicalFormComponent;
