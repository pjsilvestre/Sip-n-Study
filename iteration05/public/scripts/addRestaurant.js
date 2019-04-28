var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(37.3352, -121.8811),
  new google.maps.LatLng(37.3352, -121.8811)
);

var input = document.getElementById("restaurantName");
var options = {
  bounds: defaultBounds,
  types: ["establishment"]
};

autocomplete = new google.maps.places.Autocomplete(input, options);

var submitButton = document.getElementByIdById("submit");
submitButton.onclick = alert("test");
