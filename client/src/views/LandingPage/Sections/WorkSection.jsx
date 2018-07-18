import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import UpdateToast from 'ccomponents/modals/UpdateToast';
import LoadingComponent from 'ccomponents/global/LoadingComponent';

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";

class WorkSection extends React.Component {
	state = {
		from_name: '',
		from_email: '',
		email_text: '',
		isLoading: false
	}
	handleChange = event => {
		let updateCopy = {};
		updateCopy[event.target.id] = event.target.value;
		this.setState(updateCopy)
	};
	makeEmailAction(){
		this.props.sendEmail(this.state);
		this.setState({
			from_name: '',
			from_email: '',
			email_text: '',
			isLoading: true
		})
		//i'll also need a load animation...
	}
	componentDidUpdate(prevProps){
		if(prevProps.toast.open === this.props.toast.open){
			return
		} 
		if(this.props.toast.msg === "Email Sent!"){	
			this.setState({
				isLoading: false
			})
		}
	}
	render() {
	const { classes, ...rest } = this.props;
	// console.log(this.props)
	return (
		<div className={classes.section}>
		<GridContainer justify="center">
			<GridItem cs={12} sm={12} md={8}>
			<h2 className={classes.title}>Sign Up for Updates</h2>
			<h4 className={classes.description}>
				Sometimes we make progress, sometimes we sleep.
			</h4>
			{
                    this.state.isLoading ? <LoadingComponent /> :
				<form>
					<GridContainer>
					<GridItem xs={12} sm={12} md={6}>
						<CustomInput
						labelText="Your Name"
						id="from_name"
						formControlProps={{
							fullWidth: true
						}}
						inputProps={{
							onChange: this.handleChange
						}}
						/>
					</GridItem>
					<GridItem xs={12} sm={12} md={6}>
						<CustomInput
						labelText="Your Email"
						id="from_email"
						formControlProps={{
							fullWidth: true
						}}
						inputProps={{
							onChange: this.handleChange
						}}
						/>
					</GridItem>
					<CustomInput
						labelText="Your Message"
						id="email_text"
						formControlProps={{
						fullWidth: true,
						className: classes.textArea
						}}
						inputProps={{
						multiline: true,
						rows: 5,
						onChange: this.handleChange
						}}
					/>
					<GridContainer justify="center">
						<GridItem
						xs={12}
						sm={12}
						md={4}
						className={classes.textCenter}
						>
						<Button color="primary" onClick={()=>this.makeEmailAction()} >
							Send Message
						</Button>
						</GridItem>
					</GridContainer>
					</GridContainer>
				</form>
			}
			</GridItem>
		</GridContainer>
		<UpdateToast {...rest }/>
		</div>
		);
	}
}

export default withStyles(workStyle)(WorkSection);
