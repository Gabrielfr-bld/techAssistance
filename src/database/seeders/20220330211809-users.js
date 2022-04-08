'use strict';


module.exports = {
  async up(queryInterface, _Sequelize) {
    await queryInterface.bulkInsert('users',
      [
        {
          name: 'Gabriel',
          typeUser: 'administrador',
          birthDate: '1998-11-11',
          phone: '34992496992',
          email: 'frank@frank.com',
          password: '123456'
        },
        {
          name: 'Fulano',
          typeUser: 'consultor',
          birthDate: '1984-01-25',
          phone: '34912345678',
          email: 'fulano@fulano.com',
          password: '654321'
        },
      ], {})
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
