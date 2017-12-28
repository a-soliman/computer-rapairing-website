const express 		= require('express');
const bodyParser	= require('body-parser');
const path			= require('path');
const nodeMailer	= require('nodemailer');

const app 	= express();
let port 	= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

app.get('/', ( req, res ) => {
	res.send({ title: 'Home page' })
});

app.get('/about', ( req, res ) => {
	res.send({ title: 'About page' });
});

app.get('/contact', ( req, res ) => {
	res.send({ title: 'Contact page' });
});

app.post('/contact/send', ( req, res ) => {
	let transporter = nodeMailer.createTransport( {
		service: 'Gmail',
		auth: {
			user: 'ahmedanwar.soliman@gmail.com',
			pass: '***'
		}
	});

	let name  	= req.body.name;
	let email 	= req.body.email;
	let message = req.body.message;

	let mailOptions = {
		from: 'Ahmed Soliman <ahmed@firewoodmarketing.com>',
		to: 'ahmed.soliman@email.com',
		subject: 'Website Submission',
		text: `You have a submission with the following details... Name: ${name}, Email: ${email}, Message: ${message}.`,
		html: `<p>You have a submission with the following details...</p> <ul><li><b>Name: </b>${name}</li><li><b>Email: </b>${email}</li><li><b>Message: </b>${message}</li></ul>`
	};

	transporter.sendMail(mailOptions, ( err, info ) => {
		if ( err ) {
			console.log(err);
			return res.status(401).send({message: 'Not able to send email...'})
		}
		console.log('Message Send: ' + info.response);
		res.status(200).send({message: `Message Sent : ${info.response}`});
	});
});

app.listen(port, () => {
	console.log(`App is listening on port ${port}.`);
});

