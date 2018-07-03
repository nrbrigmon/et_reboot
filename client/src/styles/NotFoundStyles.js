export default (theme) => ({
    card: {
      minWidth: 275, 
      margin: "200px 100px",
      padding: "50px",
      textAlign: "center"
    },
    title: {
      marginBottom: 16,
      fontSize: 14
    },
    header: {
      margin: "5px 0px",
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
    }
})