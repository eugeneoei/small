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
    return queryInterface.bulkInsert('articleLikes', [
      {
        userName: 'Catwoman',
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Batman',
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wonderwoman',
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wonderwoman',
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Wolverine',
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Spiderman',
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wonderwoman',
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Spiderman',
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wonderwoman',
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userName: 'Catwoman',
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Spiderman',
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'David',
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Catwoman',
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Spiderman',
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 12,
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
    return queryInterface.bulkDelete('articleLikes', null, {});
  }
};
