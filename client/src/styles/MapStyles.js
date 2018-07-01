
export default (theme) => ({
    root: {
		flexGrow: 1,
		width: '100%',
		margin: 0
    },
    overlayContainer: {
        position: 'absolute',
        left: '0px'
	},	
	buttonNav: {
		margin: '20px'
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
	},	
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