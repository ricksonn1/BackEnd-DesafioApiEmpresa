'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Funcionarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Funcionarios.belongsTo(models.Departamentos, {
        foreignKey: 'departamentoId'
      })
    }
  }
  Funcionarios.init({
    Nome: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "O Nome não pode ficar vazio!"
        }
      }
    },
    Email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          args: true,
          msg: 'Dados do tipo e-email inválidos'
        }
      }
    },
    Cargo: DataTypes.STRING,
    Salario: DataTypes.DOUBLE,
    departamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Funcionarios',
  });
  return Funcionarios;
};