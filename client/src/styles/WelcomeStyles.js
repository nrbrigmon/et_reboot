
export default (theme) => ({
	paper: {
	  textAlign: 'center',
	},
	section: {
		marginBottom:'50px'
	},
	grid: {
		marginBottom: '60px'
		// marginTop: '60px'
	},
	root: {
		backgroundColor: 'blue',
		// Match [md, ∞[
		//       [960px, ∞[
		[theme.breakpoints.up('md')]: {
		  backgroundColor: 'red',
    },
  },
	card: {
				margin: '10px',
				textAlign: 'left'
	}
})