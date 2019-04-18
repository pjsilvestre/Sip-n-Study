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

window.onload = function() {
  initApp();
}