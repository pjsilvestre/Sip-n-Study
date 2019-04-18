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
      var uid = user.uid;
      var providerData = user.providerData;
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
