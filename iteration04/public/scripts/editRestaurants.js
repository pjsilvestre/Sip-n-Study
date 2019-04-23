function initTable() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var db = firebase.firestore();
      db.collection("restaurants")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            if (doc.data().userUID === user.uid) {
              var tableRef = document
                .getElementById("table")
                .getElementsByTagName("tbody")[0];

              // Insert a row in the table at the last row
              var newRow = tableRef.insertRow(tableRef.rows.length);

              // Insert a cell in the row at index 0
              var nameCell = newRow.insertCell(0);
              var addressCell = newRow.insertCell(1);
              var availabilityCell = newRow.insertCell(2);

              // Append a text node to the cell
              var newText = document.createTextNode(doc.data().restaurantName);
              var newText1 = document.createTextNode(doc.data().address);
              // newText2 = document.createTextNode(doc.data().isBusy);
              var newText2;
              if (doc.data().isBusy) {
                newText2 = document.createTextNode("Busy");
              } else {
                newText2 = document.createTextNode("Not Busy");
              }

              nameCell.appendChild(newText);
              addressCell.appendChild(newText1);
              availabilityCell.appendChild(newText2);
            }
          });
        });
    } else {
      alert("Did you get logged out?");
    }
  });
}

function initSelector() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var db = firebase.firestore();
      db.collection("restaurants")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            if (doc.data().userUID === user.uid) {
              var selectorRef = document.getElementById("restaurantSelector");
              var optionRef = document.createElement("option");
              console.log(doc.data().restaurantName);
              optionRef.value = doc.data().restaurantName;
              optionRef.innerHTML = doc.data().restaurantName;
              selectorRef.appendChild(optionRef);
            }
          });
        });
    } else {
      alert("Did you get logged out?");
    }
  });
}

function editRestaurant() {
  var selectedRestaurant = document.getElementById("restaurantSelector").value;
  var restaurantName = document.getElementById("restaurantName").value;
  var address = document.getElementById("address").value;
  var isBusy = document.getElementById("isBusy").value;
  console.log(selectedRestaurant);
  console.log(restaurantName);
  console.log(address);
  console.log(isBusy);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
    } else {
      alert("Restaurant not added! Were you logged out?");
      location.assign("login.html");
    }
  });
}

window.onload = function() {
  initTable();
  initSelector();
};
