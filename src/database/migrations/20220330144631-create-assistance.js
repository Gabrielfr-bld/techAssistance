'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('assistances', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      userName: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        }
      },
      clientName: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "clients",
          key: "id",
        }
      },
      initialDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      finallyDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      progress: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      alertAssistance: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('assistances');
  }
};
