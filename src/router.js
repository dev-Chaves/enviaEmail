const express = require('express') ;

const router = express.Router();

const dataController = require('./controller/dataController');

const enviarEMail = require('../src/controller/emailController')

router.get('/', (req, res) => {
    res.send('Olá !!!');
});

router.get('/data', dataController.view);

router.post('/enviarEmail', enviarEMail.enviarEmail);

router.post('/variosEmails', enviarEMail.sendEmails);

module.exports = {
    router,
};