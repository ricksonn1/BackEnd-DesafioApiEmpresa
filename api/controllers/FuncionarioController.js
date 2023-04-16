// const database = require('../models')
const NaoEncontrado = require('../erros/NaoEncontrado.js')


const { FuncionariosServices } = require('../services')
const funcionariosServices = new FuncionariosServices()

class FuncionarioController {


    static async pegaTodosOsFuncionarios(req, res, next) {
        try {
            const todosOsFuncionarios = await funcionariosServices.pegaTodosOsRegistros()
            res.status(200).json(todosOsFuncionarios)
        } catch (error) {
            next(error)
        }
    }
    static async pegaUmFuncionario(req, res, next) {
        const { id } = req.params
        try {
            const umFuncionario = await funcionariosServices.pegaUmRegistro(id)
            if (umFuncionario === null) {
                next(new NaoEncontrado("Id do Funcionario não localizado!"))
            } else {
                res.status(200).json(umFuncionario)
            }

        } catch (error) {
            next(error)
        }
    }
    static async criaFuncionario(req, res, next) {
        const dados = req.body
        try {
            await funcionariosServices.criaRegistro(dados)
            res.status(200).json({ mensagem: `Funcionario criado com sucesso!` })
        } catch (error) {
            next(error)
        }
    }

    static async atualizaFuncionario(req, res, next) {
        const novosDados = req.body
        const { id } = req.params
        try {
            const verificaId = await funcionariosServices.pegaUmRegistro(id)
            if (verificaId === null) {
                next(new NaoEncontrado("Usuario não existe no banco!"))

            } else {
                await funcionariosServices.atualizaRegistro(novosDados, id)
                const dadosAtualizados = await funcionariosServices.pegaUmRegistro(id)
                res.status(200).json(dadosAtualizados)
            }

        } catch (error) {
            next(error)
        }
    }

    static async deletaFuncionario(req, res, next) {
        const { id } = req.params
        try {
            const verificaId = await funcionariosServices.pegaUmRegistro(id)
            if (verificaId === null) {
                next(new NaoEncontrado("Esse usuario não existe no nosso banco!"))
            } else {
                await funcionariosServices.deletaRegistro(id)
                res.status(200).json({ mensagem: `Funcionario deletado com sucesso!` })
            }
        } catch (error) {
            next(error)
        }
    }
    static async restauraFuncionario(req, res, next) {
        const { id } = req.params
        try {
            await funcionariosServices.restauraRegistro(id)
            res.status(200).json({ mesangem: `Funcionario restaurado com sucesso!` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = FuncionarioController;