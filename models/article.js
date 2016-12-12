'use strict';
module.exports = function(sequelize, DataTypes) {
  var article = sequelize.define('article', {
    userName: DataTypes.STRING,
    avatarUrl: DataTypes.TEXT,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    articleImageUrl: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.article.hasMany(models.articleLike);
        models.article.hasMany(models.comment);
      }
    }
  });
  return article;
};
