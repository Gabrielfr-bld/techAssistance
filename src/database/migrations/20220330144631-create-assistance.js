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
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        }
      },
      clientId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
        references: {
          model: "clients",
          key: "id",
        }
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      initialDate: {
        type: Sequelize.DATEONLY,
        allowNull: false,
      },
      deadline: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      finallyDate: {
        type: Sequelize.DATEONLY,
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
      finishAssistance: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      }
    })
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('assistances');
  }
};
