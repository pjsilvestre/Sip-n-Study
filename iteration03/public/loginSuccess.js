
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from "firebase/app";
// Add the Firebase products that you want to use
import "firebase/auth";
import "firebase/database";

var ui = new firebaseui.auth.AuthUI(firebase.auth());

//Create a variable to represent the user that is currently logged in 
var user = firebase.auth().currentUser;
//variables to store name email and if the email is verified
var name, email, emailVerified;

firebase.auth().onAuthStateChanged(function(user) {
    if (user != null) {
      // User is signed in.
      name = user.displayName;
      email = user.email;
      emailVerified = user.emailVerified;
      document.getElementById("name").innerHTML = name;
      document.getElementById("email").innerHTML = email;
      document.getElementById("emailVerified").innerHTML = emailVerified;
    } else {
      // No user is signed in.
    }
  }
  );






// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-g1koyEJWHPMBQ3ZTBhVEOoHCvK3eJgk",
    authDomain: "careful-cosine-235618.firebaseapp.com",
    databaseURL: "https://careful-cosine-235618.firebaseio.com",
    projectId: "careful-cosine-235618",
    storageBucket: "careful-cosine-235618.appspot.com",
    messagingSenderId: "221578522075"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);






