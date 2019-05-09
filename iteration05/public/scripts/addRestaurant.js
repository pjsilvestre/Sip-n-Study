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

function addRestaurant() {
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
      var duplicateFound = false;

      db.collection("restaurants")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
            console.log(doc.data().restaurantName);
            if (doc.data().restaurantName === place.name) {
              duplicateFound = true;
            }
          });

          if (duplicateFound) {
            console.log("Duplicate found");
            $("#alertDanger").show();
          } else {
            console.log("Duplicate not found");

            db.collection("restaurants").add({
              restaurantName: place.name,
              address: place.formatted_address,
              location: new firebase.firestore.GeoPoint(
                place.geometry.location.lat(),
                place.geometry.location.lng()
              ),
              userUID: user.uid,
              isBusy: isBusy,
              timeUpdated: new Date()
            });

            $("#alertDanger").hide();
            $("#alertSuccess").show();
            $("#submit").prop("disabled", true);
            $("#submit").text("Submitted!");
          }
        });
    } else {
      $("#alertWarning").show();
    }
  });
}

var submitButton = document.getElementById("submit");

submitButton.addEventListener("click", addRestaurant);
