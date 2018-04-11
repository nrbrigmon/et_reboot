import _ from 'lodash';

const AcresPerDevType = ( { features } ) => {
    
let fixName = function(obj){
    return {
        ...obj,
        devTypeName: obj.devTypeName.split(' ').join('_')
      }
  }
  let unfixName = function(word){
    return word.split('_').join(' ')
  }
  ///step one works! filter the data
  var objReduce =
          _.chain(features)
           .filter( function(o) {       //remove empty features
              return Object.keys(o.properties).length > 0
            })
           .map('properties')           //remove features due to size
           .map( function(o) {          //fix spaces in dev types
             return {...o, activeDevType: fixName(o.activeDevType) }
           })
           .groupBy(function (o, idx) { //group feautures by devtypes
             return o.activeDevType.devTypeName
           })
           .value()
  
  var final = []
  
  _.forEach(objReduce, function(value, idx) {
    let sum = _.reduce(value, function(sum, n) {    //get acreage totals
      return sum + n.acres;
    }, 0);
    // console.log(value);
    // console.log(idx);
    final.push({
      devType: unfixName(idx),
      totalAcre: sum,
      color: value[0].activeDevType.devTypeColor
    })
  });

  //return new array with dev types and their total acres
  return final;
}

export default AcresPerDevType;