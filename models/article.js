'use strict';
module.exports = function(sequelize, DataTypes) {
  var article = sequelize.define('article', {
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    articleImageUrl: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.article.belongsTo(models.user);
        models.article.hasMany(models.articleLike);
        models.article.hasMany(models.comment);
      }
    }
  });
  return article;
};
