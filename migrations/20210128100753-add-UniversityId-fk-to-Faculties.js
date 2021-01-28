'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Faculties', 'UniversityId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Universities',
        key: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Faculties', null, {});
  }
};
