const nodemailer = require('nodemailer');
const dontenv = require('dotenv');
const pLimit = require('plimit')
const { emails } = require('../models/emailsModel');

dontenv.config();

const limit = pLimit(10);

const emailEnviar = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false, 

    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PSS
    },   

});


const enviarEmail = async (to, req, res) => {

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
            to: process.env.EMAIL_TESTE,
            subject: 'Hello',
            text: 'Hello World',
            html: '<b>Teste</b>',
        });

        console.log(`Mensagem enviada para ${info.messageId}`);

        res.status(200).json({ message: 'E-mail enviado com sucesso!', messageId: info.messageId });

    } catch (error) {
        console.error('Erro ao enviar e-mail:', error);

        res.status(500).json({ message: 'Erro ao enviar o e-mail', error: error.message });
    }
};

const sendEmails = async () => {

    const tasks = emails.map(email => 
            limit(
                ()=> enviarEmail(email,'Assunto do Email', 'Conteúdo do e-mail')
        )
    );
    await Promise.all(tasks);
};

module.exports = {
    emailEnviar,
    enviarEmail
}