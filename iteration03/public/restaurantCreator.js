var uid;
function initApp()
{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      uid = user.uid;
      var providerData = user.providerData;
      // ...

     //document.getElementById("restaurantname").textContent=displayName;

    } else {
      // User is signed out.
      // ...
    }
  });
}

var db = firebase.firestore();

function createButtonClicked(){

  var restaurantname = document.getElementById("restaurantname").value;
  db.collection("restaurants").doc(uid).set({restaurantName: restaurantname}); //writes restaurant name to database
  
  var restaurantaddress = document.getElementById("address").value;
  db.collection("restaurants").doc(uid).set({Address: restaurantaddress});  //writes restaurant address to database

  db.collection("restaurants").doc(uid).set({ownerUID: uid});  //writes UID of user to database

	var selector = document.getElementById('availability');
	var value = selector[selector.selectedIndex].value;
	db.collection("restaurants").doc(uid).set({isBusy: value}); 
	//var availabilityvalue = db.collection.doc(uid).get(isBusy);
	//document.getElementById("currentAvailability").textContent=availabilityvalue;
	

}

window.onload = function() {
  initApp();
}