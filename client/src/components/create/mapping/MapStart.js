import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../actions';

import Grid from 'material-ui/Grid';
import Button from 'material-ui/Button';

import MapContainer from './MapContainer';
import MapOverlayPanel from './MapOverlayPanel';
import UploadLayerModal from './modal/UploadLayerModal';

import './customLeafletDraw.css';

class MapStart extends Component {
    handleNavigation = val => {
		this.props.history.push(val);
	}
	render() {
		return (
			<Grid >
				<Grid item sm={12} >
					<h2>Step Three: Map the Site</h2>
					
					<Button variant="raised" 
						color="primary" 
						onClick={()=>this.handleNavigation('metrics')}>
						Metrics 
					</Button>
				</Grid>
				<Grid item xs={12} style={{ marginTop: '20px' }}>
					<MapOverlayPanel {...this.props} />	
					<MapContainer {...this.props} />
				</Grid>
				<UploadLayerModal />
			</Grid>
		);
	}
}

function mapStateToProps(state) {  
	return { 
		  devWorkbook: state.devWorkbook,
		  baseMapLayer: state.baseMapLayer,
		  mapRef: state.mapRef,
		  leafletDrawTrigger: state.leafletDrawTrigger,
		  activeDevType: state.activeDevType
	   }
}

export default connect(mapStateToProps, actions)(MapStart);