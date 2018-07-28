
const user = require('../schemas/user');
const activeDevType = require('../schemas/activeDevType');
const devWorkbook = require('../schemas/devWorkbook');
const metricData = require('../schemas/metricData');

export default  {
	user,
	activeDevType,
	devWorkbook,
	metricData
}

// export default function(selection) => {
//     // console.log(request.params);    
// 	console.log(SCHEMA_LIST[selection]);
// 	return SCHEMA_LIST[selection];
// }
