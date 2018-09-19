var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

// var search = "94520";
var query = "query=supermarkets"



var map;
var geoCoder;
var center;
      function initMap() {
     $.get('/api/user_data', function(data){   
      geoCoder  = new google.maps.Geocoder() 
      geoCoder.geocode( { 'address': JSON.stringify(data.zip)}, function(results, status) {
        if (status == 'OK') {
          center = results
          console.log("sentinel", results[0].geometry.location.lat(), results[0].geometry.location.lng())
          initialCenter = new google.maps.LatLng(center[0].geometry.location.lat(), center[0].geometry.location.lng())   
          map = new google.maps.Map(document.getElementById('map'), {
              center: initialCenter,
              zoom: 12
            });
            places(data.zip);
        } else {
          alert('Geocode was not successful for the following reason: ' + status);
        }
      }); 
    })
    }

var markers = []

function places(zip) {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + `https://maps.googleapis.com/maps/api/place/textsearch/json?${query}+in+${zip}&key=${API_Key}`,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        for (var i =0; i<5; i++){
            // console.log(response.results[i])
            var marker = new google.maps.Marker({
              map: map,
              position: response.results[i].geometry.location
          });
          markers.push(marker)
          map.setCenter(response.results[4].geometry.location)
        } 
      console.log(markers)
      });
}




