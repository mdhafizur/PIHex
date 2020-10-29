// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 4.3970, lng: 113.9933 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 18,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

lightGallery(document.getElementById('floorplan'), {
  selector: '.item'
});
lightGallery(document.getElementById('booth_structure'), {
  selector: '.item'
});
lightGallery(document.getElementById('photo_gallery'), {
  selector: '.item'
});

