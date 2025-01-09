const express = require('express') ;

const router = express.Router();

const dataController = require('./controller/dataController');

router.get('/', (req, res) => {
    res.send('Olá !!!');
});

router.get('/data', dataController.view);

module.exports = {
    router,
};