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
        userId: 4,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 4,
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userId: 1,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userId: 2,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        articleId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        userId: 3,
        articleId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
        articleId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 3,
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
