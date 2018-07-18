import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

import MapMainComponent from 'components/Mapping/MapMainComponent';
import MapOverlayPanel from 'components/Mapping/MapOverlayPanel';
import 'styles/customLeafletDraw.css';


class MappingSection extends Component {

	render() {

		return (
			<Grid item xs={12} lg={6} style={{padding:'0px'}}>
				<MapOverlayPanel {...this.props} />	
				<MapMainComponent {...this.props} />
			</Grid>
		);
	}
}

export default MappingSection;