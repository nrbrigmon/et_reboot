export default (theme) => ({
	paper: {
		textAlign: 'center'
	},
    loginPaper: {
		textAlign: 'center',
		maxWidth: '200px'
	},
	loginForm: {
	  textAlign: 'center'
	},
	title:{
		marginBottom: '0px'
	},
    button: {
        width: '40%',
        margin: '0 10px 0 10px',
        maxWidth: '180px'
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 250,
    },
    list:{
      overflow: 'auto',
      position: 'relative', 
      maxHeight: 400
    },
    dropzone: {
      width: "100%",
      height: '160px',
      padding: '10px',
      margin: '20px 0px',
      backgroundColor: '#eeeeee',
      background: "#eeeeee",
      borderWidth: '2px',
      borderColor: 'rgb(102, 102, 102)',
      borderStyle: 'dashed',
      borderRadius: '5px',
      opacity: '0.7',
      textAlign: 'center'
    },
    container: {
      position: 'absolute',
      width: 8 * 50,
      top: `50%`,
      left: `50%`,    
      minHeight: '200px',
      transform: `translate(-50%, -50%)`,
      border: '1px solid #e5e5e5',
      backgroundColor: '#fff',
      boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
      padding: 8 * 4
	},
	loginGoogle:{
		background: "#FF5742",
		backgroundColor: "#FF5742",
		'&:hover': {
		  backgroundColor: "#dd4b39",
		}
	},
	loginTwitter:{
		background: "#00B9FF",
		backgroundColor: "#00B9FF",
		'&:hover': {
		  backgroundColor: "#00aced",
		}
	},
	loginSignup:{
		marginTop: '10px'
	},
	cssButtonRoot: {
		width: '100%',
		marginBottom: '5x',
		marginTop: '5px'
	}
})