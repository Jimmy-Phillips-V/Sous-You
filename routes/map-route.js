// var db = require("./models");

var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

var search = "94520";
var query = "query=supermarkets"

module.exports = function(app) {

app.get("/api/userzip",/* passport ,*/function (req, res) {
  // db.User.findOne({
  //   where: {
  //     email: req.params.id
  //   } 
  // }).then(function(dbUser) {
  // res.json(dbUser.zipCode)
  // })

  //res.json(req.User.zipCode)


  res.json(search)
});


}
