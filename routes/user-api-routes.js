var db = require("../models");

module.exports = function(app) {
  // Get all users
  app.get("/api/user", function(req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      }
    }).then(function(dbUser) {
      res.json(dbUser);
    });
  }),
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  }),
  app.get("/api/userzip", function (req, res) {
    db.User.findOne({
      where: {
        id: req.user.id
      }
      
    }).then(function(dbUser) {
    res.json(dbUser)
  })
    console.log(dbUser)

  })
  app.get("/api/grocery", function (req, res){
    db.User.findAll({
      where: {
        id: req.user.id
      }
    }).then(function(dbUser){
      res.json(dbUser)
    })

  })
  app.get("/api/recipe", function (req, res){
    db.User.findAll({
      where: {
        id: req.user.id
      }
    }).then(function(dbUser){
      res.json(dbUser)
    })
  })
  app.get("/api/category", function (req, res){
    db.User.findAll({
      where:{
        id: req.user.id
      }
    }).then(function(dbUser){
      re.json(dbUser)
    })
  })

  //  Delete an example by id
//   app.delete("/api/user/:id", function(req, res) {
//     db.User.destroy({ where: { id: req.params.id } }).then(function(dbUser) {
//       res.json(dbUser);
//     });
//   });
};