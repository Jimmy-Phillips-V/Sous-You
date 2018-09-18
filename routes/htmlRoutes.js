var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });

  // cms route loads login.html
  app.get("/login" ,function(req, res) {
    res.sendFile(path.join(__dirname, "../public/html/login.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.status(404).end();
  });

};

  // Render 404 page for any unmatched routes
  // app.get("*", function(req, res) {
  //   res.render("404");
  // });
