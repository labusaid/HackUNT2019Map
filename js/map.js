let currMarkers = [];

var map = null;

$( document ).ready(function() {
  $(".button").click(function() {
    map = document.getElementById("#mapID");
    $.ajax( {
      url: "https://us-central1-accessibility-ar.cloudfunctions.net/getAllMarkers",
        type: "GET",
        success: function(result){
          console.log(result.markers);
          var responseObj = result;
          console.log(result);
          for (i = 0; i < responseObj.count; i++) {
            responseObj.markers[i]
            var marker = new google.maps.Marker({
              position: {lat:parseFloat(responseObj.markers[i].lat),
                lng:parseFloat(responseObj.markers[i].long)},
              map: map,
              title: responseObj.markers[i].msg
            });
          }
        },
        error: function(error){
            console.log(error);
        }
    });
  });
});