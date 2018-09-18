var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    zipCode: DataTypes.INTEGER,
    userPreference: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  });

  User.associate = function(models) {
  // Associating Author with Posts
  // When an  is deleted, also delete any associated Posts
  User.hasMany(models.Recipe, {
    onDelete: "cascade"
    //????
  });
  User.belongsTo(models.Category, {
    foreignKey: {
      allowNull: false
      }
   });
  };

  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });
  return User;
};
