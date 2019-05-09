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

  var db = firebase.firestore();

  function initMarkers() {
    db.collection("restaurants").onSnapshot(function(querySnapshot) {
      var restaurants = [];

      querySnapshot.forEach(function(doc) {
        restaurants.push(doc.data().name);
        var lat = doc.data().location.latitude;
        var lng = doc.data().location.longitude;
        var restaurantName = doc.data().restaurantName;
        var address = doc.data().address;
        var marker;

        var availability = "<p>Availability: ";

        if (doc.data().isBusy) {
          availability += "Busy</p>";
          marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: restaurantName,
            animation: google.maps.Animation.DROP,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/paddle/red-circle.png"
            }
          });
        } else {
          availability += "Not Busy</p>";
          marker = new google.maps.Marker({
            position: { lat, lng },
            map: map,
            title: restaurantName,
            animation: google.maps.Animation.DROP,
            icon: {
              url: "http://maps.google.com/mapfiles/kml/paddle/grn-circle.png"
            }
          });
        }

        var markerInfoWindow = new google.maps.InfoWindow({
          content: marker.title + availability + address
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

      var restaurantEditLink = document.getElementById("editRestaurant");
      restaurantEditLink.className = "nav-item nav-link";
    }
  });
}

window.onload = function() {
  initNavbar();
};
