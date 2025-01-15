const nodemailer = require('nodemailer');
const dontenv = require('dotenv');
const pLimit = require('p-limit');
const { emails } = require('../models/emailsModel');

dontenv.config();

// const limit = pLimit(10);

const emailEnviar = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false, 

    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PSS
    },   

});


const enviarEmail = async (to) => {

    emailEnviar.verify((error, success) => {
        if (error) {
            console.error('Erro ao conectar ao servidor SMTP:', error);
        } else {
            console.log('Conexão ao servidor SMTP bem-sucedida!');
        }
    });
    

    try {
        const info = await emailEnviar.sendMail({
            from: 'Teste',
            to: to || process.env.EMAIL_TEST,
            subject: 'Hello',
            text: 'Hello World',
            html: '<b>Teste</b>',
        });

        console.log(`Mensagem enviada para ${info.messageId}`);

        return({ message: 'E-mail enviado com sucesso!', messageId: info.messageId });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);

        return({ message: 'Erro ao enviar o e-mail', error: error.message });
    };
};

const sendEmails = async () => {

    const tasks = emails.map(email =>()=> enviarEmail(email,'Assunto do Email', 'Conteúdo do e-mail'));
    await Promise.all(tasks);
};

module.exports = {
    emailEnviar,
    enviarEmail,
    sendEmails
};