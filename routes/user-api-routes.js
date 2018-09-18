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
  })
  // app.get("/api/users", function(req, res) {
  //   db.User.findAll().then(function(dbUser) {
  //     res.json(dbUser);
  //   });
  // }),
  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(dbUser) {
      res.json(dbUser);
    });
  })
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

// Signup Route with Password
app.post("/api/signup", function(req, res) {
  console.log(req.body);
  db.User.create({
    email: req.body.email,
    password: req.body.password
  }).then(function() {
    res.redirect(307, "/api/login");
  }).catch(function(err) {
    console.log(err);
    res.json(err);
    // res.status(422).json(err.errors[0].message);
  });
});

// Route for logging user out
app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
};