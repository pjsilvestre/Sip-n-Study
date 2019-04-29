function checkIfLoggedIn() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
    } else {
      alert("Were you logged out?");
      location.assign("login.html");
    }
  });
}

var defaultBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(37.3352, -121.8811),
  new google.maps.LatLng(37.3352, -121.8811)
);

var input = document.getElementById("restaurantName");
var options = {
  bounds: defaultBounds,
  types: ["establishment"]
};

checkIfLoggedIn();

autocomplete = new google.maps.places.Autocomplete(input, options);

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click", () => {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var db = firebase.firestore();
      var place = autocomplete.getPlace();
      var isBusy = document.getElementById;
      if (document.getElementById("isBusy").checked) {
        isBusy = true;
      } else {
        isBusy = false;
      }

      db.collection("restaurants").add({
        restaurantName: place.name,
        address: place.formatted_address,
        location: new firebase.firestore.GeoPoint(
          place.geometry.location.lat(),
          place.geometry.location.lng()
        ),
        userUID: user.uid,
        isBusy: isBusy
      });
      console.log("Restaurant added!");
      // location.assign("index.html");
    } else {
      alert("Restaurant not added! Were you logged out?");
      location.assign("login.html");
    }
  });
});

$(document).ready(function() {
  $("button").click(function() {
    $(".alert").show();
    $("button").prop("disabled", true);
    $("button").text("Submitted!");
  });
});
