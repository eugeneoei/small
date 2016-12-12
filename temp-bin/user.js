var bcrypt = require('bcrypt-nodejs');

'use strict';
module.exports = function(sequelize, DataTypes) {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    avatarUrl: DataTypes.TEXT
  }, {
    hooks: {
      beforeCreate: function(createdUser, options, cb) {
        // hash the password
        // the salt is automatically generated and attached to the hash.
        // Though you can use your custom salt and there is no need for salts to
        // be persisted as it will always be included in the final hash result
        // and can be retrieved.
        // syntax here will be slightly different because you are using
        // bcrypt-nodejs instead of bcrypt
        var hash = bcrypt.hashSync(createdUser.password);
        // store the hash as the user's password
        createdUser.password = hash;
        // continue to save the user, with no errors
        cb(null, createdUser);
      }
    },
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        models.user.hasMany(models.article);
        models.user.hasMany(models.articleLike);
        models.user.hasMany(models.comment);
      }
    },
    instanceMethods: {
      validPassword: function(password) {
        // return if the password matches the hash
        return bcrypt.compareSync(password, this.password);
      },
      toJSON: function() {
        // get the user's JSON data
        var jsonUser = this.get();
        // here, we are sanitizing the user's information before returning it
        // what you do not want accessible, delete them here
        // delete the password from the JSON data, and return
        delete jsonUser.password;
        return jsonUser;
      }
    }
  });
  return user;
};
