const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');

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


const enviarEmail = async () =>{
    const info = await emailEnviar.sendMail({
        from: 'Teste',
        to:'joaobolasoapa@gmail.com',
        subject: 'Hello',
        text:'Hello World',
        html: '<b>Teste</b>'
    }).then( console.log(`Mensagem enviada para ${info.messageId}`)).catch(`${console.error()
    }`)

   

};

module.exports = {
    emailEnviar,
    enviarEmail
}