'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamentos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Departamentos.hasMany(models.Funcionarios, {
        foreignKey: 'departamentoId'
      })
    }
  }
  Departamentos.init({
    Nome: DataTypes.STRING,
    Descrição: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'Departamentos',
  });
  return Departamentos;
};