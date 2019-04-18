
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

firebase.initializeApp({
  apiKey: 'AIzaSyA-g1koyEJWHPMBQ3ZTBhVEOoHCvK3eJgk',
  authDomain: 'careful-cosine-235618.firebaseapp.com',
  projectId: 'careful-cosine-235618#'
});

var db = firebase.firestore();

updateButton.addEventListener("click", function(){

	console.log("hi");
	db.collection("restaurants").doc("pBldfSpa2rREACA3PVTU").set({
	    restaurantname: "Social Policy",
	    Address: "200 S 1st St, San Jose, CA 95113",
	    isBusy: true,
	});
});








