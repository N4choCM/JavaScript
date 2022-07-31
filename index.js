let map, marker, geoLoc, watchId;

function initMap(){
    const myLatLng = {lat: -25.363, lng: 131.044}
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: myLatLng
    })

    marker = new google.maps.Marker({
        position: myLatLng,
        map,
        title: "Hola, Mundo."
    })
    geoPosition()
}

function geoPosition(){
    if(navigator.geolocation){
        let options = {timeout: 60000}
        geoLoc = navigator.geolocation
        watchId = geoLoc.watchPosition(showLocationOnMap, errorHandler, options)
    } else {
        alert("Lo siento, su navegador no soporta la geolocalización.")
    }
}

function centraMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}

function onError(error){
    console.log("Se ha producido un error y lo hemos gestionado.")
    console.error(error)
}