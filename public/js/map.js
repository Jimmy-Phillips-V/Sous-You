
var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

var search = "94520";
var query = "query=supermarkets"

app.get("/api/userzip", function (req, res) {
  db.User.findOne({
    where: {
      zip: req.user.zip
    }
    
  }).then(function(dbUser) {
  res.json(dbUser)
})

function places(search) {
 $.ajax({url:'https://maps.googleapis.com/maps/api/place/textsearch/json?'+query+'+in+'
 +zip+'&key='+ API_Key, success: function(result){
    console.log(result)
    }
  })
}
places()
