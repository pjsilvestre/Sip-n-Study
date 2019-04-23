var db = firebase.firestore();

function deleteRestaurant() {
  var restaurantName = document.getElementById("restaurantName").value;
  var address = document.getElementById("address").value;
  var isBusy = document.getElementById("isBusy").value;
  // console.log(restaurantName);
  // console.log(address);
  // console.log(isBusy);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var allrestaurants = db.collection("restaurants");
      let batch = db.batch();

      allrestaurants.get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          batch.delete(doc.ref);
        });
        return batch.commit();
      });
      alert("Restaurant(s) Deleted!");
    } else {
      alert("Restaurant not deleted! Were you logged out?");
      location.assign("login.html");
    }
  });

  //doesn't function properly to redirect user to homepage (values not written to db)
  //location.assign("index.html");
}
