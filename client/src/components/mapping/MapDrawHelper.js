import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class MapDrawHelper extends Component {	
    handleAction = (action) => {
        this.props.setDrawTrigger(action);
        if (action === 'closeDrawHelper'){
            this.props.setActiveDevType({devTypeName: '', devTypeColor: ''});
        }
    }

    componentDidUpdate({ leafletDrawTrigger }){
        // console.log(leafletDrawTrigger);
        if (leafletDrawTrigger === 'closeDrawHelper'){
            this.handleAction(leafletDrawTrigger)
        }
    }

	render() {
        const { classes } = this.props;
		return (
			<span className={classes.drawWrapper}>
                <Button size="small" className={classes.drawAction} onClick={() => this.handleAction('finishLayer')}>
                    Finish </Button>
                <Button size="small" className={classes.drawAction} onClick={() => this.handleAction('deleteLastPoint')}>
                    Delete Last Point </Button>
                <Button size="small" className={classes.drawAction} onClick={() => this.handleAction('closeDrawHelper')}>
                    Cancel </Button>
			</span>
		);
	}
}

export default MapDrawHelper;