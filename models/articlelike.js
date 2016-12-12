'use strict';
module.exports = function(sequelize, DataTypes) {
  var articleLike = sequelize.define('articleLike', {
    userName: DataTypes.STRING,
    articleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return articleLike;
};
