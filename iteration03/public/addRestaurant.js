var db = firebase.firestore();

function addRestaurant(){
    var restaurantName = document.getElementById("restaurantName").value;
    var address = document.getElementById("address").value;
    var selector = document.getElementById("isBusy");
    var isBusy = selector[selector.selectedIndex].value;
    
    db.collection("restaurants").add({
        restaurantName: restaurantName,
        address: address,
        isBusy: isBusy
    })

    alert("Restaurant added!");
}