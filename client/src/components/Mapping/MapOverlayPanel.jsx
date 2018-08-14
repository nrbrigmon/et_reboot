import React, { Component } from 'react';

import Button from "components/CustomButtons/Button.jsx";
import Paper from '@material-ui/core/Paper';
import FileUpload from '@material-ui/icons/FileUpload';
import LayersClear from '@material-ui/icons/LayersClear';
import Edit from '@material-ui/icons/Edit';
import Save from '@material-ui/icons/Save';
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
	saveScenarioLayer = () => {
		this.props.openModal('saveLayer');
	}
	render() {		
        //this is palette for dev types, could add a color picker later
		const sidePalette = [
			{fill: "#80b1d3", font: "black"},
			{fill: "#8dd3c7", font: "black"},
			{fill: "#ffffb3", font: "black"},
			{fill: "#bebada", font: "black"},
			{fill: "#fb8072", font: "black"},
			{fill: "#80b1d3", font: "black"},
			{fill: "#fdb462", font: "black"},
			{fill: "#b3de69", font: "black"},
			{fill: "#fccde5", font: "black"},
			{fill: "#d9d9d9", font: "black"},
			{fill: "#bc80bd", font: "black"},
			{fill: "#ccebc5", font: "black"},
			{fill: "#ffed6f", font: "black"},
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
                        (<span>
							<Button variant="raised" 
							color="primary" 
							className={classes.buttonLayer}
							onClick={()=>this.saveScenarioLayer() } >
		
								<Save className={classes.icon}/> Save Layer
							</Button>
							<Button variant="raised"
								color="transparent" 
								className={classes.buttonLayer}
								onClick={()=>this.resestScenarioLayer() } >
			
                           	 	<LayersClear className={classes.icon}/> Reset Base Layer
                        	</Button>
						</span>)
                    :
                        (<span>
                            <Button variant="raised" 
                                color="primary" 
                                className={classes.buttonLayer}
                                onClick={()=>this.drawScenarioLayer() } > 
                                
                                <Edit className={classes.icon}/> Draw Scenario Layer
                            </Button>
                            {(activeDevType.devTypeName === "DRAW_SCENARIO_BASE_LAYER" ? <MapDrawHelper  {...this.props}/> : '')}
                        
                            <Button variant="raised" 
                                color="primary" 
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
                                        style={{ 
                                            color: sidePalette[idx % sidePalette.length].font,
                                            background: sidePalette[idx % sidePalette.length].fill,
                                            outline: (localDevTypeName === activeDevType.devTypeName ? '2px solid #ccc' : '')
                                        }}
                                        onClick={()=>this.paintDevelopmentType(localDevTypeName, sidePalette[idx % sidePalette.length].fill ) } 
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