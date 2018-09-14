module.exports = function(sequelize, DataTypes) {
  var Grocery = sequelize.define("Grocery ", {
    ingredientName : DataTypes.TEXT,
  });
  return Grocery ;
};

Grocery.associate = function(models) {
  // Associating Grocery with Recipe
  // When an  is deleted, also delete any associated Posts
  Grocery.belongsTo(models.Recipe, {
    foreignKey: {
      allowNull: false
    }
  });
return Grocery ;
};