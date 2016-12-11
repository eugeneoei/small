'use strict';
module.exports = function(sequelize, DataTypes) {
  var articleLike = sequelize.define('articleLike', {
    userId: DataTypes.INTEGER,
    articleId: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.articleLike.belongsTo(models.user);
      }
    }
  });
  return articleLike;
};
