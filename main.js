function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.3352, lng: -121.8811},
    zoom: 16
  });

     var SJSUstudentMarker = new google.maps.Marker({
    position: {lat: 37.3340, lng: -121.8835},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Philz Coffee',
    label: 'YOU',

  })

  var SJSUstudentInfoWindow = new google.maps.InfoWindow({
    content: SJSUstudentMarker.title +'<p>Availability: Busy</p>'
  });

  SJSUstudentMarker.addListener('click', function() {
    SJSUstudentInfoWindow.open(map, SJSUstudentMarker);
  });

  var philzCoffeeMarker = new google.maps.Marker({
    position: {lat: 37.3336, lng: -121.8849},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Philz Coffee',
    label: 'A',

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

  var academicCoffeeMarker = new google.maps.Marker({
    position: {lat: 37.32925, lng: -121.88416},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Academic Coffee',
    label: 'D'
  })

  var academicCoffeeInfoWindow = new google.maps.InfoWindow({
    content: academicCoffeeMarker.title +'<p>Availability: Busy</p>'
  });

  academicCoffeeMarker.addListener('click', function() {
    academicCoffeeInfoWindow.open(map, academicCoffeeMarker);
  });


var properCupMarker = new google.maps.Marker({
    position: {lat: 37.33516, lng: -121.89212},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'The Proper Cup',
    label: {
    text: 'The Proper Cup',
    color: "#000000",
    fontSize: "16px",
    fontWeight: "bold"
  }
  })

  var properCupInfoWindow = new google.maps.InfoWindow({
    content: properCupMarker.title +'<p>Availability: Free</p>'
  });

 properCupMarker.addListener('click', function() {
    properCupInfoWindow.open(map, properCupMarker);
  });

  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
