const { Router } = require('express')
const FuncionarioController = require('../controllers/FuncionarioController.js')

const router = Router()

router
    .get('/funcionarios', FuncionarioController.pegaTodosOsFuncionarios)
    .get('/funcionarios/:id', FuncionarioController.pegaUmFuncionario)
    .put('/funcionarios', FuncionarioController.criaFuncionario)
    .post('/funcionarios/:id', FuncionarioController.atualizaFuncionario)
    .post('/funcionarios/:id/restaura', FuncionarioController.restauraFuncionario)
    .delete('/funcionarios/:id', FuncionarioController.deletaFuncionario)


module.exports = router;
