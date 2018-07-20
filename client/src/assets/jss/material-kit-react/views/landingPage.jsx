import { container, title } from "assets/jss/material-kit-react.jsx";

const landingPageStyle = theme => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
	// [theme.breakpoints.down('xs')]: {
	// 	marginTop: '200px',
  	// },
    ...container
  },
  parallax: {
	height: '95vh',
	[theme.breakpoints.down('xs')]: {
		height: '120vh',
  	}
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
	marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
	margin: "-50px 30px 0px",
	[theme.breakpoints.down('xs')]: {
		margin: "60px 0 0 0"
  	},
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  }
});

export default landingPageStyle;
