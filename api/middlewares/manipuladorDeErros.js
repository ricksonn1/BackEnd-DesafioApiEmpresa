const NaoEncontrado = require('../erros/NaoEncontrado.js');
const ErroBase = require('../erros/ErroBase.js');
const { ValidationError } = require('sequelize');
const ErroValidacao = require('../erros/ErroValidacao.js');

function manipuladorDeErros(erro, req, res, next) {

    if (erro instanceof NaoEncontrado) {
        erro.enviarResposta(res)
    } else if(erro instanceof ValidationError){
        new ErroValidacao(erro).enviarResposta(res)
    }
    else {
        new ErroBase().enviarResposta(res);
    }
}

module.exports = manipuladorDeErros;