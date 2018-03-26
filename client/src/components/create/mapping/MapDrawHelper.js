import React, { Component } from 'react';
import Button from 'material-ui/Button';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import * as actions from '../../../actions';

const styles = theme => ({
	wrapper: {
        left:' 205px',
        width: '210px',
        opacity: 0.8,
        outline: '1px #ccc solid',
        position: 'absolute',
        background: 'white',
        fontSize: '12px',
        margin: '4px 5px',
        padding: '0px'
    },
    action: {
        padding: '1px',
        margin: '0px',
        fontSize: '10px',
        width: '70px'
    }
  });

class MapDrawHelper extends Component {	
    handleAction = (action) => {
        this.props.setDrawTrigger(action);
        if (action !== 'deleteLastPoint'){
            this.props.setActiveDevType({devTypeName: '', devTypeColor: ''});
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

const styledApp = withStyles(styles)(MapDrawHelper);
export default connect(null, actions)(styledApp);