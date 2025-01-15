const nodemailer = require('nodemailer');
const dontenv = require('dotenv');
const { emails, dataViewer } = require('../models/emailsModel');
const e = require('express');

dontenv.config();

const emailEnviar = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, 

    auth: {
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PSS
    },   

});

const enviarEmail = async (email) => {

    emailEnviar.verify((error, success) => {
        if (error) {
            console.error('Erro ao conectar ao servidor SMTP:', error);
        } else {
            console.log('Conexão ao servidor SMTP bem-sucedida!');
        };
    });

    const emails = await dataViewer();
    
    email = emails[0];

    try {
        const info = await emailEnviar.sendMail({
            from: 'Teste',
            to: email || process.env.EMAIL_TEST,
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

const sendEmails = async (req, res) => {

    try {
        const emails = await dataViewer();
        // console.log(emails[0]);
        for(const email of emails) {
            try {

                let sucessCount = 0;
                let failedCount = 0;

                const info = await emailEnviar.sendMail({
                    from: 'Teste',
                    to: email,
                    subject: 'Hello',
                    text: 'Hello World',
                    html: '<b>Teste</b>',
                });
        
                console.log({ message: `E-mail enviado com sucesso! || Mensagem enviada para ${info.messageId}` });
                sucessCount++;
        
            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);
                failedCount++;
        
                return({ message: 'Erro ao enviar o e-mail', error: error.message });
            };
        };

        res.status(200).json({
            message: 'Processamento concluído',
            successCount,
            failedCount
        });

    } catch (error) {
        console.error("Erro ao enviar múltiplos emais", error);
    };
};

module.exports = {
    emailEnviar,
    enviarEmail,
    sendEmails
};