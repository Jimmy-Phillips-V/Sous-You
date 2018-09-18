var db = require("../models");

module.exports = function(app) {
  // Get all categories
  app.get("/api/category", function(req, res) {
    db.Category.findAll({}).then(function(dbCategory) {
      res.json(dbCategory);
    });
  })
  
  // Create a new example
  app.post("/api/category", function(req, res) {
    db.Category.create(req.body).then(function(dbCategory) {
      res.json(dbCategory);
    });
  });
};
z