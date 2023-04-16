# Utilizei esse modelo de Empresa como desafio para testar meus conhecimentos com APIs!


## O Desafio

Você foi contratado para desenvolver uma API para gerenciar os funcionários de uma empresa. Para isso, você deve utilizar o ORM Sequelize e o padrão de arquitetura MVC com Node.js. Sua API deve ser capaz de realizar as seguintes operações:

## Requisitos

Esses requisitos são obrigatórios e devem ser desenvolvidos para a entrega do teste.

### CRUD

Cadastrar funcionários, com nome, e-mail, cargo e salário.
Listar todos os funcionários cadastrados.
Buscar um funcionário pelo seu ID.
Atualizar as informações de um funcionário, incluindo nome, e-mail, cargo e salário.
Excluir um funcionário pelo seu ID.
Além disso, sua API deve ter validações para os campos obrigatórios e para o formato do e-mail, bem como tratamento de erros em caso de falhas nas operações.

A API deve permitir cadastrar departamentos, com nome e descrição.
Cada funcionário deve estar associado a um departamento.
A API deve permitir listar todos os departamentos cadastrados, assim como listar todos os funcionários de um determinado departamento.
Ao listar um funcionário, além das informações do próprio funcionário, a API deve retornar também as informações do departamento ao qual ele está associado.
Ao cadastrar um funcionário, deve ser possível informar o ID do departamento ao qual ele está associado.
Lembre-se de configurar as relações entre os modelos e utilizar as funções do Sequelize para trabalhar com associações e referências e também tratar erros caso haja falhas nas operações.

### Os endpoints devem ser os seguintes:

 Departamentos:

* GET /departamentos: retorna todos os departamentos cadastrados.
* GET /departamentos/:id/funcionarios: retorna todos os funcionários associados a um departamento específico.
* POST /departamentos: cadastra um novo departamento. O corpo da requisição deve incluir nome e descrição.
* PUT /departamentos/:id: atualiza os dados de um departamento específico. O corpo da requisição deve incluir nome e descrição.
* DELETE /departamentos/:id: exclui um departamento específico.
Lembre-se de validar os dados recebidos nas requisições, bem como de tratar possíveis erros que possam ocorrer durante as operações de CRUD.

 Funcionários:

* GET /funcionarios: retorna todos os funcionários cadastrados, incluindo o departamento ao qual estão associados.
* GET /funcionarios/:id: retorna os dados de um funcionário específico, incluindo o departamento ao qual está associado.
* POST /funcionarios: cadastra um novo funcionário. O corpo da requisição deve incluir nome, e-mail, cargo, salário e o ID do departamento ao qual o funcionário está associado.
* PUT /funcionarios/:id: atualiza os dados de um funcionário específico. O corpo da requisição deve incluir nome, e-mail, cargo, salário e o ID do departamento ao qual o funcionário está associado.
* DELETE /funcionarios/:id: exclui um funcionário específico.

## Extras

* Estrutura MVC + Services
* Exclusão suave
* Metodo restaura um registro deletado
* Verificações em nome e mail do Funcionario
* Verificação ao deletar no banco
* middlawares
* Verificaçãoes de erros

## Pra rodar o Projeto

* Estou utilizando MySQL
* Postman

* Npx sequelize-cli db:migrate

* Npm start pra rodar a aplicação
