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

app.listen(port, () => {
	console.log(`App is listening on port ${port}.`);
});

