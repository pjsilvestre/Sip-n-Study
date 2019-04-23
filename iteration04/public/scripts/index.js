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

function initTable()
{
    var db = firebase.firestore();
    db.collection("restaurants").get().then(function(querySnapshot)
    {
        querySnapshot.forEach(function(doc)
        {
            console.log(doc.id, " => ", doc.data());
            
            var tableRef = document.getElementById('table').getElementsByTagName('tbody')[0];

            // Insert a row in the table at the last row
            var newRow   = tableRef.insertRow(tableRef.rows.length);

            // Insert a cell in the row at index 0
            var nameCell  = newRow.insertCell(0);
            var addressCell = newRow.insertCell(1);
            var availabilityCell = newRow.insertCell(2);

            // Append a text node to the cell
            var newText  = document.createTextNode(doc.data().restaurantName)
            var newText1  = document.createTextNode(doc.data().address);
            var newText2  = document.createTextNode(doc.data().isBusy);

            nameCell.appendChild(newText);
            addressCell.appendChild(newText1);
            availabilityCell.appendChild(newText2);
        });
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
    initTable();
    changeLoginToLogout();
}