const { Router } = require('express')
const DepartamentoController = require('../controllers/DepartamentoController.js')

const router = Router();

router
    .get('/departamentos', DepartamentoController.pegaTodosOsDepartamentos)
    .get('/departamentos/:departamentoId/funcionarios', DepartamentoController.pegaTodosFuncionariosAssociadosAUmDepartamento)
    .put('/departamentos', DepartamentoController.criaDepartamento)
    .post('/departamentos/:id', DepartamentoController.atualizaDepartamento)
    .post('/departamentos/:id/restaura', DepartamentoController.restauraDepartamento)
    .delete('/departamentos/:id', DepartamentoController.deletaDepartamento)


module.exports = router;
