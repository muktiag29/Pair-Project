'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Registers', 'StudentId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Students',
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
