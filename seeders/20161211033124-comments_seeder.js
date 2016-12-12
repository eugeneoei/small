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
    return queryInterface.bulkInsert('comments', [
      {
        userName: 'Wolverine',
        articleId: 4,
        content: 'Moveth firmament firmament waters spirit also days said thing have.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 12,
        content: 'Fill midst whales doesn\'t appear replenish day let herb all.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 5,
        content: 'Morning of grass gathered you\'ll, it abundantly said in be.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 5,
        content: 'Fowl for they\'re gathering they\'re. Bearing, morning. Light were you\'re.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 2,
        content: 'Stars us beginning. Hath Waters subdue rule had god Days.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 3,
        content: 'Female won\'t two for hath Heaven. Seasons face two fruit.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'IronMan',
        articleId: 11,
        content: 'Subdue created grass him abundantly. Shall creepeth darkness dry he.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Hulk',
        articleId: 1,
        content: 'It waters. After. Moveth him cattle. Brought green wherein creature.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Hulk',
        articleId: 12,
        content: 'Saw. Waters and evening dry also can\'t their fly place.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 8,
        content: 'In replenish seas don\'t third second life days fruitful very.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 2,
        content: 'Every. Won\'t isn\'t bring unto fifth creeping man moveth it.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 9,
        content: 'Days can\'t morning for second were saying it multiply fowl.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'IronMan',
        articleId: 12,
        content: 'Which, you\'ll. Every signs seas be won\'t kind, midst their.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 1,
        content: 'Saw evening kind beginning had fish can\'t wherein sixth, midst.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 11,
        content: 'Night divide. Moving. Rule also whales life They\'re fill she\'d.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 8,
        content: 'Form wherein give may fill us to isn\'t were you.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Black Widow',
        articleId: 3,
        content: 'Waters beginning third creeping fourth signs have shall to can\'t.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Hulk',
        articleId: 2,
        content: 'Fish Light over Were you\'re and void air. Firmament Fifth.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'IronMan',
        articleId: 11,
        content: 'Every called. Cattle moveth green. Years creepeth you\'re second face.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Professor',
        articleId: 7,
        content: 'Won\'t abundantly one fruitful. Greater i fruit created isn\'t fifth.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 1,
        content: 'Fourth said moveth. From sixth kind living. Cattle signs green.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'SpiderMan',
        articleId: 12,
        content: 'Their. Brought saw Multiply made form. All third be lights.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'SpiderMan',
        articleId: 2,
        content: 'Form, above yielding green midst moveth morning unto called life.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 1,
        content: 'Whose. Fill fruit meat there a forth doesn\'t over. Above.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 7,
        content: 'Whales male signs from two first him replenish yielding, meat.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Professor',
        articleId: 10,
        content: 'Every kind seed firmament. Isn\'t herb light yielding face saw.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Superman',
        articleId: 1,
        content: 'Their us set multiply you\'re living bearing forth behold can\'t.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 8,
        content: 'His had moveth creeping one winged blessed day saw she\'d.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 6,
        content: 'Earth said shall. Make man created. Fifth to be a.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Superman',
        articleId: 9,
        content: 'Rule him make bearing fourth third likeness two good and.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 7,
        content: 'He. Whales cattle to male fowl own place. Fill them.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Superman',
        articleId: 7,
        content: 'Us us it meat made deep whose moving dominion morning.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'SpiderMan',
        articleId: 9,
        content: 'Beginning fruitful subdue all can\'t, him above give bring dominion.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 9,
        content: 'Us brought two it was, so moved so. Bearing face.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Batman',
        articleId: 1,
        content: 'Open can\'t creature. Air second doesn\'t. Thing multiply he over.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 11,
        content: 'Every give lights. You have us. Their. Called won\'t. Kind.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'Wolverine',
        articleId: 7,
        content: 'Place great good shall let, herb. Firmament stars rule bring.',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userName: 'IronMan',
        articleId: 1,
        content: 'Winged greater created beast Them us under upon seed kind.',
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
    return queryInterface.bulkDelete('comments', null, {});
  }
};
