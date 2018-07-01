let defaultState = [{
    uploadDate: ''
    ,modifiedDate: ''
    ,objectKey: ''
}]

function getObjectName(obj){
    let newName = '';
    //remove .zip or whatever file type it may be
    //split by the comma
    if(obj["Key"].split(".")[0]){
        newName = obj["Key"].split(".")[0]
    }
    if(newName.split(",")[1]){
        newName = newName.split(",")[1]
    }
    // console.log(newName)
    return newName;
}

function prepareS3Objects(payload){
    // console.log(payload);
    let newPayload = payload.map( (elem) => {
        return {
            objectName: getObjectName(elem)
            ,objectKey: elem["Key"]
            ,uploadDate: elem["Key"].split(",")[0]
            ,modifiedDate: elem["LastModified"]
        }
    });
    // console.log(newPayload);
    return newPayload;
}

export default function (state = defaultState, { type, payload } ) {
    switch (type) {
        case 'FETCH_S3_LAYERS':
            let newState = prepareS3Objects(payload)
            return newState;
        default:
            return state;
    }
}