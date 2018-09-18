var API_Key = "AIzaSyCW-k8IgEVhb7dBDhlguI6pbmXVT2UEFMQ"

// var search = "94520";
var query = "query=supermarkets"

function places(zip) {
    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/" + "https://maps.googleapis.com/maps/api/place/textsearch/json?" + query + "+in+" + zip + "&key=" + API_Key,
        method: "GET"
    }).then(function (response) {
        console.log(response)
    })
}

function getuser() {
    $.ajax({
        url: "/api/userzip/",//<- id,
        method: "GET"
    }).then(function (zip) {
        console.log(zip)
        places(zip)// find zip;
    })
}

// var id = ///find the user
getuser()


