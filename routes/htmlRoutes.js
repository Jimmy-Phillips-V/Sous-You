var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  app.get("/profile", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/profile.html"));
  });

  // cms route loads login.html
  app.get("/login", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).end();
  });

};
