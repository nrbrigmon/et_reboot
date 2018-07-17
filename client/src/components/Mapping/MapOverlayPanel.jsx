import React, { Component } from 'react';

import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import FileUpload from '@material-ui/icons/FileUpload';
import LayersClear from '@material-ui/icons/LayersClear';
import Edit from '@material-ui/icons/Edit';
import MapDrawHelper from './MapDrawHelper';

class MapOverlayPanel extends Component {
	
	loadScenarioLayer = () => {
		this.props.openModal('uploadLayer');
	}
	drawScenarioLayer = () => {
        // console.log("Drawscenario layer");
        this.props.setDrawTrigger('drawBaseLayer');
        this.props.setActiveDevType({devTypeName: "DRAW_SCENARIO_BASE_LAYER", color: ""})
    }
	resestScenarioLayer = () => {
        this.props.setDrawTrigger('resetBaseLayer'); //remove the object from the map
        this.props.resetBaseLayer(); //empty the object from state
    }
    paintDevelopmentType = (name, color) => {
        this.props.setDrawTrigger('paintScenarioLayer');
        this.props.setActiveDevType({devTypeName: name, devTypeColor: color});
	}
	render() {		
        //this is palette for dev types, could add a color picker later
		const sidePalette = [
			{fill: "#8dd3c7", font: "black"},
			{fill: "#ffffb3", font: "black"},
			{fill: "#bebada", font: "black"},
			{fill: "#fb8072", font: "black"},
			{fill: "#80b1d3", font: "black"}
		]
        const { classes } = this.props;
        const { activeDevType } = this.props;
        const { workbook_devtypes } = this.props.devWorkbook;   
		return (
            <span className={classes.overlayContainer}>
			{/*for the panel on left, which is soon to be drawer */	}
            <Paper variant="raised" 
                color="primary" 
				className={classes.overlayWrapper}
                >

                { 
                    ( this.props.mapOverlayPanel === "painting"  ) ? 
                        (<Button variant="raised" 
                            color="secondary" 
                            size="small"
                            className={classes.buttonLayer}
                            onClick={()=>this.resestScenarioLayer() } >
        
                            <LayersClear className={classes.icon}/> Reset Base Layer
                        </Button>)
                    :
                        (<span>
                            <Button variant="raised" 
                                color="secondary" 
                                size="small"
                                className={classes.buttonLayer}
                                onClick={()=>this.drawScenarioLayer() } > 
                                
                                <Edit className={classes.icon}/> Draw Scenario Layer
                            </Button>
                            {(activeDevType.devTypeName === "DRAW_SCENARIO_BASE_LAYER" ? <MapDrawHelper  {...this.props}/> : '')}
                        
                            <Button variant="raised" 
                                color="secondary" 
                                size="small"
                                className={classes.buttonLayer}
                                onClick={()=>this.loadScenarioLayer() } >

                                <FileUpload className={classes.icon}/> Load Scenario Layer
                            </Button>
                        </span>)
                }
            </Paper>
            { 
                (this.props.mapOverlayPanel === false ? <span></span> :
            
                <Paper variant="raised" 
                    color="primary" 
                    className={classes.overlayWrapper}>
                    Choose Development Type: <br />
                    <Button variant="raised" 
                        className={classes.buttonLayer}
                        size="small"
                        style={{ 
                            color: '#111111',
                            background: '#eeeeee',
                            outline: (null === activeDevType.devTypeName ? '2px solid #ccc' : '')
                        }}
                        onClick={()=>this.paintDevelopmentType(null, "#eeeeee" ) } 
                        > Clear Area
                    </Button>
                    {(null === activeDevType.devTypeName ? <MapDrawHelper  {...this.props}/> : '')}
                    {
                        workbook_devtypes.map( (item, idx) => {
                            let localDevTypeName = ( item.devTypeName.length <= 1 ? "<empty>" : item.devTypeName)
                            return (
                                <div key={idx}>
                                    <Button variant="raised" 
                                        className={classes.buttonLayer}
                                        size="small"
                                        style={{ 
                                            color: sidePalette[idx].font,
                                            background: sidePalette[idx].fill,
                                            outline: (localDevTypeName === activeDevType.devTypeName ? '2px solid #ccc' : '')
                                        }}
                                        onClick={()=>this.paintDevelopmentType(localDevTypeName, sidePalette[idx].fill ) } 
                                        > {localDevTypeName} 
                                    </Button>
                                    {(localDevTypeName === activeDevType.devTypeName ? <MapDrawHelper  {...this.props}/> : '')}
                                </div>
                            );
                        })
                    }
                </Paper>
                )
            }
        </span>	);
	}
}

export default MapOverlayPanel;