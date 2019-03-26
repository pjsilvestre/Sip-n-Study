function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.3352, lng: -121.8811},
    zoom: 16
  });

  //hardcoded markers for demo purposes
  const iconBase = 'https://developers.google.com/maps/documentation/javascript/examples/full/images/';
  const markerColor = "#000000"
  const markerfontSize = "16px"
  const markerfontWeight = "bold"

  var SJSUstudentMarker = new google.maps.Marker({
    position: {lat: 37.3340, lng: -121.8835},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'San Jose State University',
    label: {
      text: 'You',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight }
    })

  var SJSUstudentInfoWindow = new google.maps.InfoWindow({
    content: SJSUstudentMarker.title});

  SJSUstudentMarker.addListener('mouseover', function() {
    SJSUstudentInfoWindow.open(map, SJSUstudentMarker)})
  SJSUstudentMarker.addListener('mouseout', function() {
    SJSUstudentInfoWindow.close()})


  var philzCoffeeMarker = new google.maps.Marker({
    position: {lat: 37.3336, lng: -121.8849},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Philz Coffee',
    label: {
      text: 'Philz Coffee',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight}
  })

  var philzCoffeeInfoWindow = new google.maps.InfoWindow({
    content: philzCoffeeMarker.title +'<p>Availability: Busy</p>'});

  philzCoffeeMarker.addListener('mouseover', function() {
    philzCoffeeInfoWindow.open(map, philzCoffeeMarker)})
  philzCoffeeMarker.addListener('mouseout', function() {
    philzCoffeeInfoWindow.close()})


  var teaAlleyMarker = new google.maps.Marker({
    position: {lat: 37.3354, lng: -121.8899},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Tea Alley',
    label: {
      text: 'Tea Alley',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight }
    })

  var teaAlleyInfoWindow = new google.maps.InfoWindow({
    content: teaAlleyMarker.title + '<p>Availability: Free</p>'});

  teaAlleyMarker.addListener('mouseover', function() {
    teaAlleyInfoWindow.open(map, teaAlleyMarker)})
  teaAlleyMarker.addListener('mouseout', function() {
    teaAlleyInfoWindow.close()})


  var caffeFrascatiMarker = new google.maps.Marker({
    position: {lat: 37.3312, lng: -121.8870},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Caffe Frascati',
    label: {
      text: 'Caffe Frascati',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight }
    })

  var caffeFrascatiInfoWindow = new google.maps.InfoWindow({
    content: caffeFrascatiMarker.title +'<p>Availability: Busy</p>'});

  caffeFrascatiMarker.addListener('mouseover', function() {
    caffeFrascatiInfoWindow.open(map, caffeFrascatiMarker)})
  caffeFrascatiMarker.addListener('mouseout', function() {
    caffeFrascatiInfoWindow.close()})


  var academicCoffeeMarker = new google.maps.Marker({
    position: {lat: 37.32925, lng: -121.88416},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'Academic Coffee',
    label: {
      text: 'Academic Coffee',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight }
    })

  var academicCoffeeInfoWindow = new google.maps.InfoWindow({
    content: academicCoffeeMarker.title +'<p>Availability: Busy</p>'});

  academicCoffeeMarker.addListener('mouseover', function() {
    academicCoffeeInfoWindow.open(map, academicCoffeeMarker)})
  academicCoffeeMarker.addListener('mouseout', function() {
    academicCoffeeInfoWindow.close()})


var properCupMarker = new google.maps.Marker({
    position: {lat: 37.33516, lng: -121.89212},
    map: map,
    animation: google.maps.Animation.DROP,
    title: 'The Proper Cup',
    label: {
      text: 'The Proper Cup',
      color: markerColor,
      fontSize: markerfontSize,
      fontWeight: markerfontWeight }
    })

  var properCupInfoWindow = new google.maps.InfoWindow({
    content: properCupMarker.title +'<p>Availability: Free</p>'});

 properCupMarker.addListener('mouseover', function() {
    properCupInfoWindow.open(map, properCupMarker)})
  properCupMarker.addListener('mouseout', function() {
    properCupInfoWindow.close()})


  function toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }
}
