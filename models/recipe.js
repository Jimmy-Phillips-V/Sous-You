module.exports = function(sequelize, //DataTypes
  ) {
  var Recipe = sequelize.define("Recipe", {
    body :{
      type : DataTypes.TEXT,
      allowNull : false,
      len : [1]
    }
  });

Recipe.associate = function(models) {
  // Associating Author with Posts
  // When an  is deleted, also delete any associated Posts
  Recipe.hasMany(models.Grocery, {
    onDelete: "cascade"
    //????
  }),
  Recipe.belongsTo(models.User, {
    foreignKey: {
      allowNull: false
    }
  });
};
  return Recipe;
};
