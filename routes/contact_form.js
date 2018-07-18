let nodemailer = require('nodemailer');
const { Router } = require('express');
const router = Router();

let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'nrbrigmon@gmail.com',
    pass: '!!CHrrsr1'
  }
});

//post new building into table
router.post('/', (request, response, next) =>{
    console.log('testing email')
	let { from_name, from_email, email_text } = request.body;
	let full_email_text = `This is an autogenrated from contact form. This email is from ${from_email} and here's what it says:\n\n ${email_text}`;
    let mailOptions = {
		from: "nrbrigmon@gmail.com",
		to: "nrbrigmon@gmail.com",
		subject: 'Email from Chapa App from: '+from_name+'',
		text: full_email_text
	  };
	  transporter.sendMail(mailOptions, function(error, info){
		if (error) {
			response.send("ERROR!")
			console.log(error);
		} else {
			response.send("A OK!")
			console.log('Email sent: ' + info.response);
		}
	  });

})

module.exports = router;