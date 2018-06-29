const AWS = require('aws-sdk');
const { aws } = require('../config/keys');
const { Router } = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = Router();

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
          // console.log(file);
        let keyNameInS3 = Date.now().toString() + file.originalname; 
        cb(null, keyNameInS3);
      }
    })
  })
   
/* POST NEW FILE TO S3 */
router.post('/s3', upload.single('file'), (request, response, next) =>{

  response.json(response.req.file)

    // var myFile = request.body
    // var myFile = base64_encode(request.body)

    // var params = {
    //     Bucket: "chapa-s3-repo", 
    //     Key: request.body.name, 
    //     Tagging: "project=chapa&key2=value2",
    //     Body: myFile
    // };
    
    // s3Bucket.putObject( params, ( err, data ) => {
    //     if (err) return next(err);
    //     console.log("exito!")
    //     response.json(data);
    // });

});


module.exports = router;