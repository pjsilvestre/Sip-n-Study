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
      // User is signed in.
      var db = firebase.firestore();
      db.collection("restaurants")
        .get()
        .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
            console.log(doc.data().userUID);
            if (doc.data().userUID === user.uid) {
              document.getElementById("prompt").textContent = "";
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
