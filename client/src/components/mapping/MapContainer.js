import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from '@material-ui/core/styles';
import MapStyles from '../../styles/MapStyles';
import MapStart from './MapStart';

const styles = theme => MapStyles(theme);

class MapContainer extends Component {

	render() {
		return (
            <MapStart {...this.props} title={"Map the Site"}/>
        )
    }
}
    
function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType,
		  toast: state.toast,
		  mapOverlayPanel: state.mapOverlayPanel,
		  metricData: state.metricData
	   }
}

export default withStyles(styles)(connect(mapStateToProps, actions)(MapContainer));