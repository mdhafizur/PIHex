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
$('.navbar-nav>li>a').on('click', function(){
  $('.navbar-collapse').collapse('hide');
});

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar_new").style.top = "0";
  } else {
    document.getElementById("navbar_new").style.top = "-50px";
  }
}

// lightGallery(document.getElementById('floorplan'), {
//   selector: '.item'
// });
// lightGallery(document.getElementById('booth_structure'), {
//   selector: '.item'
// });
lightGallery(document.getElementById('photo_gallery'), {
  selector: '.item'
});


// $("a.item").fancybox({
//   'transitionIn'	:	'elastic',
//   'transitionOut'	:	'elastic',
//   'speedIn'		:	600, 
//   'speedOut'		:	200, 
//   'overlayShow': false,
//   'margin': 20
// });