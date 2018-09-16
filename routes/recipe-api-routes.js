var db = require("../models");

module.exports = function(app) {
  // Get all recipes
  app.get("/api/recipe", function(req, res) {
    db.Recipe.findAll({}).then(function(dbRecipe) {
      res.json(dbRecipe);
    });
  });
};