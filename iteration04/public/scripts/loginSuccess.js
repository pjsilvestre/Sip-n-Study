function greetUser()
{
    firebase.auth().onAuthStateChanged(function(user){
        if (user) {
            //User was signed in successfully.
            var displayName = user.displayName;
            document.getElementById("user").textContent="Login successful. Welcome, " +user.displayName + ".";
        }
    })
}

window.onload = function()
{
    greetUser();
}