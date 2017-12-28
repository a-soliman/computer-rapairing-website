const express 		= require('express');
const bodyParser	= require('body-parser');
const path			= require('path');
const nodeMailer	= require('nodemailer');
const fs 			= require('fs');

const app 	= express();
let port 	= process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: false } ));

app.use(function (req, res, next) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
	res.setHeader('Access-Control-Allow-Credentials', true);
	res.setHeader('Access-Control-Allow-Headers', '*');
	next();
});

app.get('/', ( req, res ) => {
	const homeContent = fs.readFile('./data/home.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send({status: 'failed', message: 'Unable to retrive content.'})
		}
		
		res.status(200).send({ status: 'success', data })
	});
	
	
});

app.get('/about', ( req, res ) => {
	const aboutContent = fs.readFile('./data/about.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send({status: 'failed', message: 'Unable to retrive content.'})
		}
		
		res.status(200).send({ status: 'success', data })
	});
});

app.get('/contact', ( req, res ) => {
	const contactContent = fs.readFile('./data/contact.json', 'utf8', (err, data) => {
		if (err) {
			return res.status(400).send({status: 'failed', message: 'Unable to retrive content.'})
		}
		
		res.status(200).send({ status: 'success', data })
	});
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

