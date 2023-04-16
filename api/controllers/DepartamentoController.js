// const database = require('../models');
const sequelize = require('sequelize')

const { DepartamentosServices, FuncionariosServices } = require('../services')
const NaoEncontrado = require('../erros/NaoEncontrado')
const departamentosServices = new DepartamentosServices()
const funcionariosServices = new FuncionariosServices()


class DepartamentoController {

    static async pegaTodosOsDepartamentos(req, res) {
        try {
            const trasTodosOsDepartamentos = await departamentosServices.pegaTodosOsRegistros()
            res.status(200).json(trasTodosOsDepartamentos)
        } catch (error) {
            next(error)
        }
    }

    static async pegaTodosFuncionariosAssociadosAUmDepartamento(req, res, next) {
        const { departamentoId } = req.params
        try {
            const umDepartamento = await funcionariosServices.pegaTodosFuncionariosAUmDepartamento({ where: { departamentoId: departamentoId } })
            if (umDepartamento !== null) {
                next(new NaoEncontrado("Id não encontrado em nosso banco!"))
            } else {
                res.status(200).json(umDepartamento)
            }

        } catch (error) {
            next(error)
        }
    }

    static async criaDepartamento(req, res, next) {
        const novoDepartamento = req.body
        try {
            await departamentosServices.criaRegistro(novoDepartamento)
            res.status(200).json({ mensagem: `Departamento criado com sucesso!` })
        } catch (error) {
            next(error)
        }
    }
    static async atualizaDepartamento(req, res, next) {
        const novosDados = req.body
        const { id } = req.params
        try {
            const verificaId = await funcionariosServices.pegaUmRegistro(id)
            if (verificaId !== null) {
                await departamentosServices.atualizaRegistro(novosDados, id)
                res.status(200).json({ mensagem: `ID: ${id} atualizado com sucesso!` })
            } else {
                next(new NaoEncontrado("Departamento não cadastrado no nosso banco!"))
            }

        } catch (error) {
            next(error)
        }
    }
    static async deletaDepartamento(req, res) {
        const { id } = req.params
        try {
            const verificaId = await departamentosServices.pegaUmRegistro(id)
            if (verificaId !== null) {
                await departamentosServices.deletaRegistro(id)
                res.status(200).json({ mensagem: `ID: ${id} deletado com sucesso!` })
            } else {
                next(new NaoEncontrado("Id não encontrado em nosso banco!"))
            }
        } catch (error) {
            next(error)
        }
    }
    static async restauraDepartamento(req, res) {
        const { id } = req.params
        try {
            await departamentosServices.restauraRegistro(id)
            res.status(200).json({ mesangem: `Departamento restaurado com sucesso!` })
        } catch (error) {
            next(error)
        }
    }
}

module.exports = DepartamentoController;