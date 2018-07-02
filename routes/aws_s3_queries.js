const AWS = require('aws-sdk');
const { aws } = require('../config/keys');
const { Router } = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = Router();
const geoMethods = require('../services/geoMethods');

const s3Bucket = new AWS.S3({
    accessKeyId: aws.accessKeyId,
    secretAccessKey: aws.secretAccessKey
});

var upload = multer({
    storage: multerS3({
      s3: s3Bucket,
      bucket: "chapa-s3-repo", 
      metadata: function (req, file, cb) {
          // console.log(file);
        cb(null, {fieldName: file.fieldname});
      },
      key: function (req, file, cb) {
        //I'm using a comma to delimit the original name and my
        //unique identifier... will need to destructure afterward
        //and remove any comma in existing name.
        let fileName = (file.originalname).split(',').join(''); //remove commas just in case
        let keyNameInS3 = Date.now().toString()+"," + fileName;  //add comma with unique timestring
        cb(null, keyNameInS3);
      }
    })
  })
   
/* POST NEW FILE TO S3 */
router.post('/s3', upload.single('file'), (request, response, next) =>{

  response.json(response.req.file)

});

/* GET ALL OBJECTS FROM S3 */
router.get('/s3', (request, response, next) => {
  
  var params = {
    Bucket: "chapa-s3-repo"
   };
   s3Bucket.listObjects(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred     
    else     response.json(data)
   });
})

router.get('/s3/:bucketKey', (request, response, next) => { 
  const { bucketKey } = request.params;
  // console.log(request.params);
  var params = {
    Bucket: "chapa-s3-repo", 
    Key: bucketKey
   };
   s3Bucket.getObject(params, function(err, data) {
    //  console.log(data)
     if (err) {
      //  console.log(err, err.stack); // an error occurred     
      response.json("ERROR");
     } else {
      geoMethods
        .zipToGeoJSON(data["Body"])
        .then( function(newJSON){
          // console.log(newJSON);
          response.json(newJSON);
        })
    }  

   }); 

});

module.exports = router;