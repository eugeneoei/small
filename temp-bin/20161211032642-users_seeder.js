'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'David',
        lastName: 'Tan',
        email: 'david@email.com',
        password: 'david@email.com',
        avatarUrl: 'https://image.freepik.com/free-icon/farmer_318-135127.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Jon',
        lastName: 'Doe',
        email: 'jon@email.com',
        password: 'jon@email.com',
        avatarUrl: 'https://image.freepik.com/free-icon/welder_318-135130.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Peter',
        lastName: 'Lee',
        email: 'peter@email.com',
        password: 'peter@email.com',
        avatarUrl: 'https://image.freepik.com/free-icon/firefighter_318-135141.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: 'Mary',
        lastName: 'Jane',
        email: 'mary@email.com',
        password: 'mary@email.com',
        avatarUrl: 'https://image.freepik.com/free-icon/doctor_318-135103.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
    return queryInterface.bulkDelete('users', null, {});
  }
};
