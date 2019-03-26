var map;
function initializeMap() {
    map = new google.maps.map(document.getElementById('map'), {
        center: {lat: 37.3352, lng: -121.8811},
        zoom: 8
    });
}