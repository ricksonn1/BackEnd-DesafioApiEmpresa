const database = require('../models');

class Services {
    constructor(nomeDoModelo) {
        this.nomeDoModelo = nomeDoModelo
    }

    async pegaTodosOsRegistros() {
        return database[this.nomeDoModelo].findAll()
    }
    async pegaUmRegistro(id) {
        return database[this.nomeDoModelo].findOne({ where: { id: id } })
    }
    async criaRegistro(dados) {
        return database[this.nomeDoModelo].create(dados)
    }
    async atualizaRegistro(novosDados, id) {
        return database[this.nomeDoModelo].update(novosDados, { where: { id: id } })
    }
    async deletaRegistro(id) {
        return database[this.nomeDoModelo].destroy({ where: { id: id } })
    }
    async restauraRegistro(id) {
        return database[this.nomeDoModelo].restore({ where: { id: id } })
    }
}

module.exports = Services;