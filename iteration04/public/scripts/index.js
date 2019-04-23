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

function changeLoginToLogout()
{
    firebase.auth().onAuthStateChanged(function(user)
    {
        if (user)
        {
            document.getElementById("login").textContent = "Logout";
            document.getElementById("login").href = "index.html";
            document.getElementById("login").onclick = function()
            {
                firebase.auth().signOut();
                location.reload();
            }
        }
    });
}

window.onload = function()
{
    changeLoginToLogout();
}