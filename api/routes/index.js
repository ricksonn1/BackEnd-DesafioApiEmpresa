const bodyParSer = require('body-parser')
const departamento = require('./departamentoRoute.js')
const funcionario = require('./funcionarioRoute.js')

module.exports = app => {
    app.use(bodyParSer.json())
    app.use(departamento)
    app.use(funcionario)

}