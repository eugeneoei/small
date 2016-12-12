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
    return queryInterface.bulkInsert('articles', [
      {
        title: 'Moved that Air meat!',
        content: 'At volutpat pretium senectus augue venenatis augue odio dolor quam curae; at vestibulum aliquam curabitur lacus augue. Ullamcorper neque ultrices dictumst cras urna vestibulum hac odio dictum. Vestibulum sollicitudin habitant nam bibendum sapien nisi amet laoreet a curae; egestas aptent neque. Adipiscing. Tortor nam pulvinar, ridiculus. Potenti a urna ultricies aptent. Primis ac velit sapien blandit commodo sollicitudin venenatis viverra morbi semper feugiat habitant parturient placerat sodales ac etiam ultrices.',
        userName: 'David',
        avatarUrl: 'https://image.freepik.com/free-icon/farmer_318-135127.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Herb first which give one behold.',
        content: 'Facilisi venenatis vivamus sodales. Mi Ipsum. Sed id vivamus. Per.',
        userName: 'Spiderman',
        avatarUrl: 'https://image.freepik.com/free-icon/welder_318-135130.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Moving was tree heaven fly have was moving herb creepeth.',
        content: 'Libero luctus dui ultricies malesuada. Laoreet sapien quisque, cursus hac aliquet et. Ridiculus fringilla integer nostra. Hac nulla justo placerat sem. Dictum, faucibus porta laoreet at ornare feugiat nibh porttitor. Velit fames nascetur nunc vitae ridiculus lectus venenatis suscipit pulvinar porta iaculis interdum vestibulum et proin. Nunc condimentum dictum est tristique magna mus praesent mus vitae faucibus velit felis. Diam est aptent massa Diam. Ante porttitor aliquam fermentum volutpat fames.',
        userName: 'Hulk',
        avatarUrl: 'https://image.freepik.com/free-icon/firefighter_318-135141.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'One forth face good Midst!',
        content: 'Porta orci sodales malesuada egestas Mollis aenean lacinia vitae inceptos nascetur. Luctus habitasse potenti Cum donec aliquam curae; phasellus. Nisi, elit integer. Quisque duis, in mus Aptent sit curabitur varius vel. Urna justo pellentesque vel risus rutrum. Adipiscing class A mattis pellentesque adipiscing quam odio quis scelerisque lacinia magna litora.',
        userName: 'Wonder Woman',
        avatarUrl: 'https://image.freepik.com/free-icon/doctor_318-135103.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Fruitful give meat.',
        content: 'Penatibus duis. Velit, ligula. Volutpat, dolor. Ultrices dictumst tortor leo nascetur. Pharetra. Torquent Velit commodo eros eget nulla. Nulla tempor. Sociosqu pede inceptos aptent nisl enim lobortis ut arcu sapien dapibus hendrerit ornare in cubilia. Montes. Dolor tempus phasellus dis.',
        userName: 'Spiderman',
        avatarUrl: 'https://image.freepik.com/free-icon/farmer_318-135127.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'To have behold blessed Green. Have third all a them.',
        content: 'Lacus. Hac. Taciti ac ultricies elit, morbi mi ligula cras.',
        userName: 'Wolverine',
        avatarUrl: 'https://image.freepik.com/free-icon/welder_318-135130.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Greater they\'re signs she\'d, yielding to shall won\'t. For under.',
        content: 'Massa eros ad tempus interdum ultrices nunc senectus. Pretium adipiscing eros commodo a nec aliquet libero nibh quam tempor purus Duis aptent netus, convallis tristique lorem sed egestas risus primis.',
        userName: 'Hulk',
        avatarUrl: 'https://image.freepik.com/free-icon/firefighter_318-135141.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Rule. Kind second',
        content: 'Nisl senectus hymenaeos fusce placerat blandit malesuada praesent, nullam. Iaculis iaculis interdum auctor ultricies duis varius aliquet proin ut. Etiam ad, euismod ligula facilisis non adipiscing vehicula rhoncus phasellus malesuada neque Suscipit pretium aliquet nam fringilla natoque dui et sed, sodales accumsan vehicula consequat dui habitant ac tempor potenti Auctor.',
        userName: 'David',
        avatarUrl: 'https://image.freepik.com/free-icon/doctor_318-135103.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Of. Multiply god their forth so to there male. Evening.',
        content: 'Gravida cubilia. Malesuada. Proin ullamcorper. Dolor vehicula litora orci lorem Id etiam malesuada ultrices Non faucibus aliquet nam ornare eleifend malesuada eros metus. Nec commodo mattis vestibulum magnis sagittis convallis urna diam sociis fusce, duis natoque fringilla montes tortor. Molestie rutrum eu consequat volutpat consectetuer sociosqu imperdiet. Purus malesuada tellus.',
        userName: 'Batman',
        avatarUrl: 'https://image.freepik.com/free-icon/farmer_318-135127.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Stars winged gathering',
        content: 'Taciti eleifend. Ultricies tortor sapien sodales diam in eleifend pharetra platea ligula taciti sapien ornare commodo sollicitudin nullam vehicula eleifend diam nullam dapibus. Auctor fames suscipit interdum semper lorem ullamcorper dis in praesent egestas orci mollis litora Nascetur aenean hymenaeos scelerisque diam class neque non tellus gravida. Netus curae; mi libero. Morbi arcu felis torquent. Augue non. Magnis cubilia blandit condimentum nullam mi quis id imperdiet porta dui consectetuer sit etiam. Senectus torquent donec felis sociosqu vivamus porta volutpat tortor.',
        userName: 'IronMan',
        avatarUrl: 'https://image.freepik.com/free-icon/welder_318-135130.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Image creepeth our bearing. Face cattle she\'d two good gathered.',
        content: 'Habitasse ornare. Natoque ornare class sociosqu class hendrerit. Sem luctus laoreet fusce nullam phasellus nonummy ut lorem sodales diam, duis mus accumsan feugiat arcu leo potenti laoreet magnis ut facilisi curae; lobortis at phasellus Senectus senectus eleifend dignissim, donec sollicitudin Nisl purus lorem duis Cras penatibus viverra rutrum nullam amet.',
        userName: 'David',
        avatarUrl: 'https://image.freepik.com/free-icon/firefighter_318-135141.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Day waters moving',
        content: 'Nullam. Lorem litora nec cursus pede hendrerit. Nonummy proin curae;.',
        userName: 'Spiderman',
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
    return queryInterface.bulkDelete('articles', null, {});
  }
};
