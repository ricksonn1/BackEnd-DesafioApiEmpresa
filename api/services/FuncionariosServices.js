const Services = require('./Services.js')
const database = require('../models/index.js')

class FuncionariosServices extends Services {
    constructor() {
        super('Funcionarios')
    }
    async pegaTodosFuncionariosAUmDepartamento({ where = {} }) {
        return database[this.nomeDoModelo].findAndCountAll({ where: { ...where } })
    }
}

module.exports = FuncionariosServices;