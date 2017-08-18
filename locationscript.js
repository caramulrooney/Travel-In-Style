
$(document).ready(function(){
    console.log("hi")
    var pathname = window.location.search;
    var location = pathname.split("=")[1]
    
    // console.log(getPlaceData(location))
    
    // // if (location == "rome"){
    // //     current_city = rome
    // // }

    // $.getJSON( "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDboAOWfBn1QuGopSsOBZFVvDlR1G6lB4E&callback=?&query=" + location, function(data) {
    //     console.log("hello")
    //     console.log(data)
    // }) 
    
    // $.ajax({
    //   url: "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDboAOWfBn1QuGopSsOBZFVvDlR1G6lB4E&query=" + location,
    //   xhrFields: {
    //       withCredentials: true
    //   }
    // })
    
})

function getPlaceData(query){
    
    var url = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyDboAOWfBn1QuGopSsOBZFVvDlR1G6lB4E&query=" + query;
    var headers = new Headers({
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'
    })
    fetch(url, {
      mode: 'no-cors',
      headers:headers
    })
    .then(function(data){
        console.log(data);
    })
    .then(function(json){
        console.log(json);
    })
    .catch(function(error){
        console.log(error);
    })
}