const NaoEncontrado = require("../erros/NaoEncontrado");

function manipulador404(req, res,next){
    const error404 = new NaoEncontrado()
    next(error404)
}

module.exports = manipulador404;