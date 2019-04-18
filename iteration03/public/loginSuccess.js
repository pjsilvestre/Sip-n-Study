function initApp()
{
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      var displayName = user.displayName;
      // ...

      document.getElementById("user").textContent="Login sucessful. Welcome, " + user.displayName + ".";
    } else {
      // User is signed out.
      // ...
    }
  });
}

var db = firebase.firestore();

//TODO
function userHasRestaurant(){
  
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      db.collection("restaurants").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.data().userUID);
          if (doc.data().userUID === user.uid)
          {
            document.getElementById("addRestaurantPrompt").textContent = '';
          }
        });
      });
    }
  });
}

window.onload = function() {
  initApp();
  userHasRestaurant();
}