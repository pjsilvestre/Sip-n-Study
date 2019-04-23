function initMap()
{
    var map = new google.maps.Map(document.getElementById('map'), 
    {
        // TODO get user location
        center: {lat: 37.3352, lng: -121.8811},
        zoom: 16,
        //disableDefaultUI: true
    });
}