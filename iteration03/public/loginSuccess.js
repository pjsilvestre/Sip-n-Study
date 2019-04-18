// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());

//Create a variable to represent the user that is currently logged in 
var user = firebase.auth().currentUser;
//variables to store name email and if the email is verified
var name, email, emailVerified;
if (user != null) {
  // User is signed in, display User information
  name = user.displayName;
  email = user.email;
  emailVerified = user.emailVerified;
} else {
  // No user is signed in.
}
