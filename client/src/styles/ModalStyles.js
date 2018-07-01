export default (theme) => ({
    paper: {
        textAlign: 'center'
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
      transform: `translate(-50%, -50%)`,
      border: '1px solid #e5e5e5',
      backgroundColor: '#fff',
      boxShadow: '0 5px 15px rgba(0, 0, 0, .5)',
      padding: 8 * 4
    }
})