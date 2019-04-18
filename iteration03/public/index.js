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


window.onload = function() {
  changeLoginToLogout();
}