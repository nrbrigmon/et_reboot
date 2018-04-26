import React, { Component } from 'react';
import Button from 'material-ui/Button';

class MapDrawHelper extends Component {	
    handleAction = (action) => {
        this.props.setDrawTrigger(action);
        if (action === 'cancelLayer'){
            this.props.setActiveDevType({devTypeName: '', devTypeColor: ''});
        }
    }
    componentWillReceiveProps({leafletDrawTrigger}){
        // console.log(leafletDrawTrigger);
        if (leafletDrawTrigger === 'cancelLayer'){
            this.handleAction(leafletDrawTrigger)
        }
    }
	render() {
        const { classes } = this.props;
		return (
			<span className={classes.wrapper}>
                <Button size="small" className={classes.action} onClick={() => this.handleAction('finishLayer')}>
                    Finish </Button>
                <Button size="small" className={classes.action} onClick={() => this.handleAction('deleteLastPoint')}>
                    Delete Last Point </Button>
                <Button size="small" className={classes.action} onClick={() => this.handleAction('cancelLayer')}>
                    Cancel </Button>
			</span>
		);
	}
}

export default MapDrawHelper;