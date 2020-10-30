// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: 4.397, lng: 113.9933 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 18,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
$('.navbar-nav>li>a').on('click', function () {
  $('.navbar-collapse').collapse('hide');
});



lightGallery(document.getElementById('photo_gallery'), {
  selector: '.item',
});

