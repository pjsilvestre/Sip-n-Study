function changeLoginToLogout(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      document.getElementById("login").textContent = "Logout";
      document.getElementById("login").href = "#"; 
      document.getElementById("login").onclick = function() {
        firebase.auth().signOut();
        location.reload();
      }
    }
  });
}

function revealAddRestaurant(){
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      document.getElementById("addRestaurant").textContent = "Add a Restaurant";
    }
  })
}

window.onload = function() {
  changeLoginToLogout();
  revealAddRestaurant();
}