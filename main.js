function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.3352, lng: -121.8811},
    zoom: 16
  });

  //hardcoded markers for demo purposes
  var philzCoffeeMarker = new google.maps.Marker({
    position: {lat: 37.3336, lng: -121.8849},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Philz Coffee',
    label: 'A',
    color: "GREEN"

  })

  var philzCoffeeInfoWindow = new google.maps.InfoWindow({
    content: philzCoffeeMarker.title +'<p>Availability: Busy</p>'
  });

  philzCoffeeMarker.addListener('click', function() {
    philzCoffeeInfoWindow.open(map, philzCoffeeMarker);
  });


  var teaAlleyMarker = new google.maps.Marker({
    position: {lat: 37.3354, lng: -121.8899},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Tea Alley',
    label: 'B'
  })

  var teaAlleyInfoWindow = new google.maps.InfoWindow({
    content: teaAlleyMarker.title + '<p>Availability: Free</p>'
  });

  teaAlleyMarker.addListener('click', function() {
    teaAlleyInfoWindow.open(map, teaAlleyMarker);
  });

  
  var caffeFrascatiMarker = new google.maps.Marker({
    position: {lat: 37.3312, lng: -121.8870},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Caffee Frascati',
    label: 'C'
  })

  var caffeFrascatiInfoWindow = new google.maps.InfoWindow({
    content: caffeFrascatiMarker.title +'<p>Availability: Busy</p>'
  });

  caffeFrascatiMarker.addListener('click', function() {
    caffeFrascatiInfoWindow.open(map, caffeFrascatiMarker);
  });


  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
