function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    // TODO get user location
    center: { lat: 37.3352, lng: -121.8811 },
    zoom: 16,
    disableDefaultUI: true,
    styles: [
      {
        featureType: "poi",
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "transit",
        stylers: [{ visibility: "off" }]
      },

      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }]
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }]
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }]
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }]
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }]
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }]
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }]
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }]
      }
    ]
  });

  infoWindow = new google.maps.InfoWindow();

  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        infoWindow.setPosition(pos);
        infoWindow.setContent("Location found.");
        infoWindow.open(map);
        map.setCenter(pos);
      },
      function() {
        handleLocationError(true, infoWindow, map.getCenter());
      }
    );
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(
      browserHasGeolocation
        ? "Error: The Geolocation service failed."
        : "Error: Your browser doesn't support geolocation."
    );
    infoWindow.open(map);
  }

  function initMarkers() {
    var db = firebase.firestore();
    db.collection("restaurants")
      .get()
      .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          var lat = doc.data().location.latitude;
          var lng = doc.data().location.longitude;
          var restaurantName = doc.data().restaurantName;

          var marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: restaurantName,
            animation: google.maps.Animation.DROP,
          });

          var markerInfoWindow = new google.maps.InfoWindow({
            content: marker.title,
          });

          marker.addListener("mouseover", () => {
            markerInfoWindow.open(map, marker);
          });
          marker.addListener("mouseout", () => {
            markerInfoWindow.close();
          });

        });
      });
  }

  initMarkers();
}

function initNavbar() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var loginLink = document.getElementById("login");

      loginLink.textContent = "Restaurant Owner Logout";
      loginLink.href = "index.html";
      loginLink.onclick = function() {
        firebase.auth().signOut();
        location.reload();
      };

      var restaurantAddLink = document.getElementById("addRestaurant");
      restaurantAddLink.className = "nav-item nav-link";
    }
  });
}

window.onload = function() {
  initNavbar();
};
