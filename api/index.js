const express = require('express');
const routes = require('./routes')
const manipuladorDeErros = require('./middlewares/manipuladorDeErros.js');
const manipulador404 = require('./middlewares/manipulador404.js.js');

const app = express();
const port = 3000;

routes(app)
app.use(manipulador404)
app.use(manipuladorDeErros)

app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port} com sucesso!`)
})

module.exports = app;