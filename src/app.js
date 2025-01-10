const express = require('express');
const { router } = require('./router');
// const dotenv = require('dotenv');

// dotenv.config();

const app = express();

app.use(router);

module.exports = {
    app
}