module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    categoryName: DataTypes.STRING
  });

Category.associate = function(models) {
  // Associating Author with Posts
  // When an  is deleted, also delete any associated Posts
  Category.hasMany(models.User, {
    onDelete: "cascade"
    //????
    });
  };
  return Category;
};
