const ErroBase = require("./ErroBase");

class ErroValidacao extends ErroBase{
    constructor(erro){
        const mensagemErrors = Object.values(erro.errors)
        .map(erro => erro.message).join("; ");
      super(`Os seguintes erros foram encontrados: ${mensagemErrors}` );
    }
}

module.exports = ErroValidacao;