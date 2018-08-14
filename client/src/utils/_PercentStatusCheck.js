import React from 'react';
import NumberFormat from 'react-number-format';

const PercentStatusCheck = (dataArray, optionalText) => {
    let sum = 100 * dataArray.reduce( (acc, curr, idx) => { return Number(acc) + Number(curr);  });
    let myColor = ( Math.round(sum) !== 100 ? "red" : "green")
    // console.log(dataArray, sum, myColor)
    return (
        <span style={{color:myColor, fontWeight:700}}>
            {(optionalText ? optionalText : '')} 
            <NumberFormat 
                value={sum || 0}
                suffix="%" 
                displayType={'text'} 
                thousandSeparator={true}
                decimalScale={0}  />
        </span>
    )
}

export default PercentStatusCheck;