module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userName: DataTypes.STRING
  });
  return User;
};

User.associate = function(models) {
  // Associating Author with Posts
  // When an  is deleted, also delete any associated Posts
  User.hasMany(models.Recipes, {
    onDelete: "cascade"
    //????
  }),
  User.belongsTo(models.Category, {
    foreignKey: {
      allowNull: false
    }
  });
return User;
};


