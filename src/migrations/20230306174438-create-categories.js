'use strict';

module.exports = {
 async up(queryInterface, Sequelize) {
  await queryInterface.createTable('categories', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  })
 },
 async down(queryInterface, _Sequelize) {
  await queryInterface.dropTable('categories')
 }
};
