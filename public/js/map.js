var request = require("request");
var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

var search = "94520";
var query = "query=supermarkets"


function places(search) {
 $.ajax({url:'https://maps.googleapis.com/maps/api/place/textsearch/json?'+query+'+in+'
 +search+'&key='+ API_Key, success: function(result){
    console.log(result)
    }
  })
}
places();

$.get("/api/userzip")