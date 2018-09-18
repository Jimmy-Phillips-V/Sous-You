var db = require("../models");

var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

var search = "94520";
var query = "query=supermarkets"

module.exports = function(app) {

app.get("/api/userzip/:id", function (req, res) {
  db.User.findOne({
    where: {
      email: req.params.id
    } 
  }).then(function(dbUser) {
  res.json(dbUser)
  })
});

function places() {
  $.ajax({
  url:"https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?"+query+"+in+"+search+"&key="+API_Key,
  method: "GET"
   }).then(function (response) {
     console.log(response)
   })
 }
 
 
 places();
}
