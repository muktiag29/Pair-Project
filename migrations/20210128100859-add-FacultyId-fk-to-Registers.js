'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Registers', 'FacultyId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Faculties',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Registers', null, {});
  }
};
