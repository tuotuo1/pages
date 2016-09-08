window.onload = getMylocation;
function getMylocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(displayLocation,displayError);
    }
    else{
        alert("Oops,no geolocation support")
    }
}
function displayLocation(position){
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    var div = document.getElementById("location");
    div.innerHTML = "you are at latitude: " + latitude + "Longitude: " + longitude;
    showMap(position.coords);
}
function displayError(error){
    var errorTpye = {
        0:"Unknown error",
        1:"Permisson denied by user",
        2:"Position is not available",
        3:"Request timed out"
    }
    var errorMessage = errorTpye[error.code];
    if(error.code == 0  || error  == 2){
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
}
var map;
function showMap(coords){
    var googleLatAndLong = new google.maps.latLng(coords.latitude,coords.longitude);
    var mapOption = {
        zoom: 10,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOption);
}