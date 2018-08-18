import * as _ from 'lodash';
import shortid from "shortid";

export const isEmptyObject = (obj) => {
	for(var prop in obj) {
		if (Object.prototype.hasOwnProperty.call(obj, prop)) {
			return false;
		}
	}
	return true;
}

export const getDevTypes = (obj) => {
	return obj.map( function(arr){
		return arr.devType
	})
}
  
export const getDevAcres = (obj) => {
	return obj.map( function(arr){
		return {
			name: arr.devType,
			y: Number( (arr.totalAcre).toFixed(2) )
		}
	})
}

export const getBldgIdsFromWkbk = (workbook) => {
	let { workbook_devtypes } = workbook;
	let bldg_Ids = workbook_devtypes[0].cellData;

	let newArray = bldg_Ids.map( obj => obj.bldgId );
	
	return newArray;
}

export const getColorArray = (obj) => {
	return obj.map( function(arr){
		return arr.color
	});
}

export const getRandomId = () => {
	return shortid.generate();
}

export const windowToTop = () => {
  window.scrollTo(0, 0)
}


export const navigateTo = (destination, ctx) => {
	// console.log(ctx.history);
	// console.log(destination)
	ctx.history.push('/'+destination+'');
}

export const checkDbError = (conn) => {
	// console.log(conn)
	return (conn === undefined 
		|| conn.code === 'ECONNREFUSED' 
		|| conn.code === 'ENOENT') 
		? true : false;
}

export const compareBldgArrays = (selectBldgs, devBldgs) => {
	//check if building doesn't already exist in existing wkbk state
	//create array of existing IDs
	let libraryBldgs = _.orderBy(_.map(selectBldgs, "uniqueId"))
	let devIds = _.orderBy(_.map(devBldgs, "bldgId"))
	// console.log("devIds",devIds)
	// console.log("libraryBldgs",libraryBldgs)
	let isSame = _.isEqual( libraryBldgs,  devIds );
	// console.log(isSame)

	//if the arrays are the same end function
	if (isSame){
		return {
			resp: true
		}
	} else {
		// if the arrays are different return false and the 
		// correct array
		return {
			resp: false,
			diffArray: devIds
		}
	}
	
}

export const getUserFirstName = (auth) => {
	if (auth){
		let profile = JSON.parse(auth.attributes.google_prof)
		let firstName = profile.displayName.split(" ")[0]
		return firstName
	} else {
		return ""
	}
}