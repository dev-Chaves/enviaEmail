const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');

const dontenv = require('dotenv');

dontenv.config();

const emailEnviar = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: '587',
    secure: false, 

    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PSS
    },   

});


const enviarEmail = async (req, res) => {

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
            to: 'joaobolasoapa@gmail.com',
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

module.exports = {
    emailEnviar,
    enviarEmail
}