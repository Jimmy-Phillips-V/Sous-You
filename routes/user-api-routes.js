var db = require("../models");
var passport = ("../config/passport");

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
    console.log(req.body)
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

app.post("/api/login", passport.authenticate("local"), function(req, res) {
  // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
  // So we're sending the user back the route to the members page because the redirect will happen on the front end
  // They won't get this or even be able to access this page if they aren't authed
  res.json("/members");
});

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