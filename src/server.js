const { app } = require('./app.js');

const port = process.env.PORT || 3000;

app.listen(port, ()=> {

    console.log(`API Rodando na porta ${port}`);

});