function initTable() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var db = firebase.firestore();

      db.collection("restaurants")
        .where("userUID", "==", user.uid)
        .onSnapshot(function(querySnapshot) {
          var count = 1;
          querySnapshot.forEach(function(doc) {
            var restaurantRef = db.collection("restaurants").doc(doc.id);

            var tableRef = document
              .getElementById("table")
              .getElementsByTagName("tbody")[0];

            // Insert a row in the table at the last row
            var newRow = tableRef.insertRow(tableRef.rows.length);

            // Insert a cell in the row at index 0
            var countCell = newRow.insertCell(0);
            var nameCell = newRow.insertCell(1);
            var availabilityCell = newRow.insertCell(2);

            // Append a text node to the cell
            var countText = document.createTextNode(count);
            var nameText = document.createTextNode(doc.data().restaurantName);
            var availabilityText = document.createElement("a");
            if (doc.data().isBusy) {
              availabilityText.innerHTML = "Busy";
              availabilityText.setAttribute("href", "");
              availabilityText.onclick = () => {
                restaurantRef.update({
                  isBusy: false
                });
                $("#table tbody tr").remove();
                return false;
              };
            } else {
              availabilityText.innerHTML = "Not Busy";
              availabilityText.setAttribute("href", "");
              availabilityText.onclick = () => {
                restaurantRef.update({
                  isBusy: true
                });
                $("#table tbody tr").remove();
                return false;
              };
            }

            countCell.appendChild(countText);
            nameCell.appendChild(nameText);
            availabilityCell.appendChild(availabilityText);

            count++;
          });
        });
    }
  });
}

initTable();
