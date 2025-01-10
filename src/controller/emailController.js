const nodemailer = require('nodemailer');

const pass = process.env.EMAIL_PASS;

const email = process.env.EMAIL_USER;

const emailEnviar = nodemailer.createTransport({
    host: 'smtp@gmail.com',
    port: '587',
    secure: false, 

    auth: {
        user: email, 
        pass: pass,
    },   

});

module.exports = {
    emailEnviar,
}