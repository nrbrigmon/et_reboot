const AWS = require('aws-sdk');
const {
	aws
} = require('../config/keys');
const {
	Router
} = require('express');
const multer = require('multer');
const multerS3 = require('multer-s3');
const router = Router();
const geoMethods = require('../services/geoMethods');
const fs = require('fs');
const AdmZip = require('adm-zip');

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
			cb(null, {
				fieldName: file.fieldname
			});
		},
		key: function (req, file, cb) {
			//I'm using a comma to delimit the original name and my
			//unique identifier... will need to destructure afterward
			//and remove any comma in existing name.
			let fileName = (file.originalname).split(',').join(''); //remove commas just in case
			let keyNameInS3 = Date.now().toString() + "," + fileName; //add comma with unique timestring
			cb(null, keyNameInS3);
		}
	})
})

/* POST NEW FILE TO S3 */
router.post('/s3', upload.single('file'), (request, response, next) => {

	response.json(response.req.file)

});
/* SAVE BASE LAYER TO S3 */

router.post('/s3/layerToS3', (request, response, next) => {

	let fileName = (request.body.name).split(',').join('').trim(); //remove commas just in case
	let _body = JSON.stringify(request.body);
	let keyNameInS3 = Date.now().toString() + "," + fileName + ".json"; //add comma with unique timestring
	// need to ensure we can retrive it AND it doesn't mess up the existing logic
	var params = {
		Bucket: "chapa-s3-repo",
		Body: _body,
		Key: keyNameInS3
	};
	console.log("trying to put object to s3")
	s3Bucket.putObject(params, function (err, data) {
		console.log("put done")
		if (err) {
			//  console.log(err, err.stack); // an error occurred     
			response.json("ERROR");
		} else {
			response.json(data)
		}
	})

});

/* GET ALL OBJECTS FROM S3 */
router.get('/s3', (request, response, next) => {

	var params = {
		Bucket: "chapa-s3-repo"
	};
	s3Bucket.listObjects(params, function (err, data) {
		if (err) console.log(err, err.stack); // an error occurred     
		else response.json(data)
	});
})

/* GET specific OBJECT FROM S3 by objectKey */
router.get('/s3/:objectKey', (request, response, next) => {
	const {
		objectKey
	} = request.params;

	// we want to determine the file type so we know how to process it.
	let fileType = objectKey.substr(objectKey.length - 3)
	var params = {
		Bucket: "chapa-s3-repo",
		Key: objectKey
	};
	// console.log(params)
	s3Bucket.getObject(params, function (err, data) {

		if (err) {
			// an error occurred     
			response.json("ERROR");
		} else {
			// if it's a zip file, it's a shape
			if (fileType === 'zip') {
				geoMethods
					.zipToGeoJSON(data["Body"])
					.then(function (newJSON) {
						// console.log(newJSON);
						response.json(newJSON);
					})
			} else {
				// else its a text file holding json
				let converted_data = JSON.parse(data["Body"].toString('utf8'));
				response.json( converted_data );
			}

		}
	})

});


module.exports = router;