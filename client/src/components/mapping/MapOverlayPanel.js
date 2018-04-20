import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';
import { withStyles } from 'material-ui/styles';

import Button from 'material-ui/Button';
import Paper from 'material-ui/Paper';
import FileUpload from 'material-ui-icons/FileUpload';
import LayersClear from 'material-ui-icons/LayersClear';
import Edit from 'material-ui-icons/Edit';
import MapDrawHelper from './MapDrawHelper';

const styles = theme => ({
	root: {
		flexGrow: 1,
		width: '100%',
		margin:0
    },
    overlayContainer: {
        position: 'absolute',
        left: '0px'
    },
	paper: {
        position:'relative',
        zIndex: '1000',
        left: '0px',
        margin: '0px',
        padding: '10px',
        width:'226px',
        // top: '120px'
	},
	buttonLayer: {
		position:'relative',
        margin: '5px',
        padding: '5px',
        width: '90%',
        fontSize: '10px'
    },
    buttonDevType: {
		position:'relative',
        margin: '5px',
        padding: '5px',
        width: '90%',
    },
    icon: {
        marginRight: '6px'
    }
  });
function isEmptyObject(obj) {
    for(var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
        return false;
        }
    }
    return true;
}
class MapOverlayPanel extends Component {
	
	loadScenarioLayer = () => {
		this.props.openModal('uploadLayer');
	}
	drawScenarioLayer = () => {
		this.props.setDrawTrigger('drawBaseLayer');
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
        // console.log(this.props.baseMapLayer);
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
		const devTypes = this.props.devWorkbook.workbook_devtypes;        
		return (
            <span className={classes.overlayContainer}>
			{/*for the panel on left, which is soon to be drawer */	}
            <Paper variant="raised" 
                color="primary" 
				className={classes.paper}
                >

                { 
                    ( !isEmptyObject(this.props.baseMapLayer) ) ? 
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
                            {(this.props.leafletDrawTrigger === "drawBaseLayer" ? <MapDrawHelper /> : '')}
                        
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
                (this.props.baseMapLayer.length === 0 ? <span></span> :
            
                <Paper variant="raised" 
                    color="primary" 
                    className={classes.paper}
                        >
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
                    {
                        devTypes.map( (item, idx) => {
                            return (
                                <div key={idx}>
                                    <Button variant="raised" 
                                        className={classes.buttonLayer}
                                        size="small"
                                        style={{ 
                                            color: sidePalette[idx].font,
                                            background: sidePalette[idx].fill,
                                            outline: (item.devTypeName === activeDevType.devTypeName ? '2px solid #ccc' : '')
                                        }}
                                        onClick={()=>this.paintDevelopmentType(item.devTypeName, sidePalette[idx].fill ) } 
                                        > {item.devTypeName} 
                                    </Button>
                                    {(item.devTypeName === activeDevType.devTypeName ? <MapDrawHelper /> : '')}
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

const styledApp = withStyles(styles)(MapOverlayPanel);
export default connect(null, actions)(styledApp);