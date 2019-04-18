var db = firebase.firestore();

function addRestaurant(){
    var restaurantName = document.getElementById("restaurantName").value;
    var address = document.getElementById("address").value;
    var selector = document.getElementById("isBusy");
    var isBusy = selector[selector.selectedIndex].value;
    

    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          db.collection("restaurants").add({
            restaurantName: restaurantName,
            address: address,
            isBusy: isBusy,
            userUID: user.uid
        })
          alert("Restaurant added!");
        } else {
          alert("Restaurant not added! Were you logged out?")
        }
      });
}