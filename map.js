var API_Key = "AIzaSyBxYAPAihvjSnTCU4QOc-sDY1gGWiQaHvA"

var googleMapsClient = require('@google/maps').createClient({
    key: API_Key
    
  });

  
// Geocode an address.
googleMapsClient.geocode({
    address: '94520'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results)    
    }
  });