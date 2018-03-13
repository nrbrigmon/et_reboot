import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { MenuItem } from 'material-ui/Menu';

class InputFieldsComponent extends Component {
    constructor(props){
        super(props);
		this.handleChange = this.handleChange.bind(this);

	}
	
	handleChange = event => {
		// console.log(event);
		//below is a workaround for 
		//material-ui dropdown not having an id
		if (event.target.name){
			event.target.id = event.target.name
		}
		
		this.props.inputUpdate(event);
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