jQuery(function(){

  // changes menu when link clicked
  $('.menuLink').click(function(){
    // hides the currently displayed element and the gallery
    $('.menuDisplay__content').fadeOut(1000);  
    $('.menuDisplay__gallery').fadeOut(1000);

    // grabs which content to show by the id
    var contentID = $(this).attr('id');  

    // appends the content ID to the class to generate the full class name
    var contentName = '.content__' + contentID;

    // shows the content in the div
    // delayed is required so current element displayed has time to fade out
    $(contentName).delay(1000).fadeIn(1000);
    });

});

// magnific popup for images
$('.popUpLink').magnificPopup({
  type: 'image',

  closeOnContentClick: 'true',

  mainClass: 'mfp-with-zoom', 
  zoom: {
    enabled: true,
    duration: 300, // duration of the effect, in milliseconds
    easing: 'linear', // CSS transition easing function
  }
});