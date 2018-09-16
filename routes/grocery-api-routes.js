var db = require("../models");

module.exports = function(app) {
  // Get all grocery items
  app.get("/api/grocery", function(req, res) {
    db.Grocery.findAll({}).then(function(dbGrocery) {
      res.json(dbGrocery);
    });
  });
};

