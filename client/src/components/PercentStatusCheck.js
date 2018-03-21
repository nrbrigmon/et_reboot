import React from 'react';


const PercentStatusCheck = (dataArray, optionalText) => {
    let sum = 100 * dataArray.reduce( (acc, curr, idx) => { return Number(acc) + Number(curr);  });
    let myColor = (sum !== 100 ? "red" : "green")
    // console.log(dataArray, sum)
    return (<span style={{color:myColor}}>{(optionalText ? optionalText : '') + sum + "%"}</span>)
}

export default PercentStatusCheck;