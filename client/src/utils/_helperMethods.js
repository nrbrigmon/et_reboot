
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
  
export const getColorArray = (obj) => {
	return obj.map( function(arr){
		return arr.color
	});
}

export const windowToTop = () => {
  window.scrollTo(0, 0)
}


export const navigateTo = (destination, ctx) => {
	// console.log(ctx);
	ctx.history.push('/'+destination+'');
}