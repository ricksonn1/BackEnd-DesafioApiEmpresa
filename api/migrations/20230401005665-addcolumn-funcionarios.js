'use strict'
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Funcionarios', 'deletedAt', {

            allowNull: true,
            type: Sequelize.DATE

        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Funcionarios', 'deletedAt');
    }
}