import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';

class InputFieldsComponent extends Component {
    constructor(props){
        super(props);
		this.handleChange = this.handleChange.bind(this);

	}
	// decimalAdjustment(number){
	// 	let numString = String(number);
	// 	let lastCharacter = numString.substr(numString.length - 1);
	// 	return (lastCharacter === "." ? numString+"0" : numString)
	// }
	handleChange = event => {
		//below is a workaround for 
		//material-ui dropdown not having an id
		if (event.target.name){
			event.target.id = event.target.name
		}
		this.props.inputUpdate(event);
	};
	handleNumbChange = event => {
		// console.log(event.target.value);
		// handle decimal input
		let valueSub = Number(event.target.value); 
		// console.log(valueSub);
		this.props.inputUpdate(event, valueSub);
	};	

	handlePercChange = event => {
		// console.log(event.target.value);
		let valueSub = Number(event.target.value) / 100;
		// console.log(valueSub);
		this.props.inputUpdate(event, valueSub);
	};	

    render(){
		let {bldgAttr, classes, section} = this.props.attributes;
		
		if (this.props.attributes.bldgAttr === undefined){
			return ''; ///here is where we return the loading component
		} else {
			return section.map((item, idx) => {
				if (item.input === 'text'){
					return (
						<TextField
							disabled={ item.disable }
							key={idx}
							id={item.attr}
							label={item.name}
							placeholder={item.placeholder}
							className={classes.textField}
							value={bldgAttr[item.attr] || ''}
							onChange={ this.handleChange }
							margin="dense"
							helperText={item.helperText}
						/>
					);
				} else if (item.input === 'text-perc'){
					//method for *100 and /100 for display purposes.
					// console.log(bldgAttr[item.attr])
					let displayValue = (bldgAttr[item.attr] === 0 ? '' : Math.floor(bldgAttr[item.attr]*100) );
					// console.log(displayValue)
					return (
						<TextField
							disabled={ item.disable }
							key={idx}
							id={item.attr}
							label={item.name}
							placeholder={item.placeholder}
							className={classes.textField}
							value={ displayValue || '' }
							onChange={ this.handlePercChange }
							margin="dense"
							helperText={item.helperText}
						/>
					);
				} else if (item.input === 'number'){
					//method for *100 and /100 for display purposes.
					// console.log(bldgAttr[item.attr])
					let displayValue = (bldgAttr[item.attr] === 0 ? '' : Number(bldgAttr[item.attr]) );
					// console.log(displayValue)
					return (
						<TextField
							disabled={ item.disable }
							key={idx}
							id={item.attr}
							label={item.name}
							placeholder={item.placeholder}
							className={classes.textField}
							value={ displayValue || '' }
							onChange={ this.handleNumbChange }
							margin="dense"
							helperText={item.helperText}
						/>
					);
				} else if (item.input === 'select'){
					// console.log(obj[item.attr]);
					return (
						<TextField
							select
							key={idx}
							name={item.attr}
							id={item.attr} 
							label={item.name}
							className={classes.textField}
							onChange={this.handleChange}
							value={bldgAttr[item.attr] || ''}
							helperText={item.helperText}
							margin="dense"
						>
							{
								item.values.map( (subItem, subIdx) => {
									return (
										<MenuItem 
											key={subIdx}
											value={subItem}>{subItem}</MenuItem>
									)
								})
							}
						</TextField>
					);
				// } else if (item.input === 'dual-text'){
				// 	return (
						
				// 	)
				} else 	{
					return (<p>error here!</p>);
				}
			});
		}

	}
}
export default InputFieldsComponent;