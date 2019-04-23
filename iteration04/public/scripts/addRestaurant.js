var db = firebase.firestore();

function addRestaurant() {
  var restaurantName = document.getElementById("restaurantName").value;
  var address = document.getElementById("address").value;
  var isBusy = document.getElementById("isBusy").value;
  // console.log(restaurantName);
  // console.log(address);
  // console.log(isBusy);

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      db.collection("restaurants").add({
        restaurantName: restaurantName,
        address: address,
        isBusy: isBusy,
        userUID: user.uid
      });
      alert("Restaurant added!");
    } else {
      alert("Restaurant not added! Were you logged out?");
      location.assign("login.html");
    }
  });

  //doesn't function properly to redirect user to homepage (values not written to db)
  //location.assign("index.html");
}
