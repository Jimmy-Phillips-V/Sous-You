var request = require("request");
var API_Key = "AIzaSyBxYAPAihvjSnTCU4QOc-sDY1gGWiQaHvA"

var search = "94520";
var query = "query=supermarkets"
var nodeArgs = process.argv;

for (var i = 3; i < nodeArgs.length; i++){
  if (3 === i) {
    search = " ";
  }
  search = search + " " + nodeArgs[i];
}

var googleMapsClient = require('@google/maps').createClient({
    key: API_Key
    
  });

  $.get("/api/userzip")
// Geocode an address.
// googleMapsClient.geocode({
//     address: '94520'
//   }, function(err, response) {
//     if (!err) {
//       console.log(response.json.results)    
//     }
//   });

function places(search) {
 $.ajax({url:'https://maps.googleapis.com/maps/api/place/textsearch/json?'+query+'+in+'
 +search+'&key=AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ', success: function(result){
//   function(error, response, body) {
//   if (!error && response.statusCode === 200) {
//     var parseBody = JSON.parse(body)
    console.log(result)
//     for (var i = 0; i < parseBody.length; i++) {
//       console.log(parseBody[i].html_attributions.name)
      
//     }
//  }
//  console.log(parseBody)

}
})
}
places();