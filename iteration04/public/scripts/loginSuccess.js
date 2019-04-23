function greetUser() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      //User was signed in successfully.
      var displayName = user.displayName;
      document.getElementById("user").textContent =
        "Login successful. Welcome, " + user.displayName + "!";
    }
  });
}

function addRestaurantPrompt() {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      var db = firebase.firestore();
      db.collection("restaurants")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.foreach(function(doc) {
            if (doc.data().userUID === user.uid) {
              document.getElementById("addRestaurantPrompt").textContent = ";";
            }
          });
        });
    }
  });
}

window.onload = function() {
  greetUser();
  addRestaurantPrompt();
};
