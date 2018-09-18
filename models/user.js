module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    zipCode: DataTypes.INTEGER,
    userPreference: DataTypes.STRING
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
return User;
};
