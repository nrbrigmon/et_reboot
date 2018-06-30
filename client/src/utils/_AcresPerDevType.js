import _ from 'lodash';

const AcresPerDevType = ( { features } ) => {
  let fixName = function(obj){
    //this function removes spaces and replaces them with undescores
    //we need this bc we are going to group by this type, so it will
    //become an object key... which cant have spaces
    // console.log(obj);
    let newName = ( obj === undefined ? null : obj.devTypeName.split(' ').join('_'))
    return {
      ...obj,
        devTypeName: newName
      }
  }
  let unfixName = function(word){
    return word.split('_').join(' ')
  }
  ///step one works! filter the data
  let objReduce =
          _.chain(features)
           .filter( function(o) {       //remove empty features
              return Object.keys(o.properties).length > 0
            })
           .map('properties')           //only map properties to save on size
           .map( function(o) {          //fix spaces in dev types
            // console.log(o);
             return {...o, activeDevType: fixName(o.activeDevType) }
           })
           .groupBy(function (o, idx) { //group feautures by devtypes
             return o.activeDevType.devTypeName
           })
           .value()
  // console.log(objReduce);
  let final = []
  
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