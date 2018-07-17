import React, { Component } from 'react';
import Highcharts from 'react-highcharts';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import MapMainComponent from 'components/Mapping/MapMainComponent';
import MapOverlayPanel from 'components/Mapping/MapOverlayPanel';
import UploadLayerModal from 'ccomponents/modals/UploadLayerModal';
import UpdateToast from 'ccomponents/modals/UpdateToast';
import 'styles/customLeafletDraw.css';


class MappingSection extends Component {

	render() {

		return (
			<div >
				<Grid item xs={12} lg={6} style={{padding:'0px'}}>
					<MapOverlayPanel {...this.props} />	
					<MapMainComponent {...this.props} />
				</Grid>
				
			</div>
		);
	}
}

export default MappingSection;