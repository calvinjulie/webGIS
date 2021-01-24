let map;

// Found city of Toronto and changed zoom to 10 for the "city" level
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 43.6532, lng: -79.3832 },
    zoom: 10,
  });
}

